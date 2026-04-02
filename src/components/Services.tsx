"use client";

import { Bot, Network, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Bot,
    title: "Intelligent Process Automation",
    description:
      "We identify and automate repetitive IT workflows — ticket routing, incident triage, patch management, and provisioning — using AI agents that learn from your team's patterns. Reduce manual toil by up to 60% while your engineers focus on architecture, not busywork.",
    tags: ["AIOps", "RPA", "Workflow Orchestration"],
  },
  {
    icon: Network,
    title: "Predictive Infrastructure Optimization",
    description:
      "Our AI models analyze your cloud spend, server utilization, and network traffic in real time. We predict capacity needs before they become emergencies, right-size your infrastructure, and eliminate the 30-40% of cloud spend most enterprises waste on idle resources.",
    tags: ["FinOps", "Capacity Planning", "Cloud Intelligence"],
  },
  {
    icon: ShieldCheck,
    title: "AI-Powered Threat Detection & Response",
    description:
      "Traditional SIEM rules miss novel attacks. Our machine learning models establish behavioral baselines across your endpoints, network, and user activity — detecting anomalies and zero-day threats in real time, with 95% fewer false positives than rule-based systems.",
    tags: ["Cybersecurity", "UEBA", "Anomaly Detection"],
  },
  {
    icon: Workflow,
    title: "Knowledge & Decision Intelligence",
    description:
      "Turn your organization's scattered documentation, Slack threads, and tribal knowledge into a searchable AI knowledge base. Our custom LLM integrations give every employee an expert-level assistant, cutting onboarding time in half and reducing knowledge silos.",
    tags: ["RAG", "Enterprise LLM", "Knowledge Management"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            AI Solutions That{" "}
            <span className="gradient-text">Deliver Measurable ROI</span>
          </h2>
          <p className="text-muted text-lg">
            We don&apos;t sell vague &ldquo;AI transformation.&rdquo; We deploy
            targeted solutions with quantifiable cost savings — and we stake our
            fee on the results.
          </p>
        </div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="gradient-border p-8 lg:p-10 group hover:glow transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent-cyan/10 flex items-center justify-center mb-6 group-hover:from-accent/20 group-hover:to-accent-cyan/20 transition-colors">
                <service.icon size={24} className="text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent/5 text-accent border border-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
