import { Mic2, Cpu, PenTool, BookOpen, ArrowUpRight } from 'lucide-react';

interface Project {
  icon: typeof Mic2;
  title: string;
  desc: string;
  status: string;
  statusColor: string;
  tags: string[];
}

const projects: Project[] = [
  {
    icon: Mic2,
    title: 'Rhea Talks',
    desc: "A content platform exploring AI, financial crime, personal finance, career growth, and women's ambition — making complex topics genuinely engaging.",
    status: 'Active',
    statusColor: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    tags: ['Content Strategy', 'Personal Brand', 'Thought Leadership'],
  },
  {
    icon: Cpu,
    title: 'CryptoReg AI',
    desc: 'Concept for an AI-powered regulatory intelligence platform for digital assets — tracking, interpreting, and alerting compliance teams to crypto regulatory change.',
    status: 'Concept',
    statusColor: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    tags: ['RegTech', 'Crypto', 'AI', 'SaaS'],
  },
  {
    icon: PenTool,
    title: 'AI x Compliance',
    desc: 'Practical explainers on AML, fraud, AI governance, and emerging financial crime risks — written for practitioners, not academics.',
    status: 'Active',
    statusColor: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    tags: ['AML', 'AI Governance', 'Financial Crime'],
  },
  {
    icon: BookOpen,
    title: 'Booked MVP',
    desc: 'An app concept where people swipe on books and get matched into small, focused reading groups. Discovery meets community.',
    status: 'Ideation',
    statusColor: 'bg-sky-400/10 text-sky-400 border-sky-400/20',
    tags: ['Product', 'Community', 'Consumer App'],
  },
];

export default function Building() {
  return (
    <section id="building" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Side Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            What I'm Building
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Experiments, platforms, and concepts I'm actively developing alongside my day role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="card-hover group bg-[#1e1e1e] border border-white/8 rounded-xl p-7 flex flex-col gap-4 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 bg-yellow-400/8 rounded-xl flex items-center justify-center group-hover:bg-yellow-400/15 transition-colors duration-200">
                    <Icon size={20} className="text-yellow-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${project.statusColor}`}>
                      {project.status}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/4 flex items-center justify-center text-gray-600 group-hover:text-yellow-400 group-hover:bg-yellow-400/8 transition-all duration-200">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-white/4 border border-white/8 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
