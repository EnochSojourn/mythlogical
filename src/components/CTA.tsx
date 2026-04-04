"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/hello@mythlogical.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            _subject: "MythNet Early Access Request",
            _honey: "",
            _captcha: "false",
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="early-access" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get <span className="gradient-text">Early Access</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            MythNet is in active development. Request access and be among the
            first to deploy AI-native network intelligence on your
            infrastructure.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-4 bg-accent-green/10 border border-accent-green/20 rounded-xl"
            >
              <CheckCircle className="w-6 h-6 text-accent-green" />
              <span className="text-accent-green font-medium">
                You&apos;re on the list. We&apos;ll be in touch.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-4"
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-green/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-green/50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-green text-background font-semibold rounded-lg hover:bg-accent-green/90 transition-colors disabled:opacity-50 pulse-cta"
              >
                {status === "sending" ? "Sending..." : "Request Early Access"}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {status === "error" && (
                <div className="flex items-center justify-center gap-2 text-accent-red text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Try hello@mythlogical.com directly.
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
