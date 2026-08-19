import {
  ArrowDownRight,
  ArrowRight,
  Bell,
  Check,
  Clock3,
  Play,
  Users,
} from "lucide-react"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070707] pt-[84px]"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-px w-32 bg-white/10" />
        <div className="absolute right-[12%] top-[30%] h-px w-24 bg-[#d4af5f]/20" />
        <div className="absolute bottom-[15%] left-[40%] h-px w-20 bg-white/5" />

        <div className="absolute right-[-180px] top-[100px] h-[520px] w-[520px] rounded-full bg-[#d4af5f]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-[1500px] items-center gap-16 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-20 xl:gap-24">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* Small label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4af5f]">
              QueueLive / 01
            </span>

            <span className="h-px w-14 bg-[#d4af5f]/50" />
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-[48px] font-medium leading-[0.96] tracking-[-0.045em] text-white sm:text-[62px] lg:text-[72px] xl:text-[82px]">
            Your place in line.
            <br />

            <span className="text-[#d4af5f]">
              Without standing in it.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-[#858585] sm:text-base">
            QueueLive turns physical waiting into a simple digital
            experience. Join remotely, follow your position, and know
            when it is time to arrive.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#queue-preview"
              className="group flex items-center justify-center gap-3 bg-[#d4af5f] px-6 py-3.5 text-sm font-medium text-black transition hover:bg-[#e5c878]"
            >
              Join a Queue

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#how-it-works"
              className="group flex items-center justify-center gap-3 border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#d4af5f]/50 hover:bg-white/[0.03]"
            >
              <Play
                size={15}
                className="text-[#d4af5f]"
              />

              See how it works
            </a>
          </div>

          {/* Bottom information */}
          <div className="mt-14 grid max-w-2xl border-y border-white/10 sm:grid-cols-3">
            {/* Item 1 */}
            <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:pr-6">
              <div className="flex items-center gap-3">
                <Clock3
                  size={17}
                  className="text-[#d4af5f]"
                />

                <span className="text-sm font-medium text-white">
                  Save time
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#626262]">
                Avoid unnecessary waiting.
              </p>
            </div>

            {/* Item 2 */}
            <div className="border-b border-white/10 py-5 sm:border-b-0 sm:px-6 sm:border-r">
              <div className="flex items-center gap-3">
                <Bell
                  size={17}
                  className="text-[#d4af5f]"
                />

                <span className="text-sm font-medium text-white">
                  Stay updated
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#626262]">
                Know when your turn is close.
              </p>
            </div>

            {/* Item 3 */}
            <div className="py-5 sm:pl-6">
              <div className="flex items-center gap-3">
                <Users
                  size={17}
                  className="text-[#d4af5f]"
                />

                <span className="text-sm font-medium text-white">
                  Wait anywhere
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#626262]">
                Leave the physical line behind.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PRODUCT PREVIEW */}
        <div className="relative z-10">
          {/* Decorative vertical label */}
          <div className="absolute -left-8 top-12 hidden -rotate-90 text-[9px] uppercase tracking-[0.3em] text-[#444] xl:block">
            Live queue / preview
          </div>

          {/* Outer frame */}
          <div className="relative mx-auto max-w-[500px]">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-12 rounded-full bg-[#d4af5f]/5 blur-[110px]" />

            {/* Product window */}
            <div className="relative overflow-hidden border border-white/10 bg-[#101010] shadow-2xl shadow-black/60">
              {/* Top browser-like bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#383838]" />
                  <span className="h-2 w-2 rounded-full bg-[#383838]" />
                  <span className="h-2 w-2 rounded-full bg-[#383838]" />
                </div>

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#4f4f4f]">
                  QueueLive
                </p>

                <div className="w-10" />
              </div>

              {/* Product content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#555]">
                      Live Queue
                    </p>

                    <h3 className="mt-2 text-base font-medium text-white">
                      General Consultation
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    LIVE
                  </div>
                </div>

                {/* Token */}
                <div className="mt-10 border border-white/10 bg-[#0b0b0b] p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-[#5f5f5f]">
                        Your token
                      </p>

                      <p className="mt-2 text-6xl font-medium tracking-[-0.04em] text-white">
                        A-24
                      </p>
                    </div>

                    <span className="border border-[#d4af5f]/20 bg-[#d4af5f]/5 px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#d4af5f]">
                      Waiting
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="border border-white/10 bg-[#0b0b0b] p-5">
                    <div className="flex items-center gap-2 text-[#555]">
                      <Users size={14} />

                      <span className="text-[10px] uppercase tracking-wider">
                        Ahead
                      </span>
                    </div>

                    <p className="mt-3 text-3xl font-medium text-white">
                      3
                    </p>
                  </div>

                  <div className="border border-white/10 bg-[#0b0b0b] p-5">
                    <div className="flex items-center gap-2 text-[#555]">
                      <Clock3 size={14} />

                      <span className="text-[10px] uppercase tracking-wider">
                        Wait
                      </span>
                    </div>

                    <p className="mt-3 text-3xl font-medium text-[#d4af5f]">
                      12m
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#555]">
                      Queue progress
                    </span>

                    <span className="text-[10px] text-[#d4af5f]">
                      72%
                    </span>
                  </div>

                  <div className="mt-3 h-[3px] bg-[#292929]">
                    <div className="h-full w-[72%] bg-[#d4af5f]" />
                  </div>

                  <div className="mt-2 flex justify-between text-[9px] text-[#4f4f4f]">
                    <span>Now serving</span>
                    <span>Your position</span>
                  </div>
                </div>

                {/* Notification */}
                <div className="mt-7 border border-[#d4af5f]/20 bg-[#d4af5f]/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#d4af5f]/10 text-[#d4af5f]">
                      <Bell size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white">
                        Your turn is getting closer
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-[#666]">
                        We will notify you before it is time to arrive.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Demo label */}
                <div className="mt-5 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.16em] text-[#444]">
                  <Check size={11} />
                  Representative demo data
                </div>
              </div>
            </div>

            {/* Small floating detail */}
            <div className="absolute -bottom-6 -left-5 hidden w-48 border border-white/10 bg-[#111111] p-4 shadow-xl sm:block">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-wider text-[#555]">
                  Queue activity
                </span>

                <ArrowDownRight
                  size={14}
                  className="text-[#d4af5f]"
                />
              </div>

              <div className="mt-4 flex h-10 items-end gap-1">
                <span className="h-[35%] flex-1 bg-[#292929]" />
                <span className="h-[55%] flex-1 bg-[#383838]" />
                <span className="h-[45%] flex-1 bg-[#454545]" />
                <span className="h-[70%] flex-1 bg-[#806b3d]" />
                <span className="h-full flex-1 bg-[#d4af5f]" />
                <span className="h-[65%] flex-1 bg-[#806b3d]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-[#444] lg:flex">
        <span>Scroll to explore</span>
        <span className="h-px w-8 bg-[#444]" />
      </div>
    </section>
  )
}

export default Hero