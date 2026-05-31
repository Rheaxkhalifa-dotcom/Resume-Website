import { useState } from 'react';

type SkillCategory = 'All' | 'Compliance' | 'Tech/AI' | 'Crypto' | 'Business';

interface SkillGroup {
  category: Exclude<SkillCategory, 'All'>;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Compliance',
    color: 'border-emerald-400/30 text-emerald-300 bg-emerald-400/5',
    skills: [
      'AML', 'Sanctions', 'Financial Crime', 'Investigations',
      'Third-Party Risk', 'Risk Reporting', 'Remediation',
      'Procurement Compliance', 'Sales Incentive Reviews',
      'Marketing Compliance', 'Regulatory Review', 'KYC/KYB',
    ],
  },
  {
    category: 'Tech/AI',
    color: 'border-sky-400/30 text-sky-300 bg-sky-400/5',
    skills: [
      'AI Productivity', 'Prompt Design', 'Microsoft Copilot',
      'Data Analysis', 'Workflow Automation', 'Excel / Power Query',
      'AI Governance', 'Working Paper Automation',
    ],
  },
  {
    category: 'Crypto',
    color: 'border-yellow-400/30 text-yellow-300 bg-yellow-400/5',
    skills: [
      'Blockchain Risk', 'Crypto Crime', 'Digital Asset Regulation',
      'Tokenomics', 'DeFi Compliance', 'Crypto AML', 'MiCA',
      'FATF Travel Rule', 'Web3 Strategy',
    ],
  },
  {
    category: 'Business',
    color: 'border-rose-400/30 text-rose-300 bg-rose-400/5',
    skills: [
      'Stakeholder Management', 'Startup Strategy', 'Content Strategy',
      'Research & Synthesis', 'Report Writing', 'Business Development',
      'Personal Branding',
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>('All');

  const displayed =
    active === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.category === active);

  return (
    <section id="skills" className="py-24 px-6 bg-[#161616]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            A practitioner's skill set built across compliance, forensics, tech, and crypto.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-10 justify-center">
          {(['All', 'Compliance', 'Tech/AI', 'Crypto', 'Business'] as SkillCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm px-5 py-2 rounded-full border transition-all duration-200 font-medium ${
                active === cat
                  ? 'bg-yellow-400 text-[#181818] border-yellow-400'
                  : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {displayed.map((group) => (
            <div key={group.category} className="bg-[#1e1e1e] border border-white/8 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-white/6" />
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`pill text-xs font-medium px-3.5 py-1.5 rounded-full border cursor-default ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
