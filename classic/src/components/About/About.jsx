import './About.css'
import Portfoliocard from "../PortfolioCard/Portfoliocard";
import card6 from "../../assets/card6.jpg";
import play from "../../assets/play.png";
const About = () => {
    return (
        <div className='about container'>
            <div className="about-left">
                <Portfoliocard point={card6} className='about-img' />
                {/* <img src={card6} alt="play" className='about-img' /> */}
                <img src={play} alt="play" className='about-play' />
            </div>
            <div className="about-right">
                <h3>About <span>Classic</span>green</h3>
                <p>We are dedicated to meeting your diverse needs by focusing on convenience, efficiency, and cost-effectiveness, as we strive to empower businesses of all sizes to optimize their fuel expenses and streamline fleet management processes. CLASSICGREEN is designed for individuals, business owners, fleet managers, and organizations across various sectors, including non-governmental organizations and government institutions. Whether you're a small business or a large fleet operator we are committed to providing you with the tools and resources you need to fuel success. We do not only enhance operational efficiency but also help cut costs and ensure secure fuel usage, turning challenges into opportunities.</p>
            </div>
        </div>
    )
}

export default About