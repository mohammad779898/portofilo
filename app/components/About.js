export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I&apos;m a passionate full-stack developer who loves crafting digital experiences that feel fast, reliable, and enjoyable to use.
            </p>
            <p>
              On the mobile side I build with <strong className="text-sky-400">Flutter</strong> — shipping polished cross-platform apps.{" "}
              For the web I reach for <strong className="text-white">Next.js</strong> (App Router, Server Components, Server Actions) and modern React patterns.
            </p>
            <p>
              Backend work usually lives in <strong className="text-green-400">Django</strong> or pure <strong className="text-yellow-300">Python</strong>, sometimes Node.js.{" "}
              I care about clean architecture, good testing, and keeping things maintainable.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-4">Quick facts</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex justify-between">
                <span className="text-slate-500">Location</span>
                <span>Remote / Worldwide</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Email</span>
                <a href="mailto:deanj7798@gmail.com" className="text-sky-400 hover:underline">
                  deanj7798@gmail.com
                </a>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Focus</span>
                <span>Flutter · Next.js · Django</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Open to</span>
                <span>Freelance & full-time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
