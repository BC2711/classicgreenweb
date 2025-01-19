import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, point }) => {
    return (
        <article className="card" aria-label={`Card: ${title}`}>
            <div className="info">
                <h3>{title}</h3>
            </div>
            <div className="message">
                <p>{point}</p>
            </div>
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Card.defaultProps = {
    title: 'Default Title',
    point: 'Default Point',
};

export default Card;
