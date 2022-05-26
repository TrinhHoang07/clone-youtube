import { ClickAwayListener, Grid, IconButton, Menu, MenuItem, Popover, Typography } from "@mui/material";
import video from '../../../videotiktok/imgrose.webp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import './UserVideo.scss';
import { useState, useContext } from "react";
import { bgThemeContext } from '../../../App';
import { useSelector } from "react-redux";

function UserVideo() {

    const videoUser = useSelector(state => state.videoUser);
    console.log('video user', videoUser);

    const theme = useContext(bgThemeContext);
    const { bgColor, color } = theme;
    const [open, setOpen] = useState(null);

    const handleOpen = (item) => {
        setOpen(item);
    }
    const handleClose = () => {
        setOpen(null);
    }


    return (
        <div className="user-video" style={{ backgroundColor: bgColor }}>
            <Grid container spacing={1}>
                {videoUser.map((item, index) => (
                    <Grid item xs={6} md={2.4} sm={4} key={index}>
                        <div className="img-user-video">
                            <video width="100%" height="100%" src={item.hideVideo} alt="Rose" className="img-founder" />
                        </div>
                        <div className="info" style={{ color: color }}>
                            <div className="wrapper-video-user">
                                <div className="heading-name">Rose</div>
                                <p className="view-video">5 lượt xem</p>
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
                                            <Typography sx={{ ":hover": { backgroundColor: '#e8e8e8' }, color: '#333', display: 'flex', padding: '8px 0', alignItems: 'center' }} component="p">
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