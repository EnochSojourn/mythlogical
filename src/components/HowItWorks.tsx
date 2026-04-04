"use client";

import { Download, Radar, Brain, Shield } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Drop In",
    description:
      "Download a single 15MB binary. Run it on Linux, macOS, Windows, or a Raspberry Pi. It auto-detects your subnets, generates a password, and starts the web UI on port 8080.",
    color: "text-accent",
    border: "border-accent/30",
  },
  {
    step: "02",
    icon: Radar,
    title: "Discover",
    description:
      "MythNet immediately sweeps your network — TCP pings, ARP lookups, mDNS, SSDP, NetBIOS. Every device is identified, fingerprinted, and classified in under 60 seconds.",
    color: "text-accent-cyan",
    border: "border-accent-cyan/30",
  },
  {
    step: "03",
    icon: Brain,
    title: "Analyze",
    description:
      "AI ingests the scan results, runs 18 CVE checks, audits TLS ciphers and HTTP headers, and generates a network health score. The analysis runs continuously, not just once.",
    color: "text-accent-green",
    border: "border-accent-green/30",
  },
  {
    step: "04",
    icon: Shield,
    title: "Protect",
    description:
      "Mesh with other MythNet nodes for distributed coverage. Get webhook, email, and syslog alerts. Anomaly detection catches deviations. Playbooks automate your response.",
    color: "text-accent-violet",
    border: "border-accent-violet/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-green mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From Zero to Full Visibility in{" "}
            <span className="gradient-text">Minutes</span>
          </h2>
          <p className="text-muted text-lg">
            No agents to install on endpoints. No dependency chains. No complex
            configuration. Just a single binary and a network connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className={`relative z-10 border ${step.border} rounded-xl p-6 bg-surface/50`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-muted">{step.step}</span>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
}
