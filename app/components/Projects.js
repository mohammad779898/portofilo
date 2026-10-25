import { ExternalLink } from "lucide-react";
import data from "../data/projects_data.json";

const { projects } = data;

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Selected Projects</h2>
        <p className="text-slate-400 mb-10">A few things I&apos;ve built or contributed to.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-slate-900/40 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-6 transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-400 transition">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300"
              >
                View project <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
