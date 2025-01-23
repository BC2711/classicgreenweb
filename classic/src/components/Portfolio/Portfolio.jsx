import { useState } from "react";
import "./Portfolio.css";

import classic from "../../assets/classic.jpg";
import harvest from "../../assets/harvest.jpg";
import pumacard from "../../assets/pumacard.jpg";
import pumaimg from "../../assets/pumaimg.jpg";

import engen from "../../assets/engen.jpg";
import meru from "../../assets/meru.jpg";
import puma from "../../assets/puma.jpg";
import Portfoliocard from "../PortfolioCard/Portfoliocard"; // Import the Portfoliocard component

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");

  // Slide data
  const slides = [
    {
      category: "classicgreen",
      altText: "ClassicGreen Card",
      img: [classic, harvest, pumacard, pumaimg],
    },
    // {
    //   category: "fuelManagement",
    //   altText: "Fuel Management Solution",
    //   img: [], // No images in this category
    // },
    {
      category: "expenseManagement",
      altText: "Fuel card and expense management",
      img: [engen, meru, puma],
    },
  ];

  // Filter slides based on the selected category
  const filteredSlides =
    currentCategory === "all"
      ? slides
      : slides.filter((slide) => slide.category === currentCategory);

  return (
    <section className="portfolio container" id="portfolio">
      {/* Portfolio Title */}
      <h1 className="portfolio__title">Portfolio</h1>
      {/* Category Buttons */}
      <div className="portfolio__categories">
        <button className="portfolio__btn" onClick={() => setCurrentCategory("classicgreen")}> Classicgreen Cards </button>
        {/* <button className="portfolio__btn" onClick={() => setCurrentCategory("fuelManagement")} >Fuel Station </button> */}
        <button className="portfolio__btn" onClick={() => setCurrentCategory("expenseManagement")} >Companies</button>
        {/* <button className="portfolio__btn" onClick={() => setCurrentCategory("all")}> All </button> */}
      </div>

      {/* Portfolio Cards */}
      <div className="portfolio__slides">
        {filteredSlides.map((slide, index) => (
          <div
            className={`portfolio__slide ${index === activeIndex ? "active" : "" }`}
            key={slide.category}
          >
            <div className="portfolio__grid">
              {slide.img.length > 0 ? (
                slide.img.map((img, imgIndex) => (
                  <Portfoliocard key={imgIndex} point={img} />
                ))
              ) : (
              ''
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      {/* <div className="portfolio__indicators">
        {filteredSlides.map((_, index) => (
          <button
            key={index}
            className={`portfolio__indicator ${index === activeIndex ? "active" : ""
              }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default Portfolio;
