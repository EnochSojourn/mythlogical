"use client";

import { useState } from "react";
import { Send, Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// FormSubmit.co — no account needed. First submission triggers a verification
// email to this address. Click the link once, then all future submissions
// are delivered automatically. Change this to your actual receiving email.
const CONTACT_EMAIL = "hello@mythlogical.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-4 block">
              Start Here
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to See What AI
              <br />
              <span className="gradient-text">Can Do for Your Business?</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Book a free, no-obligation strategy call. In 30 minutes,
              we&apos;ll map the highest-impact AI opportunities in your
              operations and outline a clear path forward — no jargon, no
              pressure.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free 30-minute strategy call",
                "Clear roadmap tailored to your business",
                "No commitment — walk away with actionable insights",
                "Proven methodology backed by real-world deployments",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-accent-cyan mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
              <Mail size={20} className="text-accent-cyan shrink-0" />
              <div>
                <p className="text-xs text-muted mb-0.5">Email us directly</p>
                <a
                  href="mailto:hello@mythlogical.com"
                  className="text-sm font-medium text-foreground hover:text-accent-cyan transition-colors"
                >
                  hello@mythlogical.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="gradient-border glow p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted">
                    We&apos;ll be in touch within 24 hours to schedule your
                    discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — hidden from humans, catches bots */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  {/* Disable FormSubmit's default captcha page */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New lead from mythlogical.com"
                  />

                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium mb-2"
                    >
                      Company Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1001-5000">1,001-5,000 employees</option>
                      <option value="5000+">5,000+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="challenge"
                      className="block text-sm font-medium mb-2"
                    >
                      Biggest IT Challenge{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={3}
                      placeholder="Tell us about the IT pain points you'd like AI to solve..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent to-accent-cyan rounded-xl hover:opacity-90 transition-opacity group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Book My Strategy Call
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted">
                    No spam. No sales pressure. Just a straightforward
                    conversation about what AI can do for you.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
