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
