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
          className="text-sm text-accent-green hover:underline mb-8 block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted mb-12">Last updated: April 4, 2026</p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Information We Collect
            </h2>
            <p>
              When you request early access or contact us, we collect your name
              and email address. We do not collect network data, device
              information, or any data processed by the MythNet software — that
              data stays entirely on your infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your contact information solely to communicate with you
              about early access, product updates, and support. We do not sell,
              rent, or share your information with third parties for marketing
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Data Processing by MythNet Software
            </h2>
            <p>
              MythNet runs locally on your network. All network scanning, device
              discovery, and AI analysis occurs on your infrastructure. Mesh
              networking between your nodes uses mTLS encryption with
              auto-generated ECDSA certificates. No network data is transmitted
              to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              AI Processing
            </h2>
            <p>
              When AI analysis features are enabled, MythNet sends network
              context to the Anthropic API for analysis. This is a direct
              connection between your MythNet instance and Anthropic — it does
              not route through Mythlogical servers. You control whether AI
              features are enabled and can provide your own API key.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Cookies &amp; Tracking
            </h2>
            <p>
              This website does not use cookies or third-party analytics
              trackers.
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
                className="text-accent-green hover:underline"
              >
                hello@mythlogical.com
              </a>
              .
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
                className="text-accent-green hover:underline"
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
