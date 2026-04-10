import { motion } from "framer-motion";
import contactClipart from "@/assets/contact-clipart.png";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-display">
            Let's <span className="text-coral">Talk</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ready to elevate your digital presence? Let's discuss how I can help grow your brand with strategic marketing.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral text-xl">
                ✉️
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium text-foreground">hello@lineacademy.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral text-xl">
                📍
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium text-foreground">Line Academy HQ</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center text-coral text-xl">
                🔗
              </div>
              <div>
                <div className="text-sm text-muted-foreground">LinkedIn</div>
                <div className="font-medium text-foreground">linkedin.com/in/yourprofile</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <img
            src={contactClipart}
            alt="Contact and communication illustration"
            loading="lazy"
            width={800}
            height={800}
            className="w-full max-w-xs"
          />
          <div className="bg-card rounded-2xl border border-border p-6 w-full">
            <h3 className="font-display font-bold text-foreground mb-4">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-coral"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-coral"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-muted text-foreground text-sm placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-coral resize-none"
              />
              <button
                type="submit"
                className="w-full bg-coral-gradient text-coral-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
