import Card from '../Card/Card'
import './Features.css'

const Features = () => {
    return (
        <div className='features'>
            <div className="features-text">
                <h1>Why CLASSICGREEN Fuel Card</h1>
                <p>Unlock unparalleled convenience and nationwide acceptance of seamless fuel purchases at most filling stations across the country, offering hassle-free journeys wherever you go.</p>
                <div className="features-grid">
                    <Card title='Comprehensive Expense Management' point='Say goodbye to manual tracking and paperwork by effortlessly managing and tracking all your fuel expenses in one centralized platform.' />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Features