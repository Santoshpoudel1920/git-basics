import { motion } from "framer-motion";

import type { BlockConfig } from "@/content/portfolio.schema";

type AboutBlock = Extract<BlockConfig, { type: "about" }>;

type AboutSectionProps = {
  block: AboutBlock;
};

export default function AboutSection({ block }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="section-padding bg-mesh-alt relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-coral/6 blur-2xl animate-float-reverse" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-display">
            {block.title}{" "}
            <span className="text-gradient">{block.titleHighlight}</span>
          </h2>

          {block.paragraphs.map((paragraph, index) => (
            <p
              key={`${block.id}-paragraph-${index}`}
              className={`${index === 0 ? "mt-5" : "mt-4"} text-muted-foreground leading-relaxed max-w-2xl mx-auto`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            {block.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card rounded-2xl p-4 cursor-default hover:glow-coral-sm transition-shadow duration-300"
              >
                <div className="text-2xl font-bold text-coral font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
