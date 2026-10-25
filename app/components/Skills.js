import { Code2, Smartphone, Server, Database } from "lucide-react";
import data from "../data/projects_data.json";

const { skills } = data;

// maps the icon name in the JSON to the real component
const icons = { Code2, Smartphone, Server, Database };

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Skills & Technologies</h2>
        <p className="text-slate-400 mb-10 max-w-2xl">
          Technologies I use day-to-day to ship high-quality products.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const Icon = icons[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="group relative bg-slate-900/50 border border-slate-800 hover:border-slate-600 rounded-2xl p-5 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-slate-500 mt-2 block text-right">{skill.level}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
