import { Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6">
          Available for freelance & full-time opportunities
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Deanj
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mb-4">
          Full-stack developer building beautiful mobile apps with{" "}
          <span className="text-sky-400 font-medium">Flutter</span>, modern web with{" "}
          <span className="text-white font-medium">Next.js</span>, and robust backends with{" "}
          <span className="text-green-400 font-medium">Django</span> & Python.
        </p>
        <p className="text-slate-400 mb-10 max-w-xl">
          I turn ideas into production-ready products — clean code, solid architecture, and delightful user experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition shadow-lg shadow-sky-500/25"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-medium transition"
          >
            View projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
