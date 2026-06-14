import { Mail, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">
              Nasir<span className="text-blue-400">.</span>dev
            </span>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-slate-500 text-sm">
            &copy; {currentYear} Nasir Uddin. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            in Dhaka
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8 hover:border-white/15 transition-all duration-200"
            >
              <span className="text-sm font-bold">in</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8 hover:border-white/15 transition-all duration-200"
            >
              <span className="text-sm">🔗</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8 hover:border-white/15 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
