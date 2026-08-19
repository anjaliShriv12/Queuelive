import { useState } from "react"
import {
  ArrowRight,
  Clock3,
  Menu,
  X,
} from "lucide-react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070707]/95 backdrop-blur-xl lg:left-[76px]">
      <div className="mx-auto flex h-[84px] max-w-[1500px] items-center justify-between px-5 sm:px-6 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d4af5f] text-black">
            <Clock3
              size={19}
              strokeWidth={2.5}
            />
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            Queue<span className="text-[#d4af5f]">Live</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">

          <a
            href="#home"
            className="text-sm text-[#d4af5f] transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-[#777] transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#features"
            className="text-sm text-[#777] transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#dashboard"
            className="text-sm text-[#777] transition hover:text-white"
          >
            Dashboard
          </a>

          <a
            href="#organizations"
            className="text-sm text-[#777] transition hover:text-white"
          >
            For Organizations
          </a>

        </div>

        {/* Desktop CTA */}
        <a
          href="#queue-preview"
          className="group hidden items-center gap-2 rounded-lg border border-[#d4af5f]/40 px-5 py-2.5 text-sm font-medium text-[#d4af5f] transition hover:bg-[#d4af5f] hover:text-black lg:flex"
        >
          Join a Queue

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-[#d4af5f]/50 hover:text-[#d4af5f] lg:hidden"
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#090909] px-5 py-5 lg:hidden">

          <div className="flex flex-col">

            <a
              href="#home"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-white transition hover:text-[#d4af5f]"
            >
              Home
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#999] transition hover:text-[#d4af5f]"
            >
              How it works
            </a>

            <a
              href="#features"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#999] transition hover:text-[#d4af5f]"
            >
              Features
            </a>

            <a
              href="#dashboard"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#999] transition hover:text-[#d4af5f]"
            >
              Dashboard
            </a>

            <a
              href="#organizations"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm text-[#999] transition hover:text-[#d4af5f]"
            >
              For Organizations
            </a>

            <a
              href="#queue-preview"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 bg-[#d4af5f] px-5 py-3.5 text-sm font-medium text-black transition hover:bg-[#e5c878]"
            >
              Join a Queue

              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar