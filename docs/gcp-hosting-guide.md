# metaextec website on GCP — hosting runbook

Moves the metaextec marketing site off S3 + Cloudflare onto the shared
**`frontend-server`** GCE VM in the `jobberdash` GCP project, consistent with the
other MET apps. It is a **static Vite/React bundle**, so Nginx serves the built
`dist/` directly — no PM2, no Node server at runtime.

| Aspect | Value |
|---|---|
| Domain | `metaextec.com` (+ `www`) |
| VM | `frontend-server` (public) |
| Checkout | `/opt/metaextec_site` (git, owned by `www-data`) |
| Served from | `/opt/metaextec_site/dist` via Nginx |
| TLS / front door | Direct A-record → VM static IP, Nginx + Certbot (no Cloudflare proxy) |
| Deploy | WIF + IAP, git-pull + `npm run build` on the VM ([`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)) |

The site has **no AWS/Cloudflare code lock-in** (no aws-sdk, no `_redirects`/
`_headers`/wrangler; the S3+Cloudflare deploy was manual). Two things the
migration does handle: the site routes on `window.location.pathname` (so Nginx
needs an SPA fallback), and two assets that pointed at the old `metaextec.com`
WordPress origin were localized/removed (see the spec).

---

## 1. GitHub Actions / WIF binding (one-time)

Reuse the existing `jobberdash-deploy-sa` and `github-pool`. Bind this repo:

```bash
PROJECT_NUMBER=$(gcloud projects describe jobberdash --format='value(projectNumber)')
gcloud iam service-accounts add-iam-policy-binding \
  jobberdash-deploy-sa@jobberdash.iam.gserviceaccount.com \
  --project=jobberdash \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/github-pool/attribute.repository/xavifun/metaexsite"
```

Also add `xavifun/metaexsite` to the provider's attribute-condition allow-list
(or use the `assertion.repository_owner`-based condition) so the token is accepted
— same step as the other repos.

Repo secrets:

| Secret | Value |
|---|---|
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | `projects/981562505847/locations/global/workloadIdentityPools/github-pool/providers/github-provider` |
| `GCP_SERVICE_ACCOUNT` | `jobberdash-deploy-sa@jobberdash.iam.gserviceaccount.com` |
| `GCP_PROJECT_ID` | `jobberdash` |
| `GCE_ZONE` | `asia-south1-a` |
| `GCE_INSTANCE` | `frontend-server` |

No build-time env vars are needed (the site reads no `import.meta.env`/`VITE_*`).

## 2. One-time VM prep (`frontend-server`)

Node is already installed (from the jobberdash setup). Clone the repo once (the
deploy builds in place and will not auto-clone):

```bash
gcloud compute ssh frontend-server --zone=asia-south1-a --tunnel-through-iap

# Private repo → use a PAT in the URL for this initial clone; the workflow uses
# its per-run GITHUB_TOKEN for subsequent fetches.
sudo git clone https://<PAT>@github.com/xavifun/metaexsite.git /opt/metaextec_site
sudo chown -R www-data:www-data /opt/metaextec_site

# Build once by hand so dist/ exists before Nginx points at it:
cd /opt/metaextec_site
sudo -u www-data env HOME=/opt/metaextec_site npm ci
sudo -u www-data env HOME=/opt/metaextec_site npm run build
```

## 3. Nginx vhost (static, with SPA fallback)

The site has no server. Nginx serves `dist/` and **falls back to `index.html`**
for unknown paths, which is what makes the client routes (`/blog`,
`/privacy-policy`, `/terms-and-conditions`, `/refund-policy`) work on a hard
refresh / deep link — `App.tsx` reads `window.location.pathname` on load.

```bash
sudo tee /etc/nginx/sites-available/metaextec.com > /dev/null <<'EOF'
server {
    listen 80;
    server_name metaextec.com www.metaextec.com;

    root /opt/metaextec_site/dist;
    index index.html;

    # Hashed Vite assets — cache hard.
    location /assets/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback: every route resolves to index.html.
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/metaextec.com \
  /etc/nginx/sites-enabled/metaextec.com
sudo nginx -t && sudo systemctl reload nginx
```

## 4. DNS + HTTPS

Point the domain at `frontend-server`'s static IP, then issue the cert (Certbot is
already installed on this VM):

```bash
gcloud compute instances describe frontend-server \
  --zone=asia-south1-a --format='value(networkInterfaces[0].accessConfigs[0].natIP)'
# Set A records for metaextec.com and www.metaextec.com to that IP (Cloudflare proxy
# OFF / "DNS only", or move DNS off Cloudflare entirely — this is a direct-to-VM setup).

dig +short metaextec.com      # must resolve to the VM IP before requesting the cert

sudo certbot --nginx -d metaextec.com -d www.metaextec.com --redirect \
  --agree-tos -m xavier@metaextec.com --no-eff-email
```

> If you keep using Cloudflare for DNS, set the records to **DNS only** (grey
> cloud). Leaving the orange proxy on would terminate TLS at Cloudflare and change
> the setup from the direct model chosen here.

## 5. Cutover & smoke test

1. WIF binding + secrets (§1), VM clone + first build (§2), Nginx vhost (§3).
2. DNS → VM, Certbot issued (§4).
3. `curl -I https://metaextec.com` → 200.
4. Deep links render (not 404): `/blog`, `/privacy-policy`,
   `/terms-and-conditions`, `/refund-policy`.
5. Landing: About section renders, every client logo (incl. greenikk) loads from
   the VM, and there are **no** requests to `metaextec.com/wp-content` in the
   browser network panel.
6. Push to `main` → the workflow fetches, `npm run build`, reloads Nginx.

## 6. Rollback

Point DNS back to the previous S3/Cloudflare front. The VM and its Nginx vhost can
stay up untouched.
