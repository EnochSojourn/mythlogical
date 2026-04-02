import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-sm font-bold tracking-tight">
              Myth<span className="gradient-text">logical</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="#services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#insights"
              className="hover:text-foreground transition-colors"
            >
              Insights
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Contact */}
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
          <p>&copy; {new Date().getFullYear()} Mythlogical. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
