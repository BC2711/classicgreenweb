import { useState } from 'react';
import './Contact.css';
import email from '../../assets/email.png';
import phonecall from '../../assets/phone-call.png';
import placeholder from '../../assets/placeholder.png';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "d9aa68fb-7a3c-4bd0-8c91-b441864d87dd");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Submitted Successfully!");
                event.target.reset();
            } else {
                setResult(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setResult("An error occurred. Please try again later.");
        }
    };

    return (
      <div className="contact-section">
          <h1 className="contact__title">Contact Us</h1>
        <div className="contact">           
            <div className="contact-us">
                <h3>Send us a message <img src={email} alt="Email" /></h3>
                <p>
                    Please feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to the community.
                </p>
                <ul>
                    <li><img src={email} alt="Email" /> info@classicgreencard.com</li>
                    <li><img src={phonecall} alt="Phone Call" /> +260 776453728 | +260 777218623 | +260 777218626</li>
                    <li><img src={placeholder} alt="Address" /> Villa 15, Oasis Park, Plot No 2051/M, Main Street, Ibex Hill, Lusaka, Zambia</li>
                </ul>
            </div>
            <div className="contact-form">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        required
                    />
                    <label htmlFor="number">Phone Number</label>
                    <input
                        type="tel"
                        name="number"
                        id="number"
                        placeholder="Enter your mobile number"
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit
                    </button>
                </form>
                <span className="submission-result">{result}</span>
            </div>
        </div>
      </div>
    );
};

export default Contact;
