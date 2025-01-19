import { useState } from "react";
import PropTypes from "prop-types";
import "./FaqAccordion.css";

const FaqAccordion = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the accordion section
  const toggleAccordion = (index) => {
    // Toggle the active state of the clicked index
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion container" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${activeIndex === index ? "open" : ""}`}
              type="button"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
          </h2>
          <div
            className={`accordion-collapse ${activeIndex === index ? "show" : ""}`}
            id={`collapse-${index}`}
          >
            <div className="accordion-body ">
                <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FaqAccordion.propTypes = {
  faqItems: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

FaqAccordion.defaultProps = {
  faqItems: [
    {
      question: "Default Question",
      answer: "This is a default answer provided for the FAQ accordion.",
    },
  ],
};

export default FaqAccordion;
