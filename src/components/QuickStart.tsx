"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Globe, Key, Radar } from "lucide-react";

const tabs = [
  {
    label: "Linux",
    commands: `curl -fsSL https://github.com/EnochSojourn/mythnet/releases/latest/download/mythnet-linux-amd64 -o mythnet
chmod +x mythnet
sudo ./mythnet`,
  },
  {
    label: "macOS",
    commands: `curl -fsSL https://github.com/EnochSojourn/mythnet/releases/latest/download/mythnet-darwin-arm64 -o mythnet
chmod +x mythnet
sudo ./mythnet`,
  },
  {
    label: "Windows",
    commands: `Invoke-WebRequest -Uri https://github.com/EnochSojourn/mythnet/releases/latest/download/mythnet-windows-amd64.exe -OutFile mythnet.exe
.\\mythnet.exe`,
  },
  {
    label: "Docker",
    commands: `docker run -d --name mythnet \\
  --net=host \\
  -v mythnet-data:/data \\
  ghcr.io/enochsojourn/mythnet:latest`,
  },
];

const hints = [
  { icon: Globe, text: "Open http://localhost:8080" },
  { icon: Key, text: "Password auto-generated on first run" },
  { icon: Radar, text: "Subnets detected automatically" },
];

export default function QuickStart() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tabs[activeTab].commands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="quickstart" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-green mb-4 block">
            Quick Start
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Running in <span className="gradient-text">60 Seconds</span>
          </h2>
          <p className="text-muted text-lg">
            Download a single binary. Run it. Open your browser. That&apos;s it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-[#0d1117] border border-border rounded-xl overflow-hidden">
            <div className="flex items-center border-b border-border">
              <div className="flex items-center gap-2 px-4 py-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-green" />
              </div>
              <div className="flex gap-0 ml-2">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => { setActiveTab(i); setCopied(false); }}
                    className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                      activeTab === i
                        ? "text-foreground border-b-2 border-accent-green"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="ml-auto mr-3 p-1.5 text-muted hover:text-foreground transition-colors"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-accent-green" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              {tabs[activeTab].commands.split("\n").map((line, i) => (
                <div key={i}>
                  {line.startsWith("  ") || line.startsWith("\\") ? (
                    <span className="text-muted">{line}</span>
                  ) : (
                    <>
                      <span className="text-accent-green">$</span>{" "}
                      <span className="text-muted">{line}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {hints.map((hint, i) => (
            <motion.div
              key={hint.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 px-4 py-3 bg-surface/50 border border-border rounded-lg"
            >
              <hint.icon className="w-4 h-4 text-accent-cyan shrink-0" />
              <span className="text-sm text-muted">{hint.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href="https://github.com/EnochSojourn/mythnet/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-green hover:underline"
          >
            View all releases &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
