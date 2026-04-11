"use client";

import { motion } from "framer-motion";
import { Terminal, Download } from "lucide-react";

const commands = [
  { cmd: "devices", desc: "List and search all discovered devices" },
  { cmd: "scan", desc: "Trigger a network scan" },
  { cmd: "events", desc: "Stream events in real time (-f)" },
  { cmd: "health", desc: "Network health score and grade" },
  { cmd: "sla", desc: "SLA uptime report (24h/7d/30d)" },
  { cmd: "digest", desc: "Daily summary with highlights" },
  { cmd: "tools", desc: "Ping, DNS, port check, WHOIS, subnet calc" },
  { cmd: "config", desc: "Export or validate configuration" },
  { cmd: "test", desc: "Check server connectivity" },
  { cmd: "update", desc: "Self-update from GitHub releases" },
];

const terminalLines = [
  { prompt: true, text: "mythctl devices --format table" },
  { prompt: false, text: "ID   HOSTNAME       IP             STATUS   PORTS" },
  {
    prompt: false,
    text: "1    gateway        192.168.1.1    up       22,80,443",
  },
  {
    prompt: false,
    text: "2    nas-primary    192.168.1.10   up       22,80,5001,9090",
  },
  { prompt: false, text: "3    cam-front      192.168.1.30   up       80,554" },
  { prompt: false, text: "47 devices found" },
  { prompt: false, text: "" },
  { prompt: true, text: 'mythctl ai "Any expiring TLS certs?"' },
  { prompt: false, text: "2 devices have certs expiring within 30 days:" },
  { prompt: false, text: "  nas-primary (192.168.1.10) — expires Apr 28" },
  { prompt: false, text: "  homelab-k8s (192.168.1.60) — expires May 3" },
];

export default function MythctlCLI() {
  return (
    <section id="mythctl" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-amber/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-amber mb-4 block">
            CLI Client
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Meet <span className="gradient-text">mythctl</span>
          </h2>
          <p className="text-muted text-lg">
            A standalone 6MB CLI client. Full remote access to any MythNet
            instance from any terminal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#0d1117] border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-green" />
                <span className="text-xs text-muted font-mono ml-2">
                  mythctl
                </span>
              </div>
              <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                {terminalLines.map((line, i) => (
                  <div key={i} className={line.text === "" ? "h-3" : ""}>
                    {line.prompt ? (
                      <>
                        <span className="text-accent-green">$</span>{" "}
                        <span className="text-muted">{line.text}</span>
                      </>
                    ) : (
                      <span className="text-accent-cyan/70">{line.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
              {commands.map((c, i) => (
                <motion.div
                  key={c.cmd}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.03 }}
                  className="px-4 py-3 bg-surface/50 border border-border rounded-lg"
                >
                  <div className="font-mono text-sm text-accent-green font-semibold">
                    {c.cmd}
                  </div>
                  <div className="text-xs text-muted mt-0.5">{c.desc}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://github.com/EnochSojourn/mythnet/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 text-sm font-semibold text-accent-green border border-accent-green/30 rounded-lg hover:bg-accent-green/5 transition-colors"
            >
              <Download size={16} />
              Download mythctl
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
