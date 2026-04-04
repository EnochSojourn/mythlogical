"use client";

import { motion } from "framer-motion";

const modules = [
  { label: "Go 1.24 Scanner Engine", color: "border-accent-cyan/30", dot: "bg-accent-cyan" },
  { label: "SvelteKit + D3.js Web UI", color: "border-accent-green/30", dot: "bg-accent-green" },
  { label: "SQLite WAL Database", color: "border-accent/30", dot: "bg-accent" },
  { label: "Claude AI Integration", color: "border-accent-violet/30", dot: "bg-accent-violet" },
  { label: "Memberlist Gossip Mesh", color: "border-accent-amber/30", dot: "bg-accent-amber" },
  { label: "Prometheus Metrics", color: "border-accent-cyan/30", dot: "bg-accent-cyan" },
  { label: "SNMP / Syslog / HTTP Pollers", color: "border-accent-green/30", dot: "bg-accent-green" },
  { label: "mTLS Certificate Manager", color: "border-accent/30", dot: "bg-accent" },
];

const stats = [
  { value: "51+", label: "API Endpoints" },
  { value: "18", label: "CVE Detection Rules" },
  { value: "300+", label: "Ports Scanned" },
  { value: "6", label: "Platform Targets" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            One Binary.{" "}
            <span className="gradient-text">Everything Inside.</span>
          </h2>
          <p className="text-muted text-lg">
            MythNet is a single statically-linked Go binary with the entire
            stack embedded. No runtime dependencies. No containers required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="gradient-border"
        >
          <div className="relative z-10 rounded-[0.9rem] bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent-green" />
              <span className="text-sm font-mono text-muted">
                mythnet — 15 MB statically linked
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className={`border ${mod.color} rounded-lg px-4 py-3 bg-background/50`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${mod.dot}`} />
                    <span className="text-xs font-mono text-muted">
                      {mod.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
