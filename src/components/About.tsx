import { useInView } from '../hooks/useInView';

const stats = [
  { value: '6+', label: 'Months Experience' },
  { value: '6', label: 'Projects Built' },
  { value: '2', label: 'Live Apps' },
  { value: '10+', label: 'Tech Skills' },
];

const highlights = [
  { icon: '🏗️', title: 'Clean Architecture', desc: 'Strict separation of Data, Domain, and Presentation layers for maintainable code.' },
  { icon: '⚡', title: 'Real-time Features', desc: 'WebSocket, LiveKit for real-time chat, audio, and video calling functionality.' },
  { icon: '🎯', title: 'State Management', desc: 'Expert in Provider and Riverpod for reactive, scalable app state.' },
  { icon: '🔗', title: 'API Integration', desc: 'Advanced Dio networking with interceptors, error handling, and DI via Get_it.' },
];

export default function About() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl border border-white/10 p-5 text-center hover:border-blue-500/20 transition-colors"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Flutter Developer</span> based in Dhaka, Bangladesh, passionate about crafting high-performance mobile applications that solve real-world problems. My expertise lies in building scalable, maintainable codebases using <span className="text-blue-400">Clean Architecture</span> and the <span className="text-blue-400">MVVM pattern</span>.
              </p>
              <p>
                During my time at <span className="text-white font-medium">Softvence Delta</span>, I contributed to production apps spanning wellness, gaming, education, and community platforms. I take pride in writing clean, purposeful code that delivers real value to users.
              </p>
              <p>
                Outside of work, I enjoy exploring new Flutter packages, contributing to open-source projects, and staying current with mobile development trends. I believe great software is built through collaboration, curiosity, and a relentless focus on quality.
              </p>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glass rounded-2xl border border-white/10 p-5 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <h3 className="text-white font-semibold mb-1.5">{h.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
