import { useState } from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Faq from "./components/Faq/Faq"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Video from "./components/Video/Video"

const App = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className="container"> */}
      <Features />
      <Portfolio />
      <Faq />
      <About setVideoPlay={setVideoPlay} />
      <Contact />
      <Video videoPlay={videoPlay} setVideoPlay={setVideoPlay} />
      <Footer />
      {/* </div> */}

    </div>
  )
}

export default App