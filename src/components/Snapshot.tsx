import { Shield, Bitcoin, Brain, Rocket } from 'lucide-react';

const cards = [
  {
    icon: Shield,
    title: 'Financial Crime & Compliance',
    desc: 'AML, sanctions, third-party risk, investigations, and regulatory compliance across complex client environments.',
    tag: 'Core Practice',
    tagColor: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
  },
  {
    icon: Bitcoin,
    title: 'Crypto / Digital Assets',
    desc: 'Blockchain risk, crypto crime investigation, digital asset regulation, and AML frameworks for the Web3 space.',
    tag: 'Specialist Focus',
    tagColor: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
  },
  {
    icon: Brain,
    title: 'AI Innovation',
    desc: 'Applying AI and automation to compliance workflows, risk analysis, and smarter ways of working in forensics.',
    tag: 'Emerging Edge',
    tagColor: 'bg-sky-400/10 text-sky-400 border-sky-400/20',
  },
  {
    icon: Rocket,
    title: 'Startup & Content Builder',
    desc: 'Co-founded a Web3 startup, building a content platform on AI and career, and developing RegTech concepts.',
    tag: 'Side Ventures',
    tagColor: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  },
];

export default function Snapshot() {
  return (
    <section id="snapshot" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            What I Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            At a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="card-hover group bg-[#1e1e1e] border border-white/8 rounded-xl p-6 flex flex-col gap-4 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/18 transition-colors duration-200">
                    <Icon size={20} className="text-yellow-400" />
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
