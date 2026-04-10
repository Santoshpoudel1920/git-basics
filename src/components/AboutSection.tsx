import { motion } from "framer-motion";
import aboutClipart from "@/assets/about-clipart.png";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Campaigns Launched" },
  { value: "200%", label: "Avg. ROI Increase" },
  { value: "15+", label: "Brands Served" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={aboutClipart}
            alt="Creative digital marketing workspace"
            loading="lazy"
            width={800}
            height={800}
            className="w-full max-w-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-display">
            About <span className="text-coral">Me</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I'm a passionate digital marketing professional at Line Academy with expertise in crafting comprehensive marketing strategies. From SEO and content marketing to paid advertising and social media management, I bring a holistic approach to digital growth.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My focus is on delivering data-driven results that make a real impact — growing audiences, increasing conversions, and building brand authority across all digital channels.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-4 border border-border"
              >
                <div className="text-2xl font-bold text-coral font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
