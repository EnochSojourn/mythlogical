"use client";

import { ArrowRight, Download, Shield, Radar, Network } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { motion } from "framer-motion";
import NetworkGraph from "./NetworkGraph";

const stats = [
  { value: "15 MB", label: "Single Binary", icon: Shield },
  { value: "Zero", label: "Dependencies", icon: Radar },
  { value: "< 60s", label: "First Scan", icon: Network },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-green/8 rounded-full blur-[128px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://github.com/EnochSojourn/mythnet/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-accent-green border border-accent-green/20 rounded-full bg-accent-green/5 mb-8 hover:bg-accent-green/10 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
              v2.5.0 — Open Source on GitHub
            </a>

            <h1 className="text-3xl leading-snug sm:text-5xl sm:leading-[1.1] lg:text-6xl font-bold tracking-tight mb-6">
              AI-Native{" "}
              <span className="gradient-text">Network Intelligence</span>
            </h1>

            <p className="text-lg text-muted max-w-xl mb-8 leading-relaxed">
              One binary. Every platform. Drop MythNet onto any machine — it
              discovers your entire network, scans for vulnerabilities, meshes
              with other instances, and stands guard with{" "}
              <span className="text-foreground font-medium">
                continuous AI analysis.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://github.com/EnochSojourn/mythnet/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-background bg-accent-green rounded-lg hover:bg-accent-green/90 transition-all pulse-cta"
              >
                <Download size={18} />
                Download v2.5.0
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://github.com/EnochSojourn/mythnet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-muted border border-border rounded-lg hover:text-foreground hover:border-foreground/20 transition-all"
              >
                <GithubIcon className="w-[18px] h-[18px]" />
                View on GitHub
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="text-center sm:text-left"
                >
                  <stat.icon className="w-5 h-5 text-accent-cyan mb-2 mx-auto sm:mx-0" />
                  <div className="text-lg font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <NetworkGraph />

            <div className="bg-[#0d1117] border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-green" />
                <span className="text-xs text-muted font-mono ml-2">Terminal</span>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed">
                <div>
                  <span className="text-accent-green">$</span>{" "}
                  <span className="text-muted">chmod +x mythnet && ./mythnet</span>
                </div>
                <div className="text-accent-cyan mt-1">
                  MythNet v2.5.0 starting on :8080
                </div>
                <div className="text-accent-cyan">
                  Discovered 47 devices on 192.168.1.0/24
                </div>
                <div className="text-accent-green mt-1">
                  Health score: 87/100 (B+)
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
