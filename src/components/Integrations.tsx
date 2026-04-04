"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  MessageSquare,
  Mail,
  FileText,
  Link,
} from "lucide-react";

const integrations = [
  {
    icon: Activity,
    name: "Prometheus",
    description:
      "Native /metrics endpoint with 50+ gauges and counters. Scrape-ready out of the box.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: BarChart3,
    name: "Grafana",
    description:
      "Pre-built dashboard template included in the repo. Import the JSON and go.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: MessageSquare,
    name: "Slack & Discord",
    description:
      "Webhook alerts with rich formatting. Route by severity to different channels.",
    color: "text-accent-violet",
    bg: "bg-accent-violet/10",
  },
  {
    icon: Mail,
    name: "Email (SMTP)",
    description:
      "HTML-formatted alerts and daily digest emails. Configurable recipients and thresholds.",
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
  },
  {
    icon: FileText,
    name: "Syslog",
    description:
      "RFC 3164 forwarding to your SIEM or log aggregator. Standard severity levels.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Link,
    name: "Webhooks",
    description:
      "Generic JSON webhooks with HMAC-SHA256 signatures. Integrate with anything.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-4 block">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Plugs Into{" "}
            <span className="gradient-text">Your Stack</span>
          </h2>
          <p className="text-muted text-lg">
            Export metrics, send alerts, and feed data to the tools you already
            use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="p-6 bg-surface/50 border border-border rounded-xl hover:border-accent/30 transition-colors"
            >
              <div
                className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-4`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-base font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
