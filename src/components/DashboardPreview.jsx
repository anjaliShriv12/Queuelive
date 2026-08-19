import {
  BarChart3,
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"

const rows = [
  ["General OPD", "A-24", "3", "12 min"],
  ["Cardiology", "B-15", "5", "18 min"],
  ["Pharmacy", "C-09", "12", "20 min"],
  ["Lab", "D-03", "2", "8 min"],
]

function DashboardPreview() {
  return (
    <section className="bg-[#070707] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">

        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#101010] lg:grid-cols-[0.55fr_1.45fr]">

          {/* Left content */}
          <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-12">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d4af5f]" />

              <p className="text-xs uppercase tracking-[0.2em] text-[#d4af5f]">
                For organizations
              </p>
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-white">
              Powerful dashboard
              <br />
              for departments.
            </h2>

            <p className="mt-5 leading-7 text-[#777]">
              Manage queues, serve tokens, and keep everything moving
              smoothly from one place.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-lg border border-[#d4af5f]/40 px-5 py-3 text-sm text-[#d4af5f] transition hover:bg-[#d4af5f] hover:text-black">
              Explore dashboard
            </button>

          </div>

          {/* Dashboard */}
          <div className="bg-[#0b0b0b] p-5 sm:p-7">

            {/* Dashboard header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4af5f] text-black">
                  <LayoutDashboard size={18} />
                </div>

                <div>
                  <p className="font-medium text-white">
                    QueueLive
                  </p>

                  <p className="text-[10px] text-[#555]">
                    Organization dashboard
                  </p>
                </div>

              </div>

              <Settings
                size={18}
                className="text-[#555]"
              />

            </div>

            {/* Stats */}
            <div className="mt-6 grid gap-3 sm:grid-cols-4">

              <div className="border border-white/10 bg-[#101010] p-4">
                <p className="text-[10px] text-[#555]">
                  Active queues
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  4
                </p>
              </div>

              <div className="border border-white/10 bg-[#101010] p-4">
                <p className="text-[10px] text-[#555]">
                  Total tokens
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  128
                </p>
              </div>

              <div className="border border-white/10 bg-[#101010] p-4">
                <p className="text-[10px] text-[#555]">
                  Avg. wait
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  14m
                </p>
              </div>

              <div className="border border-white/10 bg-[#101010] p-4">
                <p className="text-[10px] text-[#555]">
                  Served today
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  96
                </p>
              </div>

            </div>

            {/* Table */}
            <div className="mt-6 overflow-x-auto border border-white/10">

              <div className="min-w-[650px]">

                <div className="grid grid-cols-4 border-b border-white/10 px-5 py-3 text-[10px] uppercase tracking-wider text-[#555]">
                  <span>Department</span>
                  <span>Current token</span>
                  <span>Waiting</span>
                  <span>Est. wait</span>
                </div>

                {rows.map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-4 items-center border-b border-white/5 px-5 py-4 text-sm last:border-0 hover:bg-white/[0.02]"
                  >
                    <span className="text-white">
                      {row[0]}
                    </span>

                    <span className="text-[#d4af5f]">
                      {row[1]}
                    </span>

                    <span className="text-[#888]">
                      {row[2]}
                    </span>

                    <span className="flex items-center gap-2 text-[#888]">
                      {row[3]}
                      <CheckCircle2
                        size={14}
                        className="text-emerald-400"
                      />
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default DashboardPreview