import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Faq from "./components/Faq/Faq"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Faq />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App