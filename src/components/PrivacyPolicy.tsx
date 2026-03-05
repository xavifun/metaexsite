import React from 'react';
import { Link } from './Link';

const COMPANY_NAME = 'Metaex Technology Services Private Limited';
const ADDRESS = '#2117, Prestige Royale Gardens, Bangalore - 560 064, Karnataka, India';
const EMAIL = 'hi@metaextec.com';

export function PrivacyPolicy() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-secondary font-josefin mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-10">Last updated: February 2025</p>

      <div className="prose prose-lg text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">1. Introduction</h2>
          <p>
            {COMPANY_NAME} (“we”, “us”, “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, or interact with us. It applies to visitors, clients, and users of our services.
          </p>
          <p>
            For payment processing we use Cashfree Payments and other service providers. Cashfree’s privacy practices are governed by their own Privacy Policy available at{' '}
            <a href="https://www.cashfree.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">cashfree.com/privacypolicy</a>.
            By using our services you also agree to the collection and use of information as described in this policy and as required for payment and related operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact information:</strong> name, email address, phone number, address.</li>
            <li><strong>Account and usage data:</strong> information you provide when contacting us or using our services.</li>
            <li><strong>Payment-related data:</strong> transaction details are processed by our payment partners (e.g. Cashfree); we do not store full card details on our servers.</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information, and logs when you access our website or services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Process payments and comply with payment partner and legal requirements.</li>
            <li>Communicate with you about your enquiries, projects, or support.</li>
            <li>Comply with applicable laws, including under the Information Technology Act, 2000 and rules thereunder.</li>
            <li>Protect against fraud and ensure security of our systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">4. Sharing of Information</h2>
          <p>
            We may share your information with payment processors (such as Cashfree), service providers who assist our operations, and where required by law or regulatory authorities. We do not sell your personal information to third parties for marketing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">5. Data Security and Retention</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your data. We retain your information only for as long as necessary to fulfil the purposes described in this policy or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data where applicable under law. To exercise these rights or for any privacy-related queries, contact us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the latest version. We encourage you to review this page periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">8. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy or our data practices, please contact:
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
