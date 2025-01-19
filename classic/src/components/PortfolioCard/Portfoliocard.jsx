import PropTypes from 'prop-types';
import './Portfoliocard.css';

const Portfoliocard = ({ point }) => {
    return (
        <article className="card">
            <div className="message">
                <img src={point} alt="" />
            </div>
        </article>
    );
};

Portfoliocard.propTypes = {
    title: PropTypes.string.isRequired,
    point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Portfoliocard.defaultProps = {
    point: 'Default Point',
};

export default Portfoliocard;
