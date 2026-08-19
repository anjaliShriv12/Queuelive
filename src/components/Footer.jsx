import { ArrowUp, Clock3 } from "lucide-react"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#070707] px-6 pb-8 pt-10 lg:px-12">
      <div className="mx-auto max-w-[1500px]">

        <div className="flex flex-col gap-10 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4af5f] text-black">
                <Clock3 size={18} />
              </div>

              <span className="text-xl font-semibold text-white">
                Queue<span className="text-[#d4af5f]">Live</span>
              </span>

            </div>

            <p className="mt-4 text-sm leading-6 text-[#666]">
              A virtual queue experience designed to make waiting simpler,
              clearer and less frustrating.
            </p>

          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm sm:grid-cols-3">

            <div>
              <p className="mb-4 text-xs uppercase tracking-wider text-[#444]">
                Product
              </p>

              <div className="space-y-3">
                <a href="#how-it-works" className="block text-[#777] hover:text-white">
                  How it works
                </a>

                <a href="#features" className="block text-[#777] hover:text-white">
                  Features
                </a>

                <a href="#dashboard" className="block text-[#777] hover:text-white">
                  Dashboard
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-wider text-[#444]">
                Company
              </p>

              <div className="space-y-3">
                <span className="block text-[#777]">
                  About
                </span>

                <span className="block text-[#777]">
                  Contact
                </span>

                <span className="block text-[#777]">
                  For organizations
                </span>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-wider text-[#444]">
                Legal
              </p>

              <div className="space-y-3">
                <span className="block text-[#777]">
                  Privacy
                </span>

                <span className="block text-[#777]">
                  Terms
                </span>

                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 text-[#777] hover:text-[#d4af5f]"
                >
                  Back to top
                  <ArrowUp size={13} />
                </button>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs text-[#444]">
            © 2026 QueueLive. Product concept built for demonstration.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer