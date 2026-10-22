import { Link } from 'react-router-dom';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal } from '../components/shared';

const privacySections = [
  { id: 'information-we-collect', title: 'Information We Collect', content: [
    'We collect information you provide directly to us, such as when you create an account, subscribe to a newsletter, or contact us. This includes your name, email address, company name, and any other information you choose to provide.',
    'We also collect information automatically when you use our service, including log data (IP address, browser type, pages visited), device information, and usage data (features used, time spent, actions taken).',
    'We collect information from third-party integrations you connect, such as Slack, GitHub, and Linear. This data is read-only and used solely to build and maintain your program state.'
  ]},
  { id: 'how-we-use-it', title: 'How We Use It', content: [
    'We use the information we collect to provide, maintain, and improve our services. This includes building program state, generating insights, and delivering notifications.',
    'We use your information to communicate with you, including sending service-related notices, updates, security alerts, and support messages.',
    'We may use aggregated, anonymized data for research and analytics purposes. This data does not identify you or your organization.'
  ]},
  { id: 'sharing', title: 'Sharing', content: [
    'We do not sell your personal information. We share information only as described in this policy and only with your consent.',
    'We share information with service providers who perform services on our behalf, such as hosting, analytics, and customer support. These providers are contractually bound to protect your data.',
    'We may share information if required by law, such as to comply with a court order or legal process, or to protect the rights, property, or safety of Convene, our users, or others.'
  ]},
  { id: 'retention', title: 'Retention', content: [
    'We retain your information for as long as your account is active or as needed to provide you services. We may retain certain information as required by law or for legitimate business purposes.',
    'You may request deletion of your account and associated data at any time. We will delete your data within 30 days, except where retention is required by law.',
    'Audit logs are retained for 7 years to comply with security and compliance requirements.'
  ]},
  { id: 'security-section', title: 'Security', content: [
    'We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.',
    'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We conduct regular security assessments and penetration testing.',
    'We maintain a security incident response plan and will notify affected users within 72 hours of discovering a breach that impacts their data.'
  ]},
  { id: 'your-rights', title: 'Your Rights', content: [
    'You have the right to access, correct, or delete your personal information. You may also request a copy of your data in a portable format.',
    'You have the right to object to or restrict certain processing of your data, including marketing communications. You may opt out at any time.',
    'To exercise these rights, contact us at privacy@convene.ai. We will respond within 30 days.'
  ]},
  { id: 'cookies', title: 'Cookies', content: [
    'We use cookies and similar technologies to operate our service, analyze usage, and personalize your experience. These include essential cookies (required for the service to function) and analytics cookies (used to understand how you use our service).',
    'You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our service.'
  ]},
  { id: 'international', title: 'International Transfers', content: [
    'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, such as Standard Contractual Clauses, to protect your data.',
    'Enterprise customers may choose data residency in the US, EU, or APAC regions. Data never leaves the chosen region.'
  ]},
  { id: 'children', title: 'Children', content: [
    'Our service is not directed to children under 16. We do not knowingly collect personal information from children. If we learn that we have collected data from a child under 16, we will delete it promptly.',
    'If you believe we have collected information from a child, please contact us at privacy@convene.ai.'
  ]},
  { id: 'contact', title: 'Contact', content: [
    'If you have questions about this Privacy Policy or our data practices, please contact us at privacy@convene.ai.',
    'Our data protection officer can be reached at dpo@convene.ai. We will respond to all inquiries within 30 days.'
  ]},
];

