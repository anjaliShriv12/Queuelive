import {
  Activity,
  Bell,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react"
import { useState } from "react"

function QueuePreview() {
  const [joined, setJoined] = useState(false)

  const queueData = joined
    ? {
        token: "A-25",
        position: "#5",
        peopleAhead: 4,
        waitTime: "15 min",
        progress: 64,
      }
    : {
        token: "A-24",
        position: "#4",
        peopleAhead: 3,
        waitTime: "12 min",
        progress: 72,
      }

  const handleQueueAction = () => {
    setJoined((prev) => !prev)
  }

  return (
    <section className="bg-[#070707] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">

        {/* Heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af5f]" />

            <p className="text-xs uppercase tracking-[0.22em] text-[#d4af5f]">
              Live queue preview
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Know where you are.
            <br />

            <span className="text-[#d4af5f]">
              Know when to arrive.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-[#858585]">
            A simple view of your token, queue position and estimated
            waiting time.
          </p>
        </div>

        {/* Product */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Main queue */}
          <div className="rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-8 lg:p-10">

            {/* Header */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                  General Consultation
                </p>

                <h3 className="mt-2 text-xl font-medium text-white">
                  CityCare Hospital
                </h3>
              </div>

              <div className="flex w-fit items-center gap-2 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                Queue live
              </div>

            </div>

            {/* Token + Position */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {/* Token */}
              <div className="rounded-xl border border-white/10 bg-[#0b0b0b] p-7">

                <p className="text-sm text-[#666]">
                  Your token
                </p>

                <div className="mt-3 flex items-end justify-between">

                  <p className="text-6xl font-semibold tracking-tight text-white">
                    {queueData.token}
                  </p>

                  <span
                    className={`px-3 py-1 text-xs ${
                      joined
                        ? "border border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                        : "border border-[#d4af5f]/20 bg-[#d4af5f]/5 text-[#d4af5f]"
                    }`}
                  >
                    {joined ? "Confirmed" : "Waiting"}
                  </span>

                </div>

              </div>

              {/* Position */}
              <div className="rounded-xl border border-white/10 bg-[#0b0b0b] p-7">

                <p className="text-sm text-[#666]">
                  Current position
                </p>

                <p className="mt-3 text-4xl font-semibold text-white">
                  {queueData.position}
                </p>

                <p className="mt-1 text-sm text-[#666]">
                  {queueData.peopleAhead} people ahead of you
                </p>

              </div>

            </div>

            {/* Progress */}
            <div className="mt-6 rounded-xl border border-white/10 bg-[#0b0b0b] p-6">

              <div className="flex justify-between text-xs">

                <span className="text-[#666]">
                  Queue progress
                </span>

                <span className="text-[#d4af5f]">
                  {queueData.progress}%
                </span>

              </div>

              <div className="mt-4 h-1.5 rounded-full bg-[#292929]">

                <div
                  className="h-full rounded-full bg-[#d4af5f] transition-all duration-500"
                  style={{
                    width: `${queueData.progress}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* Right information */}
          <div className="flex flex-col gap-6">

            {/* Wait time */}
            <div className="rounded-2xl border border-white/10 bg-[#101010] p-7">

              <Clock3
                size={20}
                className="text-[#d4af5f]"
              />

              <p className="mt-6 text-sm text-[#666]">
                Estimated wait
              </p>

              <p className="mt-1 text-4xl font-semibold text-white">
                {queueData.waitTime}
              </p>

            </div>

            {/* People */}
            <div className="rounded-2xl border border-white/10 bg-[#101010] p-7">

              <Users
                size={20}
                className="text-[#d4af5f]"
              />

              <p className="mt-6 text-sm text-[#666]">
                People ahead
              </p>

              <p className="mt-1 text-4xl font-semibold text-white">
                {queueData.peopleAhead}
              </p>

            </div>

            {/* Notification */}
            <div
              className={`rounded-2xl border p-7 ${
                joined
                  ? "border-emerald-400/20 bg-emerald-400/5"
                  : "border-[#d4af5f]/20 bg-[#d4af5f]/5"
              }`}
            >

              {joined ? (
                <CheckCircle2
                  size={20}
                  className="text-emerald-400"
                />
              ) : (
                <Bell
                  size={20}
                  className="text-[#d4af5f]"
                />
              )}

              <p className="mt-5 font-medium text-white">
                {joined
                  ? "You're successfully in the queue"
                  : "Notifications enabled"}
              </p>

              <p className="mt-2 text-sm leading-6 text-[#777]">
                {joined
                  ? `Your token is ${queueData.token}. We'll notify you when your turn is getting close.`
                  : "You'll receive an alert when your turn is getting close."}
              </p>

            </div>

            {/* Button */}
            <button
              onClick={handleQueueAction}
              className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-medium transition ${
                joined
                  ? "border border-white/10 bg-[#151515] text-white hover:bg-[#1b1b1b]"
                  : "bg-[#d4af5f] text-black hover:bg-[#e5c878]"
              }`}
            >

              {joined ? (
                <>
                  <CheckCircle2 size={18} />
                  You're in the queue
                </>
              ) : (
                <>
                  <Activity size={18} />
                  Join this queue
                </>
              )}

            </button>

            <p className="text-center text-[11px] text-[#555]">
              Representative demo data — no real appointment is created.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default QueuePreview