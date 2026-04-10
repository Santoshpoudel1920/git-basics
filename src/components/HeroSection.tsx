import { motion } from "framer-motion";
import heroClipart from "@/assets/hero-clipart.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-coral/10 text-coral text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Senior Digital Marketing Officer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight font-display">
            Driving Growth
            <br />
            Through <span className="text-gradient">Digital Strategy</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg">
            At <strong className="text-foreground">Line Academy</strong>, I craft data-driven marketing campaigns that transform brands, boost engagement, and deliver measurable results.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-coral-gradient text-coral-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-coral/20"
            >
              Let's Connect
            </a>
            <a
              href="#services"
              className="bg-secondary text-secondary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-muted transition-colors border border-border"
            >
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={heroClipart}
            alt="Digital marketing professional with social media and analytics icons"
            width={1024}
            height={1024}
            className="w-full max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
