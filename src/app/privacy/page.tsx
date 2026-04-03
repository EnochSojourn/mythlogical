import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-32">
        <Link
          href="/"
          className="text-sm text-accent-cyan hover:underline mb-8 block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">
          Last updated: April 2, 2026
        </p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Information We Collect
            </h2>
            <p>
              When you submit our contact form, we collect your name, work
              email, company name, company size, and any additional details you
              choose to provide about your IT challenges. We use this
              information solely to respond to your inquiry and assess
              potential AI opportunities for your organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiry and schedule discovery calls</li>
              <li>To prepare AI assessments relevant to your business</li>
              <li>To communicate about our services if you engage with us</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Data Storage & Security
            </h2>
            <p>
              Form submissions are processed through FormSubmit.co and
              delivered to us via email. We take reasonable measures to protect
              your information but cannot guarantee absolute security over the
              internet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Cookies & Analytics
            </h2>
            <p>
              This website does not use cookies or third-party analytics
              trackers at this time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at{" "}
              <a
                href="mailto:hello@mythlogical.com"
                className="text-accent-cyan hover:underline"
              >
                hello@mythlogical.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a
                href="mailto:hello@mythlogical.com"
                className="text-accent-cyan hover:underline"
              >
                hello@mythlogical.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
