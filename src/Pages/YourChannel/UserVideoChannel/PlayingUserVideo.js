import { useEffect, useRef } from 'react';

function PlayingUserVideo({ callback, data }) {

    const videoRef = useRef();
    const handleTogglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className="playing-user-video" onClick={callback}>
            <div className="content-user-video-play" onClick={e => e.stopPropagation()}>
                <video onClick={handleTogglePlay} ref={videoRef} width="100%" height="100%" src={data} />
            </div>
        </div>
    );
}

export default PlayingUserVideo;