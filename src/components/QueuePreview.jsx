import { useState } from "react"
import {
  Activity,
  ArrowUpRight,
  Clock3,
  Users,
  Bell,
  CheckCircle2,
} from "lucide-react"

function QueuePreview() {
  const [joined, setJoined] = useState(false)

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Activity size={15} />
            Live queue preview
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Know your place.
            <br />
            <span className="text-cyan-400">Before you arrive.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            See your position, estimated wait time, and queue movement in one
            simple view.
          </p>

        </div>

        {/* Dashboard */}
        <div className="relative mx-auto mt-16 max-w-5xl">

          {/* Glow */}
          <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/5 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">

            {/* Dashboard Header */}
            <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  QueueLive
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  CityCare Hospital
                </h3>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Queue is live
              </div>

            </div>

            {/* Dashboard Content */}
            <div className="grid lg:grid-cols-[1.4fr_0.8fr]">

              {/* Main Queue */}
              <div className="p-6 sm:p-8">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Department
                    </p>

                    <h4 className="mt-1 text-xl font-semibold text-white">
                      General Consultation
                    </h4>
                  </div>

                  <div className="hidden rounded-xl border border-white/10 bg-slate-800/70 p-3 sm:block">
                    <Users size={20} className="text-cyan-400" />
                  </div>
                </div>

                {/* Current token */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-800/50 p-6">

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                    <div>
                      <p className="text-sm text-slate-500">
                        Your token
                      </p>

                      <p className="mt-2 text-5xl font-bold tracking-tight text-white">
                        A-24
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Now serving
                      </p>

                      <p className="mt-2 text-3xl font-bold text-cyan-400">
                        A-21
                      </p>
                    </div>

                  </div>

                  {/* Progress */}
                  <div className="mt-7">

                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-500">
                        Queue progress
                      </span>

                      <span className="font-medium text-cyan-400">
                        72%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                      <div className="h-full w-[72%] rounded-full bg-cyan-400" />
                    </div>

                  </div>

                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">

                  <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
                    <Users size={18} className="text-slate-400" />

                    <p className="mt-4 text-sm text-slate-500">
                      People ahead
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      3
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
                    <Clock3 size={18} className="text-slate-400" />

                    <p className="mt-4 text-sm text-slate-500">
                      Estimated wait
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      12 min
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
                    <Bell size={18} className="text-slate-400" />

                    <p className="mt-4 text-sm text-slate-500">
                      Notifications
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      On
                    </p>
                  </div>

                </div>

              </div>

              {/* Side Panel */}
              <div className="border-t border-white/10 bg-slate-950/40 p-6 sm:p-8 lg:border-l lg:border-t-0">

                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white">
                    Recent tokens
                  </h4>

                  <ArrowUpRight size={17} className="text-slate-500" />
                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-4">
                    <span className="font-medium text-white">
                      A-21
                    </span>

                    <span className="text-sm text-emerald-400">
                      Serving
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-4">
                    <span className="font-medium text-white">
                      A-22
                    </span>

                    <span className="text-sm text-slate-400">
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-4">
                    <span className="font-medium text-white">
                      A-23
                    </span>

                    <span className="text-sm text-slate-400">
                      Waiting
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-4">
                    <span className="font-semibold text-cyan-300">
                      A-24
                    </span>

                    <span className="text-sm text-cyan-400">
                      You
                    </span>
                  </div>

                </div>

                {/* Join Queue */}
                <button
                  onClick={() => setJoined(!joined)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 active:scale-[0.98]"
                >
                  {joined ? (
                    <>
                      <CheckCircle2 size={18} />
                      You're in the queue
                    </>
                  ) : (
                    "Join this queue"
                  )}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  Demo interaction — no real appointment is created.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default QueuePreview