import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { experience, training, education } from '../data/portfolio';

export default function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building real-world applications and growing as a Flutter developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience - takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {experience.map((job: any, i: number) => (
              <div
                key={i}
                className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <p className="text-blue-400 font-medium">{job.company}</p>
                        <div className="flex flex-wrap gap-3 mt-1.5">
                          <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                            <Calendar className="w-3.5 h-3.5" />
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium whitespace-nowrap">
                      Full-time
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {job.highlights.map((h: string, j: number) => (
                      <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Training - right column */}
          <div className="space-y-5">
            <div
              className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 text-xs">🎓</span>
                </span>
                Education
              </h3>
              {education.map((edu: any, i: number) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-5 border border-white/10 hover:border-blue-500/20 transition-colors"
                >
                  <div className="text-white font-semibold">{edu.degree}</div>
                  <div className="text-slate-400 text-sm mt-1">{edu.institution}</div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 text-xs">📚</span>
                </span>
                Training
              </h3>
              <div className="space-y-3">
                {training.map((t: any, i: number) => (
                  <div
                    key={i}
                    className="glass rounded-2xl p-5 border border-white/10 hover:border-cyan-500/20 transition-colors"
                  >
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-cyan-400 text-sm font-medium">{t.provider}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span className="text-slate-500 text-xs">{t.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
