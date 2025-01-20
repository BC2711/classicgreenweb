import './Video.css'
import video from '../../assets/sia.mp4';
const Video = ({ videoPlay, setVideoPlay }) => {
    return (
        <div className={`video ${videoPlay ? '' : 'hide'}`}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default Video
