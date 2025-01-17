import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, point }) => {
    return (
        <div className="card">
            <div className="info">
                <h3>{title}</h3>
            </div>
            <div className="message">
                <p>{point}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
