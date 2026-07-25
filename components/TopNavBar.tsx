"use client";

import { useState } from "react";

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
        <button 
          className="md:hidden text-on-surface p-2 -mr-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 border-b" : "max-h-0 border-b-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-4 gap-6 bg-background/95 backdrop-blur-xl">
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#who-we-are"
            onClick={closeMobileMenu}
          >
            Who We Are
          </a>
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#vision"
            onClick={closeMobileMenu}
          >
            Vision
          </a>
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#offerings"
            onClick={closeMobileMenu}
          >
            Offerings
          </a>
          <a
            className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
            href="#initiatives"
            onClick={closeMobileMenu}
          >
            Initiatives
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3g6ZQQKllYGp_g5hO7slVmmMA-dpR4LlQ_tL_KOylQNadlA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-transform inline-flex items-center justify-center mt-2"
            onClick={closeMobileMenu}
          >
            Join MYBF
          </a>
        </div>
      </div>
    </nav>
  );
}
