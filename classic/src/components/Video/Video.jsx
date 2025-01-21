import './Video.css';
import video from '../../assets/sia.mp4';
import PropTypes from 'prop-types';

const Video = ({ videoPlay, setVideoPlay }) => {
    const closePlayer = (e) => {
        if (e.target === e.currentTarget) {
            setVideoPlay(false);
            const videoElement = e.currentTarget.querySelector('video');
            if (videoElement) {
                videoElement.pause();
            }
        }
    };

    return (
        <>
            {videoPlay && (
                <div className="video" onClick={closePlayer}>
                    <video src={video} autoPlay muted controls></video>
                </div>
            )}
        </>
    );
};

// Define the prop types
Video.propTypes = {
    videoPlay: PropTypes.bool.isRequired,
    setVideoPlay: PropTypes.func.isRequired,
};

export default Video;
