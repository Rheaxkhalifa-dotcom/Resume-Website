import { ArrowDown, Sparkles, Briefcase } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #181818 0%, #1a1f18 25%, #181818 50%, #181a1f 75%, #181818 100%)',
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(251,191,36,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 border border-yellow-400/25 bg-yellow-400/8 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" style={{ boxShadow: '0 0 6px #fbbf24' }} />
          <span className="text-yellow-400 text-xs font-medium tracking-wider uppercase">
            Senior Associate · EY Forensics · Belfast
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display animate-fade-in-up delay-200 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          I investigate risk, decode regulation, and build smart ideas at the edge of{' '}
          <span className="shimmer-text">AI and compliance.</span>
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-in-up delay-300 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Senior Associate in Forensics focused on financial crime, compliance,
          digital assets and AI-enabled ways of working.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#experience')}
            className="group flex items-center gap-2 bg-yellow-400 text-[#181818] font-semibold px-7 py-3.5 rounded-md hover:bg-yellow-300 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Briefcase size={16} />
            View Experience
          </button>
          <button
            onClick={() => scrollTo('#building')}
            className="group flex items-center gap-2 border border-white/15 text-white px-7 py-3.5 rounded-md hover:border-yellow-400/40 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Sparkles size={16} />
            See What I'm Building
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="text-gray-400 hover:text-white px-7 py-3.5 rounded-md hover:bg-white/5 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Contact
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-800 mt-20 flex justify-center">
          <button
            onClick={() => scrollTo('#snapshot')}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-yellow-400 transition-colors duration-200 group"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
