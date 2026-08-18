import {
  Clock3,
  ArrowUp,
  ExternalLink,
} from "lucide-react"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                <Clock3 size={19} strokeWidth={2.5} />
              </div>

              <span className="text-xl font-bold tracking-tight text-white">
                Queue<span className="text-cyan-400">Live</span>
              </span>

            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              A virtual queue concept designed to make waiting simpler,
              clearer, and less frustrating.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">

            <a
              href="#queue-preview"
              className="text-slate-500 transition hover:text-white"
            >
              Queue
            </a>

            <a
              href="#how-it-works"
              className="text-slate-500 transition hover:text-white"
            >
              How it works
            </a>

            <a
              href="#features"
              className="text-slate-500 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#dashboard"
              className="text-slate-500 transition hover:text-white"
            >
              Dashboard
            </a>

          </div>

          {/* External Links + Back to Top */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-500 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              GitHub
              <ExternalLink size={14} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-500 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              LinkedIn
              <ExternalLink size={14} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-500 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/5 pt-6">

          <p className="text-xs text-slate-600">
            © 2026 QueueLive. Product concept built for demonstration.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer