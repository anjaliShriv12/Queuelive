import {
  Activity,
  ArrowDownRight,
  Clock3,
  Users,
} from "lucide-react"

function WaitTime() {
  return (
    <section className="bg-[#0b0b0b] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2">

        <div>

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af5f]" />

            <p className="text-xs uppercase tracking-[0.22em] text-[#d4af5f]">
              Smart wait-time view
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Don't just know
            <br />
            your position.
            <br />
            <span className="text-[#d4af5f]">
              Know your time.
            </span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-[#777]">
            QueueLive turns queue activity into a simple estimated wait,
            helping people decide how they want to spend their time.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="border border-white/10 bg-[#101010] p-6">
              <Clock3 size={20} className="text-[#d4af5f]" />

              <p className="mt-5 text-sm text-[#666]">
                Estimated wait
              </p>

              <p className="mt-1 text-3xl font-semibold text-white">
                12 min
              </p>
            </div>

            <div className="border border-white/10 bg-[#101010] p-6">
              <Users size={20} className="text-[#d4af5f]" />

              <p className="mt-5 text-sm text-[#666]">
                People ahead
              </p>

              <p className="mt-1 text-3xl font-semibold text-white">
                3
              </p>
            </div>

          </div>

        </div>

        {/* Visualization */}
        <div className="border border-white/10 bg-[#101010] p-6 sm:p-8">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs uppercase tracking-wider text-[#555]">
                Queue activity
              </p>

              <p className="mt-2 font-medium text-white">
                General Consultation
              </p>
            </div>

            <Activity
              size={20}
              className="text-[#d4af5f]"
            />

          </div>

          <div className="mt-12 flex h-52 items-end gap-2">

            <div className="h-[32%] flex-1 bg-[#242424]" />
            <div className="h-[48%] flex-1 bg-[#292929]" />
            <div className="h-[40%] flex-1 bg-[#242424]" />
            <div className="h-[62%] flex-1 bg-[#806b3d]" />
            <div className="h-[54%] flex-1 bg-[#9b8147]" />
            <div className="h-[78%] flex-1 bg-[#d4af5f]" />
            <div className="h-[61%] flex-1 bg-[#9b8147]" />
            <div className="h-[45%] flex-1 bg-[#806b3d]" />

          </div>

          <div className="mt-8 border border-[#d4af5f]/20 bg-[#d4af5f]/5 p-5">

            <div className="flex gap-4">

              <ArrowDownRight
                size={20}
                className="shrink-0 text-[#d4af5f]"
              />

              <div>
                <p className="font-medium text-white">
                  Queue is moving faster
                </p>

                <p className="mt-1 text-sm leading-6 text-[#777]">
                  Current activity suggests the estimated wait may decrease
                  as the queue progresses.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default WaitTime