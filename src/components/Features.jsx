import {
  Radio,
  Clock3,
  Bell,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: Radio,
    title: "Live queue updates",
    description:
      "See queue movement in real time instead of guessing how long you will wait.",
  },
  {
    icon: Clock3,
    title: "Wait-time estimates",
    description:
      "Get an estimated waiting time based on the current queue position.",
  },
  {
    icon: Bell,
    title: "Smart notifications",
    description:
      "Know when your turn is approaching without constantly checking the queue.",
  },
  {
    icon: LayoutDashboard,
    title: "Department dashboard",
    description:
      "Give staff a simple view to manage tokens, counters, and active queues.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled access",
    description:
      "Keep queue information organized by service, department, and staff access.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first experience",
    description:
      "Track your queue comfortably from a phone while you continue your day.",
  },
]

function Features() {
  return (
    <section className="bg-slate-900/40 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Built for better waiting
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need
            <br />
            <span className="text-slate-500">
              to manage the line.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A focused set of tools designed around one simple goal:
            making waiting less frustrating.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group bg-slate-950 p-7 transition hover:bg-slate-900"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-cyan-400 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                  <Icon size={20} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Features