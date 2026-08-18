import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import QueuePreview from "./components/QueuePreview"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import WaitTime from "./components/WaitTime"
import DashboardPreview from "./components/DashboardPreview"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <section id="queue-preview">
        <QueuePreview />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="features">
        <Features />
      </section>

      <WaitTime />

      <section id="dashboard">
        <DashboardPreview />
      </section>

      <CTA />

      <Footer />

    </div>
  )
}

export default App