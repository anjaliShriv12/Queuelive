import { useState } from "react"
import { ArrowRight, Clock3 } from "lucide-react"

function Navbar() {
  const [clicks, setClicks] = useState(0)

  return (
    <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

        {/* Logo */}
        <div
          onClick={() => setClicks((prev) => prev + 1)}
          className="flex cursor-pointer items-center gap-2.5"
          title="QueueLive"
        >
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
        <a
          href="#queue-preview"
          className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Get Started

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

      </div>

      {/* Easter Egg */}
      {clicks >= 5 && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl border border-cyan-400/30 bg-slate-900 px-4 py-3 text-sm text-cyan-400 shadow-2xl shadow-black/40">
          🎉 You found the hidden queue!
        </div>
      )}

    </nav>
  )
}

export default Navbar