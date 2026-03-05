import React from 'react';
import { Link } from './Link';

const COMPANY_NAME = 'Metaex Technology Services Private Limited';
const ADDRESS = '#2117, Prestige Royale Gardens, Bangalore - 560 064, Karnataka, India';
const EMAIL = 'hi@metaextec.com';

export function RefundPolicy() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-secondary font-josefin mb-2">Refund &amp; Cancellation Policy</h1>
      <p className="text-gray-500 mb-10">No Refunds. No Cancellation. Last updated: February 2025</p>

      <div className="prose prose-lg text-gray-700 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">1. Policy Summary</h2>
          <p>
            {COMPANY_NAME} (“we”, “us”, “our”) operates a <strong>no refunds and no cancellation</strong> policy for fees paid for our technology and related services, except where otherwise required by applicable law or expressly agreed in writing.
          </p>
          <p>
            This policy is in line with our obligations as a merchant using payment gateways such as Cashfree. We do not provide cash refunds to customers unless required under applicable law. We clearly disclose this policy to you at the time of engagement and on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">2. No Refunds</h2>
          <p>
            Once payment has been made for our services (including advance payments, project fees, or subscription charges), we do not offer refunds. All fees are non-refundable unless:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>applicable law expressly requires a refund; or</li>
            <li>we have agreed in a separate written agreement to a specific refund or adjustment.</li>
          </ul>
          <p>
            By making a payment, you acknowledge that you have read and accepted this no-refund policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">3. No Cancellation</h2>
          <p>
            Once you have engaged our services and we have commenced work (including planning, design, or development), you may not cancel the engagement so as to avoid payment for work already done or committed. Any agreed milestones or payments remain due as per the terms agreed between us.
          </p>
          <p>
            If you wish to discontinue future work, we may agree to a stop of further deliverables by mutual consent; however, all amounts due for work already performed or contractually committed remain payable and are non-refundable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">4. Payment Gateway and Technical Refunds</h2>
          <p>
            Payments are processed through our payment partners (e.g. Cashfree). In the event of a failed transaction, duplicate charge, or technical error, we will work with the payment provider to resolve the issue. Any reversal or refund in such cases will be as per the payment provider’s rules and applicable regulations. For dispute or chargeback matters, our Terms and Conditions and the payment provider’s terms will apply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">5. Exceptions Required by Law</h2>
          <p>
            Nothing in this policy limits your rights under applicable consumer or other laws that cannot be excluded by contract. Where the law mandates a refund or cancellation right, we will comply with such requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">6. Questions and Contact</h2>
          <p>
            If you have any questions about this Refund &amp; Cancellation Policy, please contact us before making a payment. By proceeding with payment, you confirm that you have read, understood, and accepted this policy.
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
