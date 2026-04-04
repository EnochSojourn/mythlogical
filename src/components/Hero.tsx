"use client";

import { ArrowRight, Radar, Network, Shield } from "lucide-react";
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-accent-green border border-accent-green/20 rounded-full bg-accent-green/5 mb-8">
              <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
              v3.3 — Now with Anomaly Detection &amp; Playbooks
            </span>

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
                href="#early-access"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-background bg-accent-green rounded-lg hover:bg-accent-green/90 transition-all pulse-cta"
              >
                Request Early Access
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-muted border border-border rounded-lg hover:text-foreground hover:border-foreground/20 transition-all"
              >
                See Capabilities
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
            className="hidden lg:block"
          >
            <NetworkGraph />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
