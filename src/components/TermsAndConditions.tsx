import React from 'react';
import { Link } from './Link';

const COMPANY_NAME = 'Metaex Technology Services Private Limited';
const ADDRESS = '#2117, Prestige Royale Gardens, Bangalore - 560 064, Karnataka, India';
const EMAIL = 'hi@metaextec.com';

export function TermsAndConditions() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-secondary font-josefin mb-2">Terms and Conditions</h1>
      <p className="text-gray-500 mb-2">Merchant Terms</p>
      <p className="text-gray-500 mb-10">Last updated: February 2025</p>

      <div className="prose prose-lg text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions (“Terms”) constitute a binding agreement between you (“Customer”, “you”) and {COMPANY_NAME} (“we”, “us”, “our”, “Merchant”) for the use of our website, services, and any payments made through our platform. By accessing our website, engaging our services, or making a payment, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <p>
            We accept payments through Cashfree and other payment service providers. Your use of payment facilities is also subject to the applicable payment provider’s terms (e.g. Cashfree’s Website Merchant Terms:{' '}
            <a href="https://cashfree.com/en/tnc" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">cashfree.com/en/tnc</a>).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">2. Services</h2>
          <p>
            We provide technology and related services as described on our website and in separate agreements or statements of work. Scope, deliverables, and fees will be agreed in writing or through our accepted proposals. You are responsible for providing accurate information and timely cooperation required for the delivery of services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">3. Payments and Fees</h2>
          <p>
            You agree to pay all fees and charges as per the agreed terms. Payments may be collected via our payment gateway (including Cashfree). You must provide correct payment details and ensure sufficient funds. We reserve the right to suspend or terminate services for non-payment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">4. Refunds and Cancellation</h2>
          <p>
            Our refund and cancellation policy is set out in our separate <Link href="/refund-policy" className="text-accent hover:underline">Refund &amp; Cancellation Policy</Link>. By using our services and making payments, you acknowledge that you have read and accepted that policy. We do not provide cash refunds unless required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, all intellectual property in our deliverables, materials, and pre-existing tools remains with us. You receive a licence to use deliverables only for the purpose agreed. You may not reverse-engineer, copy, or resell our solutions without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">6. Confidentiality and Data</h2>
          <p>
            Each party will keep the other’s confidential information secure and use it only for the purpose of performing under these Terms. Our collection and use of personal data is described in our <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>. You consent to our sharing of information with payment processors and other service providers as necessary to provide services and comply with law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages, or loss of profits or data, arising from your use of our services or website. Our total liability for any claim shall not exceed the amount paid by you for the relevant service in the twelve (12) months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">8. Termination</h2>
          <p>
            We may suspend or terminate your access to our services or website for breach of these Terms, non-payment, or for any reason with reasonable notice where practicable. You may stop using our services at any time; payment obligations for services already rendered remain due.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">9. Governing Law and Disputes</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Bangalore, Karnataka.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">10. Changes</h2>
          <p>
            We may update these Terms from time to time. The updated version will be posted on this page with a revised “Last updated” date. Continued use of our services after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">11. Contact</h2>
          <p>
            For questions about these Terms, please contact:
          </p>
          <p className="mt-2">
            <strong>{COMPANY_NAME}</strong><br />
            {ADDRESS}<br />
            Email: <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a>
          </p>
        </section>
      </div>

      <p className="mt-12">
        <Link href="/" className="text-accent hover:underline">← Back to Home</Link>
      </p>
    </article>
  );
}
