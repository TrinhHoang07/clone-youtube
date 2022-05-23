import { useRef, memo } from "react";


function DisCoverVideo({ keyData, callback }) {
    const pRef = useRef();
    const iRef = useRef();

    const handleClose = () => {
        callback();
        iRef.current.src = '';
    }

    return (
        <div className="video-playing"
            onClick={handleClose}
            ref={pRef}
            style={{
                position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.8)'
                , zIndex: '10000', display: 'flex'
            }}
        >
            <div className="container"
                style={{ margin: 'auto' }}
            >
                <iframe
                    className="video-player"
                    ref={iRef}
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${keyData}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '8px' }}
                >
                </iframe>
            </div>
        </div>
    )
}
export default memo(DisCoverVideo);