import {
  Bell,
  Clock3,
  LayoutDashboard,
  Radio,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: Radio,
    title: "Live queue updates",
    text: "See queue movement in real time instead of guessing.",
  },
  {
    icon: Clock3,
    title: "Wait-time estimates",
    text: "Understand approximately how long your wait may be.",
  },
  {
    icon: Bell,
    title: "Smart notifications",
    text: "Know when your turn is approaching without constant checking.",
  },
  {
    icon: LayoutDashboard,
    title: "Department dashboard",
    text: "Give staff a simple way to manage active queues.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled access",
    text: "Keep queue information organized by department and service.",
  },
  {
    icon: Smartphone,
    title: "Mobile experience",
    text: "Track your queue comfortably from wherever you are.",
  },
]

function Features() {
  return (
    <section className="bg-[#070707] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">

        <div className="max-w-2xl">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af5f]" />

            <p className="text-xs uppercase tracking-[0.22em] text-[#d4af5f]">
              Built for better waiting
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Everything you need.
            <br />
            <span className="text-[#777]">
              Nothing unnecessary.
            </span>
          </h2>

        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group border-b border-white/10 bg-[#101010] p-8 transition hover:bg-[#151515] lg:p-10"
              >

                <Icon
                  size={22}
                  className="text-[#d4af5f]"
                />

                <h3 className="mt-8 text-lg font-medium text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-[#777]">
                  {feature.text}
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