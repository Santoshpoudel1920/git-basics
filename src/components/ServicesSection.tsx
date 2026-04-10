import { motion } from "framer-motion";
import servicesClipart from "@/assets/services-clipart.png";

const services = [
  {
    icon: "📊",
    title: "SEO Optimization",
    desc: "Boost organic visibility with keyword research, on-page optimization, and technical SEO audits.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Strategic content planning, community engagement, and growth across all major platforms.",
  },
  {
    icon: "🎯",
    title: "PPC Advertising",
    desc: "High-ROI Google Ads and social media ad campaigns with precise audience targeting.",
  },
  {
    icon: "✉️",
    title: "Email Marketing",
    desc: "Automated email sequences, newsletter campaigns, and lead nurturing workflows.",
  },
  {
    icon: "📝",
    title: "Content Strategy",
    desc: "Compelling content that drives traffic, educates audiences, and converts leads.",
  },
  {
    icon: "📈",
    title: "Analytics & Reporting",
    desc: "Data-driven insights with comprehensive dashboards and actionable recommendations.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-navy-gradient text-navy-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
            What I <span className="text-coral">Do</span>
          </h2>
          <p className="mt-4 text-navy-foreground/70 max-w-lg mx-auto">
            Full-spectrum digital marketing services that drive real business results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-navy-foreground/5 backdrop-blur-sm border border-navy-foreground/10 rounded-2xl p-6 hover:bg-navy-foreground/10 transition-colors group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold font-display mb-2">{service.title}</h3>
              <p className="text-sm text-navy-foreground/70 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <img
            src={servicesClipart}
            alt="Digital marketing tools"
            loading="lazy"
            width={800}
            height={800}
            className="w-full max-w-xs opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
