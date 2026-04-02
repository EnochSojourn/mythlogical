"use client";

import { Search, BarChart3, Rocket, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Deep-Dive Assessment",
    description:
      "We audit your IT operations, infrastructure costs, team workflows, and technology stack. Our AI diagnostic tools map every dollar you spend and every hour your team invests — identifying exactly where AI can create savings.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Savings Blueprint",
    description:
      "You receive a detailed report showing projected savings, implementation timelines, and expected ROI. No jargon, no guesswork — just hard numbers you can take to your board. This is where you decide if you want to move forward.",
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
    icon: BadgeDollarSign,
    title: "You Save. We Share.",
    description:
      "Once savings are verified and documented, you pay a small percentage of what you actually saved in year one. Your savings are real, audited, and yours to keep. We only win when you win — it's that simple.",
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
            Zero Risk.{" "}
            <span className="gradient-text">Maximum Return.</span>
          </h2>
          <p className="text-muted text-lg">
            Traditional consultants charge you whether they deliver results or
            not. We tie our compensation directly to your savings. If we
            don&apos;t perform, you don&apos;t pay.
          </p>
        </div>

        {/* Pricing Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border glow p-8 lg:p-12 text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent-cyan mb-4">
            How Our Pricing Works
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Small upfront assessment fee
            <br />
            <span className="gradient-text text-3xl sm:text-4xl lg:text-5xl">
              + a share of your verified savings
            </span>
          </p>
          <p className="text-muted max-w-lg mx-auto">
            The assessment fee covers our diagnostic costs. Everything else is
            performance-based. You keep the majority of every dollar saved —
            guaranteed in writing.
          </p>
        </motion.div>

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
