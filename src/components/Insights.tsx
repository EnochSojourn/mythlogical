"use client";

import { Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    category: "Industry Report",
    date: "March 2026",
    title: "Gartner: 75% of Enterprises Will Shift from Piloting to Operationalizing AI by 2027",
    excerpt:
      "Companies that delay AI adoption aren't just missing efficiency gains — they're ceding competitive advantage to rivals who are already deploying. The window to be an early mover is closing fast.",
    icon: TrendingUp,
    accent: "text-green-400",
    accentBg: "bg-green-400/10",

  },
  {
    category: "Threat Advisory",
    date: "February 2026",
    title: "AI-Powered Cyberattacks Surge 300% — Legacy Security Tools Can't Keep Up",
    excerpt:
      "Attackers are using generative AI to craft sophisticated phishing campaigns and polymorphic malware at unprecedented scale. Organizations using traditional rule-based detection are reporting breach rates 4x higher than those with AI-augmented security.",
    icon: AlertTriangle,
    accent: "text-red-400",
    accentBg: "bg-red-400/10",

  },
  {
    category: "Cost Analysis",
    date: "March 2026",
    title: "The Hidden Cost of Manual IT Operations: $4.3M per Year for Mid-Market Companies",
    excerpt:
      "A new study reveals that mid-size enterprises (500-5,000 employees) waste an average of $4.3 million annually on manual processes that AI can automate today — from ticket routing to capacity planning to compliance reporting.",
    icon: Clock,
    accent: "text-amber-400",
    accentBg: "bg-amber-400/10",

  },
];

const urgencyStats = [
  { value: "67%", label: "of IT leaders say AI adoption is their #1 priority in 2026" },
  { value: "$15.7T", label: "projected global AI economic impact by 2030" },
  { value: "3x", label: "faster incident resolution with AI-powered IT ops" },
];

export default function Insights() {
  return (
    <section id="insights" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-4 block">
            Insights & Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The AI Revolution{" "}
            <span className="gradient-text">Won&apos;t Wait for You</span>
          </h2>
          <p className="text-muted text-lg">
            Every week you delay costs your business real money. Here&apos;s
            what&apos;s happening in the market right now.
          </p>
        </div>

        {/* Urgency Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto"
        >
          {urgencyStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-surface border border-border"
            >
              <span className="text-2xl font-bold gradient-text block mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border p-6 lg:p-8 group hover:glow transition-shadow duration-500 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-8 h-8 rounded-lg ${article.accentBg} flex items-center justify-center`}
                >
                  <article.icon size={16} className={article.accent} />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className={`font-semibold ${article.accent}`}>
                    {article.category}
                  </span>
                  <span>&middot;</span>
                  <span>{article.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 group-hover:text-accent-cyan transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed flex-1">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-4">
            Your competitors are already investing in AI. The question
            isn&apos;t <em>if</em> — it&apos;s <em>how fast</em>.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent-cyan rounded-full hover:opacity-90 transition-opacity"
          >
            Start Your AI Strategy Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
