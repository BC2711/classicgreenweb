import './Hero.css'
import arrow from '../../assets/right-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Classicgreen</h1>
            <p>A fuel card made for you!. The first universal fuel card on the Market accepted by most service stations nation-wide.</p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero