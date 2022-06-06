import { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import { Avatar, Card, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";
import { bgThemeContext } from '../../../App';
import VideoPlaying from "./VideoPlaying";
import HomeSkeleton from "../../Skeleton/HomeSkeleton";
import { searchVideo } from '../../../redux/actions';
import { useDispatch, useSelector } from "react-redux";

function Video() {

    const dispatch = useDispatch()
    const dataVideo = useSelector(state => state.data);
    const theme = useContext(bgThemeContext);
    const { bgColor, color } = theme;
    const [key, setKey] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    useEffect(() => {
        console.log("call api");
        axios.get("https://json-by-hoang07.herokuapp.com/api/videos")
            .then(res => {
                dispatch(searchVideo(res.data));
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    const handleTogglePlayingVideo = (key) => {
        setKey(key);
        setOpen(true);
    }

    const handleToggleClose = useCallback(() => {
        setOpen(false);
    }, [])

    return (
        <Grid className="video" container spacing={2} sx={{ padding: '0 16px', backgroundColor: bgColor, paddingTop: '70px' }}>
            {open && <VideoPlaying callback={handleToggleClose} data={key} />}
            {loading ? arr.map(index => (<HomeSkeleton key={index} />)) : (dataVideo.map(video => (
                <Grid key={video.id} item xs={12} className="wrapper-video" sm={4} md={3} sx={{ backgroundColor: bgColor }}>
                    <Link to="" style={{ textDecoration: 'none' }}
                        onClick={() => handleTogglePlayingVideo(video.video_key)}
                    >
                        <Card sx={{ boxShadow: 'none', borderRadius: '0', backgroundColor: bgColor, marginBottom: '14px' }}>
                            <CardMedia
                                className="video-media"
                                component="img"
                                alt="Description"
                                image={video.thumbnail}
                                height="154"
                            />
                            <CardHeader
                                className="video-header"
                                sx={{ padding: '14px 0', color: color }}
                                avatar={
                                    <Avatar>
                                        H
                                    </Avatar>
                                }
                                action={
                                    <IconButton sx={{ color: color }}>
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={video.description}
                                subheader={
                                    <>
                                        <Typography sx={{ fontSize: 12, color: color }}>
                                            {video.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12, color: color }}>
                                            {video.view} {video.time}
                                        </Typography>
                                    </>
                                }
                            />
                        </Card>
                    </Link>
                </Grid>
            )))}
        </Grid>
    )
}
export default Video;