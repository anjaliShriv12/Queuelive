import {
  ArrowRight,
  Bell,
  Smartphone,
  Ticket,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Ticket,
    title: "Join a queue",
    text: "Choose a service and get your virtual token in seconds.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Track your position",
    text: "Leave the waiting area and follow your queue from your phone.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Get notified",
    text: "Receive an alert when your turn is getting close.",
  },
]

function HowItWorks() {
  return (
    <section className="bg-[#0b0b0b] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">

        <div className="flex items-end justify-between gap-8">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d4af5f]" />

              <p className="text-xs uppercase tracking-[0.22em] text-[#d4af5f]">
                How QueueLive works
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Three steps.
              <br />
              <span className="text-[#777]">
                Less waiting.
              </span>
            </h2>
          </div>

        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className={`group bg-[#101010] p-8 transition hover:bg-[#151515] lg:p-10 ${
                  index !== 2 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-[#555]">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-[#d4af5f] transition group-hover:border-[#d4af5f]/40">
                    <Icon size={21} />
                  </div>

                </div>

                <h3 className="mt-12 text-xl font-medium text-white">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm leading-7 text-[#777]">
                  {step.text}
                </p>

                <ArrowRight
                  size={18}
                  className="mt-10 text-[#555] transition group-hover:translate-x-1 group-hover:text-[#d4af5f]"
                />

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default HowItWorks