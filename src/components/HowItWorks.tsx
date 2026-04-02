"use client";

import { Search, BarChart3, Rocket, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Deep-Dive Assessment",
    description:
      "We audit your IT operations, team workflows, and technology stack. Our AI diagnostic tools map how your organization actually works — identifying exactly where AI can have the greatest impact.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Strategic Roadmap",
    description:
      "You receive a detailed report showing recommended AI initiatives, implementation timelines, and expected outcomes. No jargon, no guesswork — just a clear plan you can take to your team. This is where you decide if you want to move forward.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Implementation & Integration",
    description:
      "Our engineers deploy AI solutions directly into your existing stack. No rip-and-replace. No 18-month timelines. We integrate with your current tools — AWS, Azure, ServiceNow, Jira, Datadog, Splunk — and deliver results within 90 days.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "Measure & Optimize",
    description:
      "We track every metric that matters — time recovered, error reduction, throughput gains, team velocity. You get a clear dashboard of results, and we continue optimizing to compound improvements over time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-surface">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-4 block">
            Our Model
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From Assessment to{" "}
            <span className="gradient-text">Measurable Impact.</span>
          </h2>
          <p className="text-muted text-lg">
            A structured process that moves fast, integrates with your existing
            stack, and delivers results you can measure — not promises you
            can&apos;t.
          </p>
        </div>

        {/* Steps */}
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
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="relative z-10">
                <span className="text-5xl font-black text-accent/10 mb-4 block">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon size={20} className="text-accent-cyan" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
}
