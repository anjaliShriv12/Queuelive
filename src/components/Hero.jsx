import { ArrowRight, Play, CheckCircle2 } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">

        {/* Left Content */}
        <div className="relative z-10">

          {/* Small badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Smart virtual queue management
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Stop waiting.
            <br />
            <span className="text-cyan-400">Start living.</span>
          </h1>
          <div className="mt-3 text-xs text-slate-700 transition hover:text-cyan-400">
            Queue less. Live more.
          </div>
          

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            QueueLive lets people join a virtual queue, track their position
            in real time, and know when it is their turn — without standing
            around waiting.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            {/* Join Queue Button */}
            <a
              href="#queue-preview"
              className="group flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Join a Queue

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* See How It Works */}
            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              <Play size={17} />
              See how it works
            </a>

          </div>

          {/* Trust points */}
          <div className="mt-9 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:gap-6">

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={17}
                className="text-cyan-400"
              />
              No physical waiting
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={17}
                className="text-cyan-400"
              />
              Live queue updates
            </div>

          </div>

        </div>

        {/* Right Product Preview */}
        <div className="relative z-10">

          {/* Glow */}
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

          {/* Dashboard Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">

            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

              <div>
                <p className="text-xs text-slate-500">
                  YOUR QUEUE
                </p>

                <h3 className="mt-1 font-semibold text-white">
                  General Consultation
                </h3>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live
              </div>

            </div>

            {/* Token */}
            <div className="px-6 py-7">

              <div className="rounded-2xl bg-slate-800/80 p-6">

                <p className="text-sm text-slate-400">
                  Your token
                </p>

                <div className="mt-2 flex items-end justify-between">

                  <span className="text-5xl font-bold tracking-tight text-white">
                    A-24
                  </span>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-300">
                    Waiting
                  </span>

                </div>

              </div>

              {/* Queue position */}
              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-5">

                  <p className="text-sm text-slate-500">
                    People ahead
                  </p>

                  <p className="mt-2 text-3xl font-bold text-white">
                    3
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-5">

                  <p className="text-sm text-slate-500">
                    Estimated wait
                  </p>

                  <p className="mt-2 text-3xl font-bold text-white">
                    12m
                  </p>

                </div>

              </div>

              {/* Progress */}
              <div className="mt-6">

                <div className="mb-2 flex justify-between text-xs">

                  <span className="text-slate-500">
                    Queue progress
                  </span>

                  <span className="text-cyan-400">
                    72%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                  <div className="h-full w-[72%] rounded-full bg-cyan-400" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero