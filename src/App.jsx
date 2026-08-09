import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Work from './sections/Work'
import Stats from './sections/Stats'
import Experience from './sections/Experience'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

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
        <Work />
        <Stats />
        <hr className="divider" />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
