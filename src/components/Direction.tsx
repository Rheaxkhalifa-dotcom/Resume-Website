import { TrendingUp, Layers, Bot, Globe } from 'lucide-react';

const targets = [
  { icon: TrendingUp, label: 'Financial Crime' },
  { icon: Globe, label: 'Digital Assets' },
  { icon: Bot, label: 'AI Governance' },
  { icon: Layers, label: 'Regulatory Innovation' },
];

export default function Direction() {
  return (
    <section id="direction" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(251,191,36,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
          Career Direction
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
          Where I'm Going
        </h2>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14">
          I'm building toward roles at the intersection of{' '}
          <span className="text-yellow-400 font-medium">financial crime</span>,{' '}
          <span className="text-yellow-400 font-medium">digital assets</span>,{' '}
          <span className="text-yellow-400 font-medium">AI governance</span>{' '}
          and{' '}
          <span className="text-yellow-400 font-medium">regulatory innovation</span>.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {targets.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="card-hover group bg-[#1e1e1e] border border-white/8 rounded-xl p-6 flex flex-col items-center gap-3 cursor-default"
            >
              <div className="w-12 h-12 bg-yellow-400/8 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/15 transition-colors duration-200">
                <Icon size={22} className="text-yellow-400" />
              </div>
              <span className="text-white text-sm font-medium text-center leading-snug">{label}</span>
            </div>
          ))}
        </div>

        <div className="border border-yellow-400/20 bg-yellow-400/4 rounded-2xl px-8 py-8 max-w-2xl mx-auto">
          <blockquote className="text-gray-300 text-base md:text-lg leading-relaxed italic">
            "The next generation of compliance professionals will be fluent in both regulation and technology.
            I'm building that fluency — and the platform to share it."
          </blockquote>
          <p className="text-yellow-400/70 text-sm mt-4 font-medium">— Rhea Kalifa</p>
        </div>
      </div>
    </section>
  );
}
