import {
  TrendingDown,
  Clock3,
  Users,
  Activity,
} from "lucide-react"

function WaitTime() {
  return (
    <section className="overflow-hidden bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Activity size={15} />
            Smart wait-time view
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Don't just know
            <br />
            your position.
            <br />
            <span className="text-cyan-400">
              Know your time.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            QueueLive turns queue activity into an easy-to-understand wait
            estimate, helping people decide whether to wait nearby or come
            back later.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <Clock3 size={20} className="text-cyan-400" />

              <p className="mt-4 text-sm text-slate-500">
                Estimated wait
              </p>

              <p className="mt-1 text-2xl font-bold text-white">
                12 min
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <Users size={20} className="text-cyan-400" />

              <p className="mt-4 text-sm text-slate-500">
                People ahead
              </p>

              <p className="mt-1 text-2xl font-bold text-white">
                3
              </p>
            </div>

          </div>

        </div>

        {/* Right visualization */}
        <div className="relative">

          <div className="absolute -inset-6 rounded-[3rem] bg-cyan-400/5 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl sm:p-8">

            {/* Header */}
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  Queue activity
                </p>

                <p className="mt-1 font-semibold text-white">
                  General Consultation
                </p>
              </div>

              <div className="rounded-xl bg-emerald-400/10 px-3 py-2 text-sm text-emerald-400">
                Live
              </div>

            </div>

            {/* Chart */}
            <div className="mt-10 flex h-48 items-end gap-3">

              <div className="h-[35%] flex-1 rounded-t-lg bg-slate-700" />
              <div className="h-[48%] flex-1 rounded-t-lg bg-slate-700" />
              <div className="h-[42%] flex-1 rounded-t-lg bg-slate-700" />
              <div className="h-[65%] flex-1 rounded-t-lg bg-cyan-400/50" />
              <div className="h-[55%] flex-1 rounded-t-lg bg-cyan-400/60" />
              <div className="h-[78%] flex-1 rounded-t-lg bg-cyan-400" />
              <div className="h-[62%] flex-1 rounded-t-lg bg-cyan-400/70" />
              <div className="h-[45%] flex-1 rounded-t-lg bg-cyan-400/50" />

            </div>

            {/* Prediction */}
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <TrendingDown size={20} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Queue is moving faster
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Current activity suggests your estimated wait may decrease
                    as the queue progresses.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default WaitTime