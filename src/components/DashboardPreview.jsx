import {
  LayoutDashboard,
  Users,
  Clock3,
  CheckCircle2,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react"

const queueRows = [
  {
    token: "A-21",
    name: "Current",
    status: "Serving",
    wait: "Now",
  },
  {
    token: "A-22",
    name: "Next",
    status: "Ready",
    wait: "2 min",
  },
  {
    token: "A-23",
    name: "Waiting",
    status: "Waiting",
    wait: "7 min",
  },
  {
    token: "A-24",
    name: "Waiting",
    status: "Waiting",
    wait: "12 min",
  },
]

function DashboardPreview() {
  return (
    <section className="bg-slate-900/40 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <LayoutDashboard size={15} />
            For departments & staff
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One dashboard.
            <br />
            <span className="text-slate-500">
              Complete queue control.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Staff can see the active queue, manage tokens, and keep the
            waiting experience moving smoothly.
          </p>

        </div>

        {/* Dashboard */}
        <div className="relative mx-auto mt-16 max-w-6xl">

          <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/5 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-black/30">

            {/* Dashboard top bar */}
            <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                  <LayoutDashboard size={20} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    QueueLive Dashboard
                  </p>

                  <p className="text-xs text-slate-500">
                    General Consultation
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  System operational
                </div>

                <button className="hidden rounded-lg border border-white/10 p-2 text-slate-400 transition hover:bg-white/5 hover:text-white sm:block">
                  <MoreHorizontal size={18} />
                </button>

              </div>

            </div>

            {/* Stats */}
            <div className="grid border-b border-white/10 sm:grid-cols-3">

              <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                <div className="flex items-center gap-2 text-slate-500">
                  <Users size={17} />
                  <span className="text-sm">
                    People waiting
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold text-white">
                  18
                </p>

                <p className="mt-1 text-xs text-emerald-400">
                  Queue active
                </p>
              </div>

              <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock3 size={17} />
                  <span className="text-sm">
                    Average wait
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold text-white">
                  14 min
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Current estimate
                </p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle2 size={17} />
                  <span className="text-sm">
                    Completed today
                  </span>
                </div>

                <p className="mt-3 text-3xl font-bold text-white">
                  42
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Across this department
                </p>
              </div>

            </div>

            {/* Queue area */}
            <div className="p-6 sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    Active queue
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Today's tokens
                  </h3>
                </div>

                <button className="flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Call next token
                  <ArrowUpRight size={16} />
                </button>

              </div>

              {/* Table */}
              <div className="mt-7 overflow-x-auto">

                <div className="min-w-[620px]">

                  {/* Table header */}
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr] border-b border-white/10 px-4 pb-3 text-xs font-medium uppercase tracking-wider text-slate-600">
                    <span>Token</span>
                    <span>Position</span>
                    <span>Status</span>
                    <span>Wait</span>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-white/5">

                    {queueRows.map((row) => (
                      <div
                        key={row.token}
                        className={`grid grid-cols-[1fr_1.5fr_1fr_1fr] items-center px-4 py-5 transition hover:bg-white/[0.03] ${
                          row.token === "A-24"
                            ? "bg-cyan-400/[0.04]"
                            : ""
                        }`}
                      >

                        <span
                          className={`font-semibold ${
                            row.token === "A-24"
                              ? "text-cyan-400"
                              : "text-white"
                          }`}
                        >
                          {row.token}
                        </span>

                        <span className="text-sm text-slate-400">
                          {row.name}
                        </span>

                        <span>

                          {row.status === "Serving" && (
                            <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-400">
                              Serving
                            </span>
                          )}

                          {row.status === "Ready" && (
                            <span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-xs text-amber-400">
                              Ready
                            </span>
                          )}

                          {row.status === "Waiting" && (
                            <span className="rounded-full bg-slate-800 px-3 py-1.5 text-xs text-slate-400">
                              Waiting
                            </span>
                          )}

                        </span>

                        <span className="text-sm text-slate-400">
                          {row.wait}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

              {/* Demo note */}
              <div className="mt-6 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-center text-xs text-slate-500">
                Demo dashboard — representative queue data for the product preview.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default DashboardPreview