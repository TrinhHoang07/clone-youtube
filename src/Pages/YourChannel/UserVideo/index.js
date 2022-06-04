import { ClickAwayListener, Grid, IconButton, Typography } from "@mui/material";
import video from '../../../videotiktok/myvideo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import './UserVideo.scss';
import { useState, useContext, useCallback, memo } from "react";
import { bgThemeContext } from '../../../App';
import { useSelector } from "react-redux";
import PlayingUserVideo from './PlayingUserVideo';

function UserVideo() {

    const theme = useContext(bgThemeContext);
    const { bgColor, color, searchVideoUser, handleDeleteVideo } = theme;
    const [open, setOpen] = useState(null);

    const videoUser = useSelector(state => state.videoUser.filter(item => item.nameVideoTitle.includes(searchVideoUser)));
    const [watch, setWatch] = useState(false);
    const [dataVideo, setDataVideo] = useState('');


    const handleOpen = (item) => {
        setOpen(item);
    }
    const handleClose = () => {
        setOpen(null);
    }
    const handleOpenWatch = (videoUser) => {
        setDataVideo(videoUser);
        setWatch(true);
    }
    const handleCloseWatch = useCallback(() => {
        setWatch(false);
    })


    return (
        <div className="user-video-play" style={{ backgroundColor: bgColor }}>
            {watch && <PlayingUserVideo callback={handleCloseWatch} data={dataVideo} />}
            <Grid container spacing={1}>
                {videoUser.map((item, index) => (
                    <Grid item xs={6} md={2.4} sm={4} key={index}>
                        <div className="img-user-video" onClick={() => handleOpenWatch(item.hideVideo)}>
                            <img width="100%" height="100%" src={video} alt="Rose" className="img-founder" />
                        </div>
                        <div className="info" style={{ color: color }}>
                            <div className="wrapper-video-user">
                                <div className="heading-name">{item.nameVideoTitle}</div>
                                <p className="view-video">0 lượt xem</p>
                            </div>
                            <div className="option">
                                <IconButton
                                    sx={{ color: color }}
                                    className="icon-option"
                                    onClick={() => handleOpen(item)}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                {open === item && (<ClickAwayListener onClickAway={handleClose}>
                                    <div className="children-option" style={{ backgroundColor: '#ffffff' }}>
                                        <div className="content-option" style={{ padding: '8px 0' }}>
                                            <Typography onClick={() => handleDeleteVideo(index)} sx={{ cursor: 'pointer', ":hover": { backgroundColor: '#e8e8e8' }, color: '#333', display: 'flex', padding: '8px 0', alignItems: 'center' }} component="p">
                                                <DeleteIcon sx={{ ml: 1, mr: 1 }} /> Xóa
                                            </Typography>
                                            <Typography sx={{ ":hover": { backgroundColor: '#e8e8e8' }, color: '#333', display: 'flex', padding: '8px 0', alignItems: 'center' }} component="p">
                                                <FeedbackOutlinedIcon sx={{ ml: 1, mr: 1 }} /> Báo cáo
                                            </Typography>
                                        </div>
                                    </div>
                                </ClickAwayListener>)}
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default memo(UserVideo);