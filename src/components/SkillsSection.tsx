import { motion } from "framer-motion";
import skillsClipart from "@/assets/skills-clipart.png";

const skills = [
  { name: "SEO & SEM", level: 95 },
  { name: "Social Media Marketing", level: 90 },
  { name: "Content Strategy", level: 88 },
  { name: "Google Ads & PPC", level: 92 },
  { name: "Email Marketing", level: 85 },
  { name: "Analytics & Data", level: 90 },
  { name: "Brand Strategy", level: 87 },
  { name: "Marketing Automation", level: 82 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-display">
            My <span className="text-coral">Skills</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            A comprehensive toolkit built from years of hands-on digital marketing experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className="h-full bg-coral-gradient rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={skillsClipart}
              alt="Achievement and skills illustration"
              loading="lazy"
              width={800}
              height={800}
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
