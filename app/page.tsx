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
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-gutter">
          <div className="glass p-12 rounded-3xl reveal-on-scroll relative overflow-hidden group active fade-in-up">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <span className="material-symbols-outlined text-primary text-5xl mb-8">visibility</span>
            <h2 className="font-headline-lg text-headline-md text-on-surface mb-6">Our Vision</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              To establish Malappuram as a globally recognized hub for entrepreneurship, where young business leaders are empowered with the resources, connections, and mindset to create sustainable, world-class enterprises.
            </p>
          </div>
          <div className="glass p-12 rounded-3xl reveal-on-scroll relative overflow-hidden group active fade-in-up">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <span className="material-symbols-outlined text-primary text-5xl mb-8">rocket_launch</span>
            <h2 className="font-headline-lg text-headline-md text-on-surface mb-6">Our Mission</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              To support, inspire, and equip Malappuram&apos;s youth entrepreneurs through mentorship, strategic networking, and continuous learning, fostering a collaborative culture that drives individual and collective prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-surface-container-lowest" id="offerings">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">What We Offer</h2>
            <p className="text-on-surface-variant">Comprehensive tools and platforms designed specifically for the modern entrepreneur.</p>
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
            <p className="text-on-surface-variant text-sm">Direct access to industry veterans and successful founders who provide actionable guidance for your business journey.</p>
          </div>
          {/* Card 2 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">L & D</h3>
            <p className="text-on-surface-variant text-sm">Workshops, seminars, and masterclasses designed to sharpen your technical and leadership skills in the 21st-century market.</p>
          </div>
          {/* Card 3 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Networking</h3>
            <p className="text-on-surface-variant text-sm">Curated events that connect you with potential partners, investors, and peers who share your drive and ambition.</p>
          </div>
          {/* Card 4 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">partner_exchange</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Consultation</h3>
            <p className="text-on-surface-variant text-sm">Strategic business advice from experts to help you navigate regulatory challenges and market complexities.</p>
          </div>
          {/* Card 5 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Collaboration</h3>
            <p className="text-on-surface-variant text-sm">A vibrant ecosystem where ideas merge to form joint ventures and innovative co-branded initiatives.</p>
          </div>
          {/* Card 6 */}
          <div className="glass glass-glow p-8 rounded-3xl reveal-on-scroll active fade-in-up">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Business Growth</h3>
            <p className="text-on-surface-variant text-sm">Support in scaling operations, accessing new markets, and identifying growth opportunities locally and globally.</p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24" id="initiatives">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">MYBF Initiatives</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Dynamic platforms and events that bring our community to life.</p>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group rounded-3xl overflow-hidden reveal-on-scroll aspect-video active fade-in-up">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/conclaves.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="font-headline-md text-on-surface mb-2">Grand Conclaves</h3>
              <p className="text-on-surface-variant">Annual flagship events featuring global keynotes and innovation awards.</p>
            </div>
          </div>
          <div className="relative group rounded-3xl overflow-hidden reveal-on-scroll aspect-video active fade-in-up">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/global-tours.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="font-headline-md text-on-surface mb-2">Global Tours</h3>
              <p className="text-on-surface-variant">Industrial visits and exposure tours to global business hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Checkbox */}
      <section className="py-24 bg-surface-container-low/30 relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-on-scroll active fade-in-up">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8">Why Join MYBF?</h2>
            <p className="text-on-surface-variant mb-12">Membership in MYBF is more than just a title; it&apos;s an investment in your future and the community&apos;s progress.</p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Exclusive Access</h4>
                  <p className="text-sm text-on-surface-variant">Gain entry to members-only lounges, VIP networking sessions, and premium business resources.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Brand Visibility</h4>
                  <p className="text-sm text-on-surface-variant">Showcase your business through our forum’s extensive network and public relations channels.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2">Policy Advocacy</h4>
                  <p className="text-sm text-on-surface-variant">Be part of a unified voice that represents the interests of young businesses before government bodies.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal-on-scroll active fade-in-up">
            <div className="glass p-1 rounded-3xl">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/abstract-render.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="glass bg-primary/5 border-primary/20 p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-[100%] h-[150%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8">Ready to Build the Future?</h2>
              <p className="font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
                Take the first step towards transforming your business vision into a legacy. Join the most influential business community in Malappuram today.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-label-caps text-label-caps uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(140,217,117,0.5)] transition-all">
                  Apply for Membership
                </button>
              </div>
              <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <div className="text-primary mb-2 font-bold uppercase tracking-widest text-[10px]">Email Us</div>
                  <div className="text-on-surface">hello@mybf.com</div>
                </div>
                <div>
                  <div className="text-primary mb-2 font-bold uppercase tracking-widest text-[10px]">Call Us</div>
                  <div className="text-on-surface">+91 98765 43210</div>
                </div>
                <div>
                  <div className="text-primary mb-2 font-bold uppercase tracking-widest text-[10px]">Visit Us</div>
                  <div className="text-on-surface">MYBF Hub, Malappuram</div>
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
