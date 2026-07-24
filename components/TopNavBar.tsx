export default function TopNavBar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <img
            alt="MYBF Logo"
            className="h-10 w-auto"
            src="/mybf-logo.png"
          />
        </div>
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
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-transform">
            Join MYBF
          </button>
        </div>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
