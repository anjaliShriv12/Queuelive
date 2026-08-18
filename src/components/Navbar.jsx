import { ArrowRight, Clock3 } from "lucide-react"

function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
            <Clock3 size={20} strokeWidth={2.5} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Queue<span className="text-cyan-400">Live</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#features"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#dashboard"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Dashboard
          </a>
        </div>

        {/* CTA */}
        <button className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Get Started
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

      </div>
    </nav>
  )
}

export default Navbar