import { Button, ClickAwayListener, Grid, IconButton, Typography } from "@mui/material";
import video from '../../../videotiktok/myvideo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SortIcon from '@mui/icons-material/Sort';
import './UserVideo.scss';
import { useState, useContext } from "react";
import { bgThemeContext } from '../../../App';
import { useSelector } from "react-redux";
import PlayingUserVideo from './PlayingUserVideo';

function UserVideo() {

    const theme = useContext(bgThemeContext);
    const { bgColor, color, searchVideoUser, handleDeleteVideo } = theme;
    const [open, setOpen] = useState(null);
    const [openOpt, setOpenOpt] = useState(false);

    const videoUser = useSelector(state => state.videoUser.filter(item => item.nameVideoTitle.includes(searchVideoUser)));
    const [watch, setWatch] = useState(false);
    const [dataVideo, setDataVideo] = useState('');

    console.log(videoUser);

    const handleOpenOpt = () => {
        setOpenOpt(true);
    }

    const handleCloseOpt = () => {
        setOpenOpt(false);
    }

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
    const handleCloseWatch = () => {
        setWatch(false);
    }


    return (
        <div className="user-video-play" style={{ backgroundColor: bgColor, height: '100%' }}>
            <header style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography component="h3" sx={{ color: color }}>
                    Video tải lên
                </Typography>
                <div style={{ position: 'relative' }}>
                    <Button onClick={handleOpenOpt} sx={{ color: color }} startIcon={<SortIcon sx={{ color: color }} />}>Sắp xếp theo</Button>
                    {openOpt && (<ClickAwayListener onClickAway={handleCloseOpt}>
                        <div className="children-option" style={{ backgroundColor: '#ffffff', position: 'absolute', right: 0, top: '100%', width: '250px' }}>
                            <div className="content-option" style={{ padding: '8px 0' }}>
                                <Typography sx={{ ":hover": { backgroundColor: '#e8e8e8' }, color: '#333', display: 'flex', padding: '8px 0', alignItems: 'center', pl: '14px' }} component="p">
                                    Phổ biến nhất
                                </Typography>
                                <Typography sx={{ ":hover": { backgroundColor: '#e8e8e8' }, color: '#333', display: 'flex', padding: '8px 0', alignItems: 'center', pl: '14px' }} component="p">
                                    Ngày thêm mới nhất
                                </Typography>
                                <Typography sx={{ ":hover": { backgroundColor: '#e8e8e8' }, color: '#333', display: 'flex', padding: '8px 0', alignItems: 'center', pl: '14px' }} component="p">
                                    Ngày thêm cũ nhất
                                </Typography>
                            </div>
                        </div>
                    </ClickAwayListener>)}
                </div>
            </header>
            {watch && <PlayingUserVideo callback={handleCloseWatch} data={dataVideo} />}
            <Grid container spacing={1}>
                {videoUser.map((item, index) => (
                    <Grid item xs={6} md={2.4} sm={4} key={index}>
                        <div style={{ height: '118px' }} className="img-user-video" onClick={() => handleOpenWatch(item.hideVideo)}>
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

export default UserVideo;