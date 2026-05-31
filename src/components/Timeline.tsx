import { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Bitcoin, Globe } from 'lucide-react';

type Category = 'All' | 'EY' | 'Crypto' | 'Web3';

interface TimelineEntry {
  id: string;
  category: 'EY' | 'Crypto' | 'Web3';
  icon: typeof Building2;
  period: string;
  role: string;
  org: string;
  location?: string;
  summary: string;
  bullets: string[];
}

const entries: TimelineEntry[] = [
  {
    id: 'ey',
    category: 'EY',
    icon: Building2,
    period: 'Current',
    role: 'Senior Associate, Forensics',
    org: 'EY',
    location: 'Belfast, UK',
    summary: 'Investigations & Compliance across financial crime, AML, sanctions, and third-party risk.',
    bullets: [
      'Compliance reviews across AML, sanctions, third-party risk, procurement, sales incentives and marketing controls',
      'Analysed complex client datasets to identify risk patterns and compliance gaps',
      'Drafted senior-stakeholder-ready reports with findings and remediation action plans',
      'Supported AI use cases for review processes and working paper automation',
      'Collaborated with multidisciplinary teams on large-scale financial crime engagements',
    ],
  },
  {
    id: 'crypto',
    category: 'Crypto',
    icon: Bitcoin,
    period: 'MSc Research',
    role: 'Crypto & Digital Assets Researcher',
    org: 'Independent',
    summary: 'Deep-dive research into cryptocurrency crime, blockchain risk, and digital asset regulation.',
    bullets: [
      'Master\'s dissertation focused on cryptocurrency crimes and investigative frameworks',
      'Research spanning blockchain risk, crypto crime typologies, AML, and digital asset compliance',
      'Tracks UK, EU, and global crypto regulatory developments and translates changes into practical insights',
      'Monitors MiCA, FATF Travel Rule, and FCA digital asset frameworks',
      'Develops views on compliance frameworks for exchanges, DeFi, and NFT markets',
    ],
  },
  {
    id: 'web3',
    category: 'Web3',
    icon: Globe,
    period: 'Early Career',
    role: 'Co-founder & Strategy Lead',
    org: 'Robinmania / Web3 Ecosystem',
    summary: 'Built an Ethereum play-to-earn gaming concept and gained hands-on startup and Web3 exposure.',
    bullets: [
      'Worked on Ethereum play-to-earn gaming concept Robinmania, leading legal, compliance and tokenomics',
      'Developed business strategy and governance frameworks for a Web3 product launch',
      'Startup exposure through Open Startup Tunisia and broader entrepreneurship ecosystem',
      'Mentored in Web3 product development, community building and token economics',
      'Built understanding of smart contracts, on-chain governance and crypto market dynamics',
    ],
  },
];

const categoryConfig = {
  EY: { color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20', dot: 'bg-emerald-400' },
  Crypto: { color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20', dot: 'bg-yellow-400' },
  Web3: { color: 'text-sky-400', bg: 'bg-sky-400/10 border-sky-400/20', dot: 'bg-sky-400' },
};

export default function Timeline() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [expanded, setExpanded] = useState<string | null>('ey');

  const filtered = entries.filter(
    (e) => activeFilter === 'All' || e.category === activeFilter
  );

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="experience" className="py-24 px-6 bg-[#161616]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Track Record
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Where I've worked, what I've built, and the expertise I bring to the table.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-10 justify-center">
          {(['All', 'EY', 'Crypto', 'Web3'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm px-5 py-2 rounded-full border transition-all duration-200 font-medium ${
                activeFilter === cat
                  ? 'bg-yellow-400 text-[#181818] border-yellow-400'
                  : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/60 via-yellow-400/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-4">
            {filtered.map((entry) => {
              const Icon = entry.icon;
              const config = categoryConfig[entry.category];
              const isOpen = expanded === entry.id;

              return (
                <div key={entry.id} className="sm:pl-14 relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-3 top-6 w-5 h-5 rounded-full border-2 border-[#161616] ${config.dot} hidden sm:flex items-center justify-center`}>
                    <div className="w-2 h-2 rounded-full bg-[#161616]" />
                  </div>

                  <button
                    onClick={() => toggle(entry.id)}
                    className="w-full text-left"
                  >
                    <div className={`bg-[#1e1e1e] border rounded-xl p-6 transition-all duration-200 ${isOpen ? 'border-yellow-400/30' : 'border-white/8 hover:border-white/15'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={18} className={config.color} />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 flex-wrap mb-1">
                              <h3 className="text-white font-semibold text-base">
                                {entry.role}
                              </h3>
                              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${config.bg} ${config.color}`}>
                                {entry.category}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
                              <span className="font-medium text-gray-400">{entry.org}</span>
                              {entry.location && (
                                <>
                                  <span className="text-gray-700">·</span>
                                  <span>{entry.location}</span>
                                </>
                              )}
                              <span className="text-gray-700">·</span>
                              <span className="text-yellow-400/70">{entry.period}</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">{entry.summary}</p>
                          </div>
                        </div>
                        <div className="text-gray-600 shrink-0 mt-1">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>

                      {/* Expanded details */}
                      {isOpen && (
                        <div className="mt-5 pt-5 border-t border-white/6">
                          <ul className="space-y-2.5">
                            {entry.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 mt-1.5 shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
