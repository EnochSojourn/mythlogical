"use client";

import { motion } from "framer-motion";
import { Monitor, Laptop, Terminal, Cpu, Database, Wifi } from "lucide-react";

const platforms = [
  { icon: Terminal, label: "Linux", sub: "amd64 / arm64 / armv7" },
  { icon: Laptop, label: "macOS", sub: "Intel / Apple Silicon" },
  { icon: Monitor, label: "Windows", sub: "x86_64" },
  { icon: Cpu, label: "Raspberry Pi", sub: "ARMv7 / ARM64" },
];

const meshModes = [
  {
    icon: Database,
    title: "Full Nodes",
    description:
      "Bidirectional sync with complete database replication via mTLS. Every full node holds the entire network picture. If one goes down, nothing is lost.",
    accent: "border-accent-green/30",
  },
  {
    icon: Wifi,
    title: "Sensor Nodes",
    description:
      "Lightweight push-only instances that scan locally and forward data upstream. Minimal footprint, perfect for edge deployment on constrained hardware.",
    accent: "border-accent-cyan/30",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Runs <span className="gradient-text">Everywhere</span>. Meshes{" "}
            <span className="gradient-text">Everything</span>.
          </h2>
          <p className="text-muted text-lg">
            One statically-linked Go binary. Six platform targets. Zero external
            dependencies. The UI, database, scanner, and AI are all embedded.
          </p>
        </motion.div>

        {/* Platform grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {platforms.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border bg-surface/50 hover:border-accent/30 transition-colors"
            >
              <p.icon className="w-8 h-8 text-accent-cyan mb-1" />
              <span className="text-sm font-semibold">{p.label}</span>
              <span className="text-xs text-muted">{p.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Mesh modes */}
        <div className="grid md:grid-cols-2 gap-8">
          {meshModes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`border ${mode.accent} rounded-xl p-8 bg-surface/50`}
            >
              <mode.icon className="w-8 h-8 text-accent-green mb-4" />
              <h3 className="text-xl font-bold mb-3">{mode.title}</h3>
              <p className="text-muted leading-relaxed">{mode.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted font-mono">
            <span>Go 1.24</span>
            <span className="text-border">|</span>
            <span>SQLite WAL</span>
            <span className="text-border">|</span>
            <span>SvelteKit + D3.js</span>
            <span className="text-border">|</span>
            <span>HashiCorp Memberlist</span>
            <span className="text-border">|</span>
            <span>Claude AI</span>
            <span className="text-border">|</span>
            <span>51+ API Endpoints</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
