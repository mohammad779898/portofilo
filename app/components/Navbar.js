import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-sky-400">Deanj</span>
          <span className="text-slate-400">.dev</span>
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-sky-400 transition">About</Link>
          <Link href="#skills" className="hover:text-sky-400 transition">Skills</Link>
          <Link href="#projects" className="hover:text-sky-400 transition">Projects</Link>
          <Link href="#contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}