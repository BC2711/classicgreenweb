import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Video from "./components/Video/Video";
import Signup from "./components/Signup/Signup";

const App = () => {
  const [videoPlay, setVideoPlay] = useState(false);

  return (
    <div>
      <Navbar />

      {/* Define different layouts for specific routes */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Portfolio />
              <Faq />
              <About setVideoPlay={setVideoPlay} />
              <Contact />
              <Video videoPlay={videoPlay} setVideoPlay={setVideoPlay} />
            </>
          }
        />

        {/* Signup Page */}
       
          <Route path="/signup" element={<Signup />} />
       
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
