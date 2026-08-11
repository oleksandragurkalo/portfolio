import { useEffect } from 'react'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './sections/Hero/Hero.jsx'
import About from './sections/About/About.jsx'
import Work from './sections/Work/Work.jsx'
import Experience from './sections/Experience/Experience.jsx'
import Skills from './sections/Skills/Skills.jsx'
import Workflow from './sections/Workflow/Workflow.jsx'
import Contact from './sections/Contact/Contact.jsx'

function App() {
  // Direct/deep links (e.g. shared as yoursite.com/#work) load before React
  // has rendered the sections, so the browser's native hash-jump misses. Retry once mounted.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <hr className="divider" />
        <Experience />
        <Skills />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
