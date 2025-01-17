import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Faq from "./components/Faq/Faq"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Portifolio from "./components/Portfolio/Portifolio"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Portifolio />
      <Faq />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App