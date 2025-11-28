import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ideal Clarity",
  description:
    "Privacy Policy for Ideal Clarity Solutions - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground mb-2">Ideal Clarity Solutions</p>
        <p className="text-muted-foreground mb-12">Last Updated: November 25, 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg leading-relaxed">
            Welcome to Ideal Clarity Solutions ("Ideal Clarity," "we," "us," or "our"). We respect your privacy and are
            committed to protecting your personal information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website idealclarity.com and use our services.
          </p>

          <p className="text-lg leading-relaxed">
            By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not
            agree with the terms of this Privacy Policy, please do not access the website or use our services.
          </p>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>

            <h3 className="text-2xl font-semibold mb-3 mt-6">Personal Information You Provide</h3>
            <p className="leading-relaxed mb-3">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Book a discovery call or clarity session through our scheduling system (Calendly)</li>
              <li>Purchase our services or packages</li>
              <li>Contact us via email or through our website</li>
              <li>Subscribe to our newsletter or mailing list</li>
              <li>Provide testimonials or feedback</li>
            </ul>
            <p className="leading-relaxed mt-3">
              This information may include your name, email address, phone number, payment information, professional
              background, and any other information you choose to share during our sessions or communications.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6">Information Collected Automatically</h3>
            <p className="leading-relaxed mb-3">
              When you visit our website, we may automatically collect certain information about your device and usage,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>IP address and general location data</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Provide, operate, and maintain our services</li>
              <li>Schedule and conduct clarity sessions</li>
              <li>Process payments and send transaction confirmations</li>
              <li>Send follow-up materials, session recaps, and action items</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">3. Confidentiality of Session Content</h2>
            <p className="leading-relaxed">
              Everything discussed during our clarity sessions is confidential. We do not share, sell, or disclose the
              content of our conversations to any third party. The only exception is if you provide explicit written
              permission for us to share your testimonial or success story, in which case identifying details may be
              removed at your request.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">4. Third-Party Services</h2>
            <p className="leading-relaxed mb-3">
              We use trusted third-party services to operate our business. These may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Calendly (scheduling)</li>
              <li>Zoom (video sessions)</li>
              <li>Stripe or PayPal (payment processing)</li>
              <li>Voxer (async communication)</li>
              <li>Email service providers</li>
              <li>Website hosting and analytics providers</li>
            </ul>
            <p className="leading-relaxed mt-3">
              These third parties have their own privacy policies, and we encourage you to review them. We only share
              information with these providers as necessary to deliver our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and
              analyze website traffic. You can control cookie settings through your browser preferences. Please note
              that disabling cookies may affect certain features of our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement reasonable administrative, technical, and physical security measures to protect your personal
              information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, comply with legal
              obligations, resolve disputes, and enforce our agreements. If you request deletion of your data, we will
              honor that request within a reasonable timeframe, subject to any legal retention requirements.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">8. Your Rights</h2>
            <p className="leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt out of marketing communications</li>
              <li>The right to withdraw consent where applicable</li>
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise any of these rights, please contact us at idealclaritysolutions@gmail.com.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If you believe we have inadvertently collected information from a child, please
              contact us immediately so we can delete it.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed
              about how we are protecting your information.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
            <p className="leading-relaxed mb-3">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="font-semibold text-lg mb-2">Ideal Clarity Solutions</p>
              <p className="leading-relaxed">Email: idealclaritysolutions@gmail.com</p>
              <p className="leading-relaxed">Website: www.idealclarity.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