const termsSections = [
  { id: 'acceptance', title: 'Acceptance', content: [
    'By accessing or using the Convene service, you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the service.',
    'These terms apply to all users, including users who are contributors, creators of content, or browsers of content.',
    'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.'
  ]},
  { id: 'the-service', title: 'The Service', content: [
    'Convene provides a program coordination platform that connects to your tools, builds a catalog of programs, and maintains shared state. The service is provided "as is" and is subject to availability.',
    'We may add, modify, or discontinue features at any time. We will provide reasonable notice for changes that materially affect the service.',
    'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
  ]},
  { id: 'accounts', title: 'Accounts', content: [
    'You must provide accurate and complete information when creating an account. You must be at least 16 years old to use the service.',
    'You are responsible for maintaining the security of your account. Notify us immediately of any unauthorized access.',
    'We reserve the right to suspend or terminate accounts that violate these terms or that are inactive for an extended period.'
  ]},
  { id: 'acceptable-use', title: 'Acceptable Use', content: [
    'You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service.',
    'You may not attempt to gain unauthorized access to any part of the service, other accounts, or computer systems connected to the service.',
    'You may not use the service to transmit any viruses, worms, or other harmful code, or to collect or store personal data about other users without their consent.'
  ]},
  { id: 'customer-data', title: 'Customer Data', content: [
    'You retain all rights to the data you provide to the service ("Customer Data"). We claim no ownership over your Customer Data.',
    'By using the service, you grant us a limited license to process your Customer Data solely for the purpose of providing the service to you.',
    'We will not access, disclose, or use your Customer Data except as necessary to provide the service, comply with legal obligations, or enforce these terms.'
  ]},
  { id: 'intellectual-property', title: 'Intellectual Property', content: [
    'The Convene service, including its design, features, and documentation, is owned by Convene, Inc. and protected by copyright, trademark, and other intellectual property laws.',
    'You may not copy, modify, distribute, or create derivative works based on the service without our express written consent.',
    'Feedback, suggestions, and ideas you provide are voluntary and may be used by Convene without restriction or compensation.'
  ]},
  { id: 'fees', title: 'Fees', content: [
    'Certain features of the service may require payment of fees. All fees are stated in US dollars and are non-refundable except as required by law.',
    'We may change our fees upon reasonable notice. Continued use of the service after a fee change constitutes acceptance of the new fees.',
    'You are responsible for all applicable taxes associated with your use of the service.'
  ]},
  { id: 'termination', title: 'Termination', content: [
    'You may terminate your account at any time by contacting us or using the account deletion feature.',
    'We may terminate or suspend your access to the service immediately, without prior notice, for any violation of these terms.',
    'Upon termination, your right to use the service will cease immediately. We will retain your data for 30 days before deletion, unless required by law to retain it longer.'
  ]},
  { id: 'disclaimers', title: 'Disclaimers', content: [
    'THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
    'WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. WE DO NOT WARRANT THE ACCURACY OR COMPLETENESS OF ANY OUTPUT GENERATED BY THE SERVICE.',
    'NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM CONVENE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.'
  ]},
  { id: 'limitation-of-liability', title: 'Limitation of Liability', content: [
    'TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONVENE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.',
    'IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU TO CONVENE IN THE TWELVE MONTHS PRECEDING THE CLAIM.',
    'SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATION OF LIABILITY. IN SUCH JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.'
  ]},
  { id: 'governing-law', title: 'Governing Law', content: [
    'These terms are governed by the laws of the State of New York, without regard to its conflict of law provisions.',
    'Any disputes arising from these terms or the service shall be resolved in the state or federal courts located in New York County, New York.',
    'You consent to the personal jurisdiction of such courts and waive any objection to venue therein.'
  ]},
  { id: 'contact-terms', title: 'Contact', content: [
    'If you have questions about these Terms of Use, please contact us at legal@convene.ai.',
    'Our registered address is: Convene, Inc., New York, NY 10001, United States.'
  ]},
];

function LegalPage({ title, eyebrow, heroTitle, heroParagraph, outlinedWord, sections }: {
  title: string; eyebrow: string; heroTitle: string; heroParagraph: string; outlinedWord: string;
  sections: { id: string; title: string; content: string[] }[];
}) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={heroTitle} paragraph={heroParagraph} outlinedWord={outlinedWord} />

      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
        
          <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-8">
            LAST UPDATED OCTOBER 19, 2026
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sticky TOC */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <div className="font-mono text-[10px] uppercase text-[var(--color-text-muted)] mb-3">Contents</div>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9 max-w-[720px]">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">{section.title}</h2>
                  {section.content.map((para, i) => (
                    <p key={i} className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      eyebrow="PRIVACY POLICY"
      heroTitle="Your data, your rules"
      heroParagraph="We are committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights."
      outlinedWord="PRIV"
      sections={privacySections}
    />
  );
}

export function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      eyebrow="TERMS OF USE"
      heroTitle="The rules of engagement"
      heroParagraph="These terms govern your use of the Convene service. By using Convene, you agree to these terms."
      outlinedWord="T&C"
      sections={termsSections}
    />
  );
}
