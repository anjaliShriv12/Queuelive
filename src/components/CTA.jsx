import { ArrowRight, Clock3 } from "lucide-react"

function CTA() {
  return (
    <section className="bg-[#0b0b0b] px-6 py-10 lg:px-12">
      <div className="mx-auto max-w-[1500px]">

        <div className="flex flex-col gap-6 border border-white/10 bg-[#101010] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">

          <div className="flex items-center gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d4af5f]/30 bg-[#d4af5f]/5 text-[#d4af5f]">
              <Clock3 size={21} />
            </div>

            <div>

              <h2 className="text-2xl font-semibold text-white">
                Stop waiting. Start living.
              </h2>

              <p className="mt-1 text-sm text-[#777]">
                Join a queue and spend your time where it matters.
              </p>

            </div>

          </div>

          <a
            href="#queue-preview"
            className="group flex w-fit items-center gap-3 rounded-lg bg-[#d4af5f] px-6 py-3.5 font-medium text-black transition hover:bg-[#e5c878]"
          >
            Join a Queue Now

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  )
}

export default CTA