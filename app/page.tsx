"use client";

import { useEffect } from "react";
import ShaderCanvas from "@/components/ShaderCanvas";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          entry.target.classList.add("fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);



  return (
    <>
      <TopNavBar />
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <ShaderCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl fade-in-up">
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface mb-6 leading-tight">
            Empowering the Next Generation of <span className="text-primary">Entrepreneurs</span> in Malappuram
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            MYBF is a thriving entrepreneurial community that empowers ambitious individuals to connect, collaborate, and build successful businesses. By bringing together entrepreneurs, founders, professionals, and innovators, we create an ecosystem where ideas are transformed into opportunities and businesses achieve sustainable growth.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:shadow-[0_0_20px_rgba(140,217,117,0.4)] transition-all">
              JOIN THE COMMUNITY
            </button>
            <button className="border border-white/20 text-on-surface px-10 py-4 rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:bg-white/5 transition-all">
              EXPLORE MYBF
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-primary">expand_more</span>
        </div>
      </header>

      {/* Who We Are */}
      <section className="py-24 md:py-40 relative" id="who-we-are">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll active fade-in-up" style={{ transform: "translateY(40px)" }}>
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="font-label-caps text-[10px] text-primary uppercase tracking-[0.2em]">Our Essence</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8">Who We Are</h2>
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              <strong>Creating a Stronger Entrepreneurial Ecosystem for Malappuram.</strong> Malappuram Youth Business Forum (MYBF) is a collaborative community that unites aspiring entrepreneurs, startup founders, business owners, professionals, mentors, and innovators across Malappuram.
            </p>
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              Our mission is to foster meaningful relationships, encourage knowledge sharing, and create opportunities that inspire entrepreneurial success. Supported by Mission Malappuram 2050, MYBF is committed to strengthening the district&apos;s entrepreneurial ecosystem by connecting people with ideas, mentors, industry experts, and business opportunities.
            </p>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Through networking, mentorship, business consultation, learning programs, and strategic collaborations, we help entrepreneurs overcome challenges, accelerate growth, and create lasting economic and social impact.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="text-primary font-display-xl text-headline-md mb-2">500+</div>
                <div className="text-on-surface-variant font-label-caps text-[11px] uppercase tracking-wider">Active Members</div>
              </div>
              <div>
                <div className="text-primary font-display-xl text-headline-md mb-2">120+</div>
                <div className="text-on-surface-variant font-label-caps text-[11px] uppercase tracking-wider">Business Verticals</div>
              </div>
            </div>
          </div>
          <div className="relative reveal-on-scroll active fade-in-up" style={{ transform: "translateY(40px)" }}>
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
              <div
                className="w-full h-full rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url('/who-we-are-bg.jpg')" }}
              ></div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary">groups</span>
                </div>
                <div>
                  <div className="font-bold">Founded in 2024</div>
                  <div className="text-sm text-on-surface-variant">Malappuram, KL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Visionaries */}
      <section className="py-24 bg-surface-container-lowest/50" id="visionaries">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">The Vision Behind MYBF</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">The driving force behind MYBF&apos;s mission to reshape the future.</p>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Founder */}
          <div className="group glass glass-glow p-8 rounded-3xl transition-all duration-500 reveal-on-scroll active fade-in-up">
            <div
              className="w-full aspect-[4/5] rounded-2xl mb-6 bg-cover bg-center bg-surface-container-high grayscale transition-all duration-500 group-hover:grayscale-0"
              style={{ backgroundImage: 'url("/founder.jpg")' }}
            ></div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Dr. Sahid Cholayil</h3>
            <div className="mb-4">
              <p className="text-primary font-label-caps text-label-caps uppercase mb-1">Co-Founder – MYBF</p>
              <p className="text-on-surface-variant text-xs mb-1">Founder & Chairman – Mission 3G & 3G IRPS (IIT Madras Research Park)</p>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-wider opacity-80">Humanitarian | Egalitarian | AI Scientist | Futurist | Educationist | Serial Entrepreneur</p>
            </div>
            <p className="text-on-surface-variant text-sm">A visionary leader dedicated to advancing innovation, research, education, and entrepreneurship while building future-ready communities through technology and sustainable development.</p>
          </div>
          {/* Co-Founder 1 */}
          <div className="group glass glass-glow p-8 rounded-3xl transition-all duration-500 reveal-on-scroll active fade-in-up">
            <div
              className="w-full aspect-[4/5] rounded-2xl mb-6 bg-cover bg-center bg-surface-container-high grayscale transition-all duration-500 group-hover:grayscale-0"
              style={{ backgroundImage: 'url("/co-founder-1.jpg")' }}
            ></div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Shibili Rahman K.P.</h3>
            <div className="mb-4">
              <p className="text-primary font-label-caps text-label-caps uppercase mb-1">Co-Founder – MYBF</p>
              <p className="text-on-surface-variant text-xs mb-1">Chairman – RAC Global</p>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-wider opacity-80">Entrepreneur | Startup Mentor | Investor</p>
            </div>
            <p className="text-on-surface-variant text-sm">An entrepreneur and startup mentor committed to nurturing founders, fostering innovation, and enabling scalable businesses through mentorship, strategic guidance, and investment.</p>
          </div>
          {/* Co-Founder 2 */}
          <div className="group glass glass-glow p-8 rounded-3xl transition-all duration-500 reveal-on-scroll active fade-in-up">
            <div
              className="w-full aspect-[4/5] rounded-2xl mb-6 bg-cover bg-center bg-surface-container-high grayscale transition-all duration-500 group-hover:grayscale-0"
              style={{ backgroundImage: 'url("/co-founder-2.jpg")' }}
            ></div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Muhammed Nabeel P.A.</h3>
            <div className="mb-4">
              <p className="text-primary font-label-caps text-label-caps uppercase mb-1">Co-Founder – MYBF</p>
              <p className="text-on-surface-variant text-xs mb-1">Founder – NB Group of Companies<br />CEO – 3G BrandVersity</p>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-wider opacity-80">Entrepreneur | Brand Strategist | Business Consultant</p>
            </div>
            <p className="text-on-surface-variant text-sm">An entrepreneur and brand strategist passionate about empowering businesses through branding, digital innovation, entrepreneurship, and community-driven business growth.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 md:py-40" id="vision">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Our Purpose</h2>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-gutter">
          <div className="glass p-12 rounded-3xl reveal-on-scroll relative overflow-hidden group active fade-in-up">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <span className="material-symbols-outlined text-primary text-5xl mb-8">visibility</span>
            <h2 className="font-headline-lg text-headline-md text-on-surface mb-2">Our Vision</h2>
            <h3 className="text-primary font-label-caps text-sm uppercase tracking-widest mb-6">A Connected & Progressive Business Community</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              To build Malappuram into a thriving entrepreneurial hub where young entrepreneurs collaborate, innovate, and create businesses that generate lasting economic and social value.
            </p>
          </div>
          <div className="glass p-12 rounded-3xl reveal-on-scroll relative overflow-hidden group active fade-in-up">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <span className="material-symbols-outlined text-primary text-5xl mb-8">rocket_launch</span>
            <h2 className="font-headline-lg text-headline-md text-on-surface mb-2">Our Mission</h2>
            <h3 className="text-primary font-label-caps text-sm uppercase tracking-widest mb-6">Connecting Entrepreneurs. Creating Opportunities.</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              To empower entrepreneurs through networking, mentorship, business education, collaboration, and access to opportunities that help them build, scale, and sustain successful businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-surface-container-lowest/30 relative" id="core-values">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Core Values</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">The Values That Drive Our Community</p>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Value 1 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Collaboration</h3>
            <p className="text-on-surface-variant text-sm">We grow stronger together.</p>
          </div>
          {/* Value 2 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Integrity</h3>
            <p className="text-on-surface-variant text-sm">Building trust through ethical entrepreneurship.</p>
          </div>
          {/* Value 3 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Innovation</h3>
            <p className="text-on-surface-variant text-sm">Encouraging new ideas and creative thinking.</p>
          </div>
          {/* Value 4 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">flag</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Leadership</h3>
            <p className="text-on-surface-variant text-sm">Inspiring entrepreneurs to lead with purpose.</p>
          </div>
          {/* Value 5 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">volunteer_activism</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Community Impact</h3>
            <p className="text-on-surface-variant text-sm">Creating businesses that benefit society.</p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-surface-container-lowest" id="offerings">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">What We Offer</h2>
            <p className="text-on-surface-variant">Supporting Every Stage of Your Entrepreneurial Journey</p>
          </div>
          <a className="text-primary font-label-caps text-label-caps uppercase flex items-center gap-2 group" href="#">
            View Membership Benefits
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Mentorship</h3>
            <p className="text-on-surface-variant text-sm">Receive practical guidance from experienced entrepreneurs, mentors, and business leaders.</p>
          </div>
          {/* Card 2 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Learning & Development</h3>
            <p className="text-on-surface-variant text-sm">Participate in workshops, masterclasses, and business-focused learning experiences.</p>
          </div>
          {/* Card 3 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Networking</h3>
            <p className="text-on-surface-variant text-sm">Expand your professional network through community meetups and industry events.</p>
          </div>
          {/* Card 4 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">partner_exchange</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Business Consultation</h3>
            <p className="text-on-surface-variant text-sm">Access expert advice on branding, marketing, finance, business strategy, and growth.</p>
          </div>
          {/* Card 5 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Collaboration & Partnerships</h3>
            <p className="text-on-surface-variant text-sm">Connect with entrepreneurs and organizations for partnerships, referrals, and joint ventures.</p>
          </div>
          {/* Card 6 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Business Growth Opportunities</h3>
            <p className="text-on-surface-variant text-sm">Discover opportunities for funding, market expansion, investor connections, and business development.</p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 md:py-40 relative overflow-hidden" id="initiatives">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-20 relative z-10 reveal-on-scroll active fade-in-up">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">MYBF Initiatives</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Creating Opportunities Beyond Networking</p>
        </div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {/* Item 1 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">campaign</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">MYBF Conclaves</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Large-scale entrepreneurship events featuring business leaders, innovators, and industry experts.</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">MYBF Club</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">An exclusive community designed for continuous networking, collaboration, and business growth.</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">explore</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">Business Tours</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Visits to successful companies, startups, and industries to gain practical business insights.</p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">volunteer_activism</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">Social Commitment</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Community initiatives that promote entrepreneurship, youth empowerment, and social development.</p>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">groups</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">MYBF Gatherings</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Regular networking meetups for entrepreneurs to exchange ideas and build meaningful relationships.</p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">mic</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">Panel Discussions</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Interactive sessions with experts discussing business trends, innovation, and entrepreneurship.</p>
              </div>
            </div>
          </div>

          {/* Item 7 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">co_present</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">Webinars</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Online learning sessions covering business strategy, leadership, technology, and entrepreneurship.</p>
              </div>
            </div>
          </div>

          {/* Item 8 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">handshake</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">Investor Meetups</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Connecting entrepreneurs with investors, mentors, and funding opportunities.</p>
              </div>
            </div>
          </div>

          {/* Item 9 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">emoji_events</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">MYBF Awards</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Recognizing entrepreneurs, startups, and business leaders making a significant impact in Malappuram.</p>
              </div>
            </div>
          </div>

          {/* Item 10 */}
          <div className="group relative p-8 rounded-3xl bg-surface-container-low/30 border border-white/5 hover:bg-surface-container-low/80 hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer reveal-on-scroll active fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-16 h-16 bg-background/50 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(140,217,117,0.15)] transition-all duration-500">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl">newspaper</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300">Blog & Articles</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Entrepreneurial insights, success stories, business strategies, and industry updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-24 relative overflow-hidden" id="who-can-join">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 reveal-on-scroll active fade-in-up">Who Can Join?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-16 text-lg reveal-on-scroll active fade-in-up">
            MYBF welcomes individuals who are passionate about entrepreneurship and business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Aspiring Entrepreneurs</span>
            </div>
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Startup Founders</span>
            </div>
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Business Owners</span>
            </div>
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Professionals</span>
            </div>
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Freelancers</span>
            </div>
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Students with Business Ideas</span>
            </div>
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Mentors & Industry Experts</span>
            </div>
            <div className="glass px-6 py-4 rounded-full flex items-center gap-3 reveal-on-scroll active fade-in-up hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg shadow-black/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface font-medium">Investors & Business Leaders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-24 bg-surface-container-low/30 relative" id="member-benefits">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 reveal-on-scroll active fade-in-up">Membership Benefits</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto reveal-on-scroll active fade-in-up">Unlock the resources, network, and recognition to propel your business forward.</p>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">hub</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Exclusive Business Network</h3>
          </div>
          {/* Benefit 2 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">groups</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Founder Meetups</h3>
          </div>
          {/* Benefit 3 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">share</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Business Referrals</h3>
          </div>
          {/* Benefit 4 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">psychology</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Mentorship Access</h3>
          </div>
          {/* Benefit 5 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">forum</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Business Consultation</h3>
          </div>
          {/* Benefit 6 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">school</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Learning Programs</h3>
          </div>
          {/* Benefit 7 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">handshake</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Investor Connections</h3>
          </div>
          {/* Benefit 8 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">group_work</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Collaboration Opportunities</h3>
          </div>
          {/* Benefit 9 */}
          <div className="glass p-6 rounded-2xl flex items-center gap-4 reveal-on-scroll active fade-in-up hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary">workspace_premium</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface">Member Recognition</h3>
          </div>
        </div>
      </section>

      {/* Why Join MYBF */}
      <section className="py-24 bg-surface-container-lowest relative" id="why-join">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-on-scroll active fade-in-up">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Why Join MYBF</h2>
            <h3 className="font-headline-sm text-primary mb-6">Where Entrepreneurs Connect, Learn & Grow</h3>
            <p className="text-on-surface-variant mb-12 text-lg">
              Joining MYBF means becoming part of a community that believes success is built through collaboration, knowledge, and meaningful relationships.
            </p>
            <div className="space-y-6">
              {[
                "Connect with ambitious entrepreneurs and business leaders.",
                "Learn from experienced mentors and industry experts.",
                "Access exclusive workshops, networking events, and business opportunities.",
                "Collaborate on innovative ideas and strategic partnerships.",
                "Grow your business while contributing to Malappuram's entrepreneurial ecosystem."
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <p className="text-on-surface-variant">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-on-scroll active fade-in-up hidden lg:block">
            <div className="glass p-2 rounded-[2.5rem]">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: "url('/abstract-render.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Members */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary/10 border border-primary/20 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 reveal-on-scroll active fade-in-up">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                <span className="font-label-caps text-xs text-primary uppercase tracking-widest">For Members</span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-4">Become Part of the Movement</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                MYBF is more than a network—it&apos;s a community of entrepreneurs committed to supporting one another, sharing opportunities, and building a stronger future for business in Malappuram.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-caps uppercase tracking-widest hover:shadow-[0_0_40px_rgba(140,217,117,0.5)] transition-all whitespace-nowrap">
                Apply for Membership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="glass bg-surface-container-low/50 border-white/5 p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden reveal-on-scroll active fade-in-up">
            <div className="absolute -top-1/2 -left-1/4 w-[100%] h-[150%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-display-xl text-headline-lg-mobile md:text-display-sm text-on-surface mb-8">Start Your Entrepreneurial Journey with MYBF</h2>
              <p className="font-body-lg text-on-surface-variant mb-12 max-w-3xl mx-auto leading-relaxed">
                Whether you&apos;re building your first business, growing an existing venture, exploring a new idea, or looking to connect with like-minded entrepreneurs, MYBF provides the community, knowledge, and opportunities to help you move forward. Together, let&apos;s shape the future of entrepreneurship in Malappuram.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-label-caps text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(140,217,117,0.5)] transition-all">
                  Join MYBF
                </button>
                <button className="bg-transparent border border-white/20 text-on-surface px-12 py-5 rounded-full font-label-caps text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                  Contact Us
                </button>
              </div>
              <div className="mt-20 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <div className="text-primary mb-3 font-bold uppercase tracking-widest text-[11px]">Email</div>
                  <div className="text-on-surface text-lg">mybfcommunity@gmail.com</div>
                </div>
                <div>
                  <div className="text-primary mb-3 font-bold uppercase tracking-widest text-[11px]">Instagram & Facebook</div>
                  <div className="text-on-surface text-lg">@mybf.community</div>
                </div>
                <div>
                  <div className="text-primary mb-3 font-bold uppercase tracking-widest text-[11px]">Phone</div>
                  <div className="text-on-surface text-lg">+91 85929 56370</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
