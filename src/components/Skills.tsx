import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import { Code, Wrench, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Terminal,
    label: 'Languages',
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
    badgeColor: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    items: skills.languages,
  },
  {
    icon: Code,
    label: 'Development',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    badgeColor: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    items: skills.development,
  },
  {
    icon: Wrench,
    label: 'Tools',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    items: skills.tools,
  },
];

export default function Skills() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Technical Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A curated set of technologies I use to build reliable, performant, and beautiful mobile applications.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`h-full rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} p-6 glass`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${cat.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{cat.label}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item: string) => (
                      <span
                        key={item}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${cat.badgeColor} transition-all duration-200 hover:scale-105`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
