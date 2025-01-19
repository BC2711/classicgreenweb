import FaqAccordion from '../FaqAccordion/FaqAccordion';
import './Faq.css';

const faqData = [
  {
    question: "Where can I obtain a ClassicGreen Card?",
    answer: "A ClassicGreenCard can be obtained after simply completing an online form and selecting your pick up point from."
  },
  {
    question: "How do I credit my card in order to transact at a filling Station Classic Fuel Card?",
    answer: "You can credit your card at any filling station marked “ClassicGreen Card Accepted here” and by use of your mobile app. Mobile App is available on Apple Store | Google Play. search ClassicGreenCard."
  },
  {
    question: "Where Can I use my ClassicGreen Card?",
    answer: "ClassicGreen Card can be used at any Filling Station marked “ClassicGreen Card Accepted here”."
  },
  {
    question: "What fees are involved with the ClassicGreen Card?",
    answer: "There are no fees required or paid when using the ClassicGreen Card."
  }
];

const Faq = () => {
  return (
    <section className="faq container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <FaqAccordion faqItems={faqData} />
    </section>
  );
};

export default Faq;
