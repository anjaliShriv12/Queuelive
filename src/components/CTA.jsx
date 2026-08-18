import { ArrowRight, Clock3 } from "lucide-react"

function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900 px-6 py-16 text-center sm:px-10 lg:px-16">

        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
          <Clock3 size={26} />
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Your time is worth more
          <br />
          <span className="text-cyan-400">
            than standing in line.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          QueueLive gives people a simple way to join, track, and manage
          virtual queues without spending their day waiting.
        </p>

        {/* CTA */}
        <a
          href="#queue-preview"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Explore the queue

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        <p className="mt-5 text-xs text-slate-600">
          Product concept demo — no real appointment is created.
        </p>

      </div>
    </section>
  )
}

export default CTA