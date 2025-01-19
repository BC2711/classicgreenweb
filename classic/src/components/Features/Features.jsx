import Card from '../Card/Card';
import './Features.css';

const featuresList = [
    { title: 'Comprehensive Expense Management', point: 'Say goodbye to manual tracking and paperwork by effortlessly managing and tracking all your fuel expenses in one centralized platform.' },
    { title: 'Real-Time Insights', point: 'Gain valuable insights into your fuel spending patterns and behaviors, empowering you to make informed decisions and optimize your fuel usage.' },
    { title: 'Enhanced Security', point: 'Rest easy knowing that your transactions are secure, with our advanced security features and fraud protection measures.' },
    { title: 'Streamlined Efficiency', point: 'Save time and streamline your fuel management process with our intuitive platform, allowing you to focus on what matters most – growing your business.' },
    { title: 'Acceptance and Network', point: 'ClassicGreen is accepted at most filling stations nationwide, ensuring convenience and flexibility for you.' },
    { title: 'Cashless Payments', point: 'Embrace the convenience of cashless payments and streamline your transactions at the pump or service station shop.' },
    { title: 'Eco-Friendly', point: 'Support our environment by recycling your used fuel and contributing to our commitment to reducing our carbon footprint.' },
    { title: 'Customer Support', point: 'Our dedicated customer support team is here to assist you with any questions or concerns you may have, ensuring a seamless experience from start to finish.' },
    { title: 'Flexibility', point: 'Enjoy the flexibility to choose between monthly or annual subscription plans, tailored to your business needs and budget.' },
    { title: 'Unlimited Fuel Purchases', point: 'Enjoy unlimited fuel purchases without any limits or restrictions, allowing you to fuel your business with ease.' },
    { title: 'Transparent Pricing', point: 'Get a transparent pricing structure that ensures you\'re always paying the best price for your fuel, no matter how many times you fill up.' },
];

const Features = () => {
    return (
        <section className="features container" id='features' role="region" aria-labelledby="features-heading">
            <div className="features-text">
                <h1 id="features-heading">Why CLASSICGREEN Fuel Card</h1>
                <p>Unlock unparalleled convenience and nationwide acceptance of seamless fuel purchases at most filling stations across the country, offering hassle-free journeys wherever you go.</p>
                <div className="features-grid">
                    {featuresList.map((feature, index) => (
                        <Card key={index} title={feature.title} point={feature.point} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
