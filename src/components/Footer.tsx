import { Shield, Mail } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platform", href: "#platform" },
  { label: "Early Access", href: "#early-access" },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent-green" />
            <span className="text-sm font-bold tracking-tight">
              Myth<span className="gradient-text">Net</span>
            </span>
            <span className="text-xs text-muted ml-2">by Mythlogical</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <Mail size={14} className="text-accent-cyan" />
            <a
              href="mailto:hello@mythlogical.com"
              className="hover:text-foreground transition-colors"
            >
              hello@mythlogical.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} Mythlogical. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
