"use client";

import { Compass, Cpu, Handshake, Target } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Compass,
    title: "Strategy First",
    description:
      "We don't lead with tools — we lead with understanding. Every engagement starts with deep discovery of your operations, team, and goals before a single line of code is written.",
  },
  {
    icon: Cpu,
    title: "Built by Engineers",
    description:
      "Our team has shipped production AI systems across infrastructure, security, and operations. We build what we recommend — no slideware, no hand-offs to junior contractors.",
  },
  {
    icon: Target,
    title: "Focused on Impact",
    description:
      "We measure everything. Every solution we deploy comes with clear metrics and a dashboard so you can see exactly what changed — not a 50-page report that collects dust.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description:
      "We integrate with your team, not around them. Knowledge transfer is built into every engagement so your organization gets smarter, not more dependent.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-4 block">
            Why Mythlogical
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Not Another{" "}
            <span className="gradient-text">AI Hype Machine</span>
          </h2>
          <p className="text-muted text-lg">
            The market is full of AI consultancies that overpromise and
            underdeliver. Here&apos;s how we&apos;re different.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                <reason.icon size={20} className="text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {reason.description}
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
