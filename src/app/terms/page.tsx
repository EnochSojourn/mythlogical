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
          className="text-sm text-accent-green hover:underline mb-8 block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-muted mb-12">Last updated: April 4, 2026</p>

        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Overview
            </h2>
            <p>
              Mythlogical (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) develops the MythNet network monitoring and
              security platform. By accessing our website at mythlogical.com or
              using the MythNet software, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Authorized Use
            </h2>
            <p>
              You may only use MythNet to monitor networks you own or have
              explicit authorization to monitor. Unauthorized network scanning
              or monitoring is prohibited and may violate applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Early Access Program
            </h2>
            <p>
              The early access program provides pre-release software that may
              contain bugs or incomplete features. Early access software is
              provided as-is without warranty. We may modify, suspend, or
              discontinue early access at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Your Responsibilities
            </h2>
            <p>
              You are responsible for ensuring your use of MythNet complies with
              all applicable laws and regulations, including those governing
              network monitoring, data collection, and cybersecurity in your
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Limitation of Liability
            </h2>
            <p>
              MythNet is provided as a monitoring and analysis tool. We are not
              liable for security breaches, data loss, or network disruptions
              that occur on your infrastructure. The software augments — but
              does not replace — professional security practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this site — including text, design, graphics, and
              the Mythlogical and MythNet names — is our property or used with
              permission. You may not reproduce or distribute it without written
              consent.
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
