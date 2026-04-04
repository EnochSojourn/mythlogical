"use client";

import { motion } from "framer-motion";
import {
  Radar,
  Brain,
  Network,
  Shield,
  Settings,
  FileText,
  Radio,
  Map,
} from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Autonomous Discovery",
    description:
      "TCP ping sweeps, ARP lookups, mDNS, SSDP, and NetBIOS probing across 300+ ports. Auto-detects subnets, fingerprints OS, classifies device types, and resolves vendors from a built-in OUI database.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: Brain,
    title: "Active AI Analysis",
    description:
      "Claude-powered analysis runs continuously after every scan cycle. Chat with the AI directly from the UI to ask about threats, device health, or network state. Generates scheduled reports automatically.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: Network,
    title: "Mesh Intelligence",
    description:
      "Instances discover each other via gossip protocol and replicate through mTLS-encrypted channels. Full nodes hold complete databases. Sensor nodes push data upstream. The mesh self-heals.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Built-In Security Scanning",
    description:
      "18 CVE detection rules, HTTP header audits, TLS cipher analysis, certificate expiration monitoring, and dangerous port flagging — all running out of the box with zero configuration.",
    color: "text-accent-violet",
    bg: "bg-accent-violet/10",
  },
  {
    icon: Settings,
    title: "Remote Network Tools",
    description:
      "Ping, DNS lookup, port check, traceroute, WHOIS, SNMP walk, Wake-on-LAN, and subnet calculator — all accessible from the web UI or the mythctl CLI client.",
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
  },
  {
    icon: FileText,
    title: "Standardized Ingestion",
    description:
      "All device data is normalized into Markdown format before storage. SNMP traps, syslog messages, and HTTP API responses are all translated into a clean, searchable, consistent format.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: Radio,
    title: "Deep Telemetry",
    description:
      "SNMP trap and poll listener, RFC 3164 syslog receiver, and HTTP API poller with automatic status change deduplication. Proactively listens for every signal your devices emit.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: Map,
    title: "Live Network Map",
    description:
      "D3.js force-directed topology with real-time WebSocket updates. Click any node to drill into ports, banners, uptime, latency history, CVEs, and device notes. Export as SVG.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-4 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">See and Protect</span> Your Network
          </h2>
          <p className="text-muted text-lg">
            Discovery, security, telemetry, AI analysis, and mesh networking —
            all in a single statically-linked binary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="gradient-border group"
            >
              <div className="relative z-10 p-6 rounded-[0.9rem] bg-surface h-full">
                <div
                  className={`w-10 h-10 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
