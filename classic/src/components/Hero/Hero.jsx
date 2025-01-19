import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import hero1 from '../../assets/hero.jpg';
import hero2 from '../../assets/viewgasstation.jpg';
import hero3 from '../../assets/slide-3.jpg';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false); // To detect hover for pausing autoplay
  const slideIntervalRef = useRef(null); // To hold interval ID for cleanup
  const slides = [
    {
      title: "CLASSICGREEN",
      description: "A fuel card made for you! The first universal fuel card on the Market accepted by most service stations nation-wide.",
      background: `${hero1}`,
    },
    {
      title: "All-in-one solution for managing your fuel expenses",
      description: "Convenient solution for managing your fuel expenses seamlessly. Whether you're a fleet manager, business owner, or individual driver, our ClassicGreen Card Fuel Management System is here to revolutionize the way you manage fuel costs.",
      background: `${hero2}`,
    },
    {
      title: "Fuel Card and Expense Management Platform",
      description: "With the ClassicGreen Fuel Card, you gain access to a vast network of fuel stations across Zambia ensuring convenience and flexibility for you Say goodbye to the hassle of managing multiple fuel receipts and invoices.",
      background: `${hero3}`,
    },
    {
      title: "Revolutionize Fuel Management",
      description: "Manage your fuel expenses with our all-in-one solution, made simple for every type of user—individuals, fleets, businesses.",
      background: `${hero3}`,
    }
  ];

  // Start and stop autoplay functionality based on user hover state
  useEffect(() => {
    if (!isHovering) {
      slideIntervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // Change every 5 seconds
    } else {
      clearInterval(slideIntervalRef.current);
    }

    return () => clearInterval(slideIntervalRef.current); // Cleanup interval
  }, [isHovering, slides.length]);

  // Navigate to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="hero-section" id="hero">
      <div
        className="hero-carousel"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === activeIndex ? "active" : ""}`}
            key={index}
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className="overlay"></div>
            <div className="content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="nav-button prev-button"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#9664;
      </button>
      <button
        className="nav-button next-button"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#9654;
      </button>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
