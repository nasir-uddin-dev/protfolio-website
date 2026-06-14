import { Mail, Phone, MapPin, Download, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Available for opportunities
              </span>
            </div>

            <div className="animate-fade-in-up delay-100">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="text-gradient">Nasir Uddin</span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-200">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 max-w-[60px] bg-blue-500/50" />
                <h2 className="text-xl sm:text-2xl text-slate-300 font-medium">
                  Flutter Developer
                </h2>
              </div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed animate-fade-in-up delay-300 max-w-lg">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-400">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A66C2] hover:bg-[#0958A8] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
              >
                <span className="text-lg font-bold">in</span>
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-0.5"
              >
                <span className="text-lg">🔗</span>
                GitHub
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Download className="w-4 h-4" />
                Get in Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up delay-500">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
              <span className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                {personalInfo.address}
              </span>
            </div>
          </div>

          {/* Right: Avatar / visual */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-200">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl scale-110 animate-pulse-glow" />

              {/* Avatar circle */}
              <div className="relative w-72 h-72 rounded-full bg-slate-800 border border-white/10 overflow-hidden shadow-lg">

                {/* Profile Image */}
                <img
                  src="/profile.jpeg"
                  alt="Nasir Uddin"
                  className="relative z-10 w-full h-full object-cover"
                />

                {/* Floating icons */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center animate-float">
                  <span className="text-lg">📱</span>
                </div>
                <div className="absolute bottom-10 left-4 w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center animate-float-delay">
                  <span className="text-lg">⚡</span>
                </div>
                <div className="absolute top-12 left-4 w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center animate-float-delay-2">
                  <span className="text-lg">🎯</span>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-800 border border-white/10 rounded-xl px-4 py-2 shadow-xl whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 text-sm font-medium">6+ months production experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
