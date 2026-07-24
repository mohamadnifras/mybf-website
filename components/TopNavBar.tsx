export default function TopNavBar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a href="/" className="flex items-center gap-4">
          <img
            alt="MYBF Logo"
            className="h-18 w-auto"
            src="/mybf-logo.png"
          />
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#who-we-are"
          >
            Who We Are
          </a>
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#vision"
          >
            Vision
          </a>
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#offerings"
          >
            Offerings
          </a>
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#initiatives"
          >
            Initiatives
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3g6ZQQKllYGp_g5hO7slVmmMA-dpR4LlQ_tL_KOylQNadlA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center justify-center"
          >
            Join MYBF
          </a>
        </div>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
