import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Terms() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-32">
        <Link
          href="/"
          className="text-sm text-accent-cyan hover:underline mb-8 block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-muted mb-12">
          Last updated: April 2, 2026
        </p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Overview
            </h2>
            <p>
              Mythlogical (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) provides AI consulting services. By accessing
              our website at mythlogical.com, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Services
            </h2>
            <p>
              Our website provides general information about our consulting
              services. Specific service terms, deliverables, and engagement
              details are defined in individual client agreements and are not
              governed by these website terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              No Guarantees
            </h2>
            <p>
              While we reference industry statistics and potential outcomes on
              this site, these are illustrative. Actual results vary by
              organization. Specific projections are provided only during
              formal assessments and are detailed in client agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this site — including text, design, graphics, and
              the Mythlogical name and logo — is our property or used with
              permission. You may not reproduce or distribute it without
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Limitation of Liability
            </h2>
            <p>
              This website is provided &ldquo;as is.&rdquo; We are not liable
              for any damages arising from your use of this site or reliance
              on information presented here. Our liability for consulting
              services is governed by individual client agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Changes
            </h2>
            <p>
              We may update these terms at any time. Continued use of the site
              after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Contact
            </h2>
            <p>
              Questions? Email{" "}
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
