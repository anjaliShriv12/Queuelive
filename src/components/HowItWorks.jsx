import {
  QrCode,
  Smartphone,
  BellRing,
  ArrowRight,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: QrCode,
    title: "Join a queue",
    description:
      "Scan a QR code or choose a service and get your virtual token in seconds.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Track your place",
    description:
      "Leave the waiting area and keep an eye on your position directly from your phone.",
  },
  {
    number: "03",
    icon: BellRing,
    title: "Get notified",
    description:
      "Receive an alert when your turn is getting close so you can arrive at the right time.",
  },
]

function HowItWorks() {
  return (
    <section className="bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Waiting becomes
            <br />
            <span className="text-slate-500">a thing of the past.</span>
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
            QueueLive turns a physical waiting line into a simple digital
            experience.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900"
              >

                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Icon size={21} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {step.description}
                </p>

                {/* Bottom arrow */}
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-500 transition group-hover:text-cyan-400">
                  Learn more
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default HowItWorks