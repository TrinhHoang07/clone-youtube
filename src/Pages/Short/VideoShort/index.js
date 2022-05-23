import { useContext, useEffect, useRef, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
// import video from '../../../videotiktok/rose1.mp4';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import './VideoShort.scss';
import useElementOnScreen from '../getElementPresent';
import { bgThemeContext } from '../../../App';

function VideoShort({ data, des, iname, avatar, video }) {
    const theme = useContext(bgThemeContext);
    const { color, shortColor, actionColor } = theme;
    const { handleScrollingDown, handleScrollingUp } = data;

    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }
    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true)
            }
        }
        else {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false)
            }
        }
    }, [isVisibile])

    const handleTogglePlay = () => {
        if (videoRef.current.paused) {
            setIsPlaying(true);
            videoRef.current.play();
        } else {
            setIsPlaying(false);
            videoRef.current.pause();
        }
    }

    const muted = () => {
        console.log('muted');
        setIsMuted(false);
        videoRef.current.muted = true;
    }

    const unmuted = () => {
        console.log('unmuted');
        setIsMuted(true);
        videoRef.current.muted = false;
    }

    const play = () => {
        setIsPlaying(true);
        videoRef.current.play();
    }

    const pause = () => {
        setIsPlaying(false);
        videoRef.current.pause();
    }

    const handleEnded = () => {
        setIsPlaying(false);
    }

    useEffect(() => {
        videoRef.current.addEventListener('ended', handleEnded);
    }, [])

    useEffect(() => {
        videoRef.current.addEventListener('click', handleTogglePlay)
    }, [])

    return (
        <div className="video-short">
            <div className="container">
                <div className="content-short">
                    <div className="video-playing">
                        <video ref={videoRef} className="rose-play" src={video} />
                        <div className="controls">
                            <div className="play-pause">
                                {isPlaying ? (<PauseIcon onClick={pause} sx={{ fontSize: 26, cursor: 'pointer' }} />) :
                                    (<PlayArrowIcon onClick={play} sx={{ fontSize: 26, cursor: 'pointer' }} />)}
                            </div>
                            <div className="muted-unmuted">
                                {isMuted ? (<VolumeUpIcon onClick={muted} sx={{ fontSize: 26, cursor: 'pointer' }} />) :
                                    (<VolumeOffIcon onClick={unmuted} sx={{ fontSize: 26, cursor: 'pointer' }} />)}
                            </div>
                        </div>
                        <div className="info">
                            <p className="title">{des} ❤❤❤</p>
                            <div className="content-info">
                                <div className="user-video">
                                    <img src={avatar} alt="" className="user-avatar" />
                                    <span className="text-info">{iname}</span>
                                </div>
                                <button className="submit">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                    <div className="video-actions">
                        <div className="menu">
                            <IconButton sx={{ ":hover": { backgroundColor: 'transparent' } }}>
                                <MoreVertIcon className="color-mobile" sx={{ color: actionColor }} />
                            </IconButton>
                        </div>
                        <div className="des">
                            <IconButton sx={{ mt: 1, flexDirection: 'column', width: '64px', height: '64px', ":hover": { backgroundColor: 'transparent' } }}>
                                <ThumbUpIcon className="color-mobile" sx={{ fontSize: 28, color: actionColor }} />
                                <Typography className="text-mobile" sx={{ color: actionColor }}>
                                    5 Tr
                                </Typography>
                            </IconButton>
                            <IconButton sx={{ mt: 1, flexDirection: 'column', width: '64px', height: '64px', ":hover": { backgroundColor: 'transparent' } }}>
                                <ThumbDownAltIcon className="color-mobile" sx={{ fontSize: 28, color: actionColor }} />
                                <Typography className="text-mobile" sx={{ color: actionColor }}>
                                    500
                                </Typography>
                            </IconButton>
                            <IconButton sx={{ mt: 1, flexDirection: 'column', width: '64px', height: '64px', ":hover": { backgroundColor: 'transparent' } }}>
                                <InsertCommentIcon className="color-mobile" sx={{ fontSize: 28, color: actionColor }} />
                                <Typography className="text-mobile" sx={{ color: actionColor }}>
                                    300
                                </Typography>
                            </IconButton>
                            <IconButton sx={{ mt: 1, flexDirection: 'column', width: '64px', height: '64px', ":hover": { backgroundColor: 'transparent' } }}>
                                <ReplySharpIcon className="color-mobile" sx={{ fontSize: 28, color: actionColor }} />
                                <Typography className="text-mobile" sx={{ color: actionColor }}>
                                    100
                                </Typography>
                            </IconButton>
                        </div>
                    </div>
                    <div className="up-down">
                        <div className="up">
                            <IconButton onClick={handleScrollingUp} sx={{ width: '64px', height: '64px', backgroundColor: shortColor, ":hover": { backgroundColor: shortColor } }}>
                                <ArrowUpwardIcon sx={{ fontSize: 28, color: color }} />
                            </IconButton>
                        </div>
                        <div className="up">
                            <IconButton onClick={handleScrollingDown} sx={{ width: '64px', height: '64px', backgroundColor: shortColor, ":hover": { backgroundColor: shortColor } }}>
                                <ArrowDownwardIcon sx={{ fontSize: 28, color: color }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoShort;