export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
          <span className="text-coral">Line</span>Academy
        </div>
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Senior Digital Marketing Officer — Line Academy. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["LinkedIn", "Twitter", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-coral transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
