import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, List, ListItemButton, Card, CardContent, CardMedia, ListItemIcon, IconButton, ListItemText, Typography } from "@mui/material";
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { bgThemeContext } from '../../../App';
import DisCoverVideo from '../DisCoverVideo';
import axios from "axios";
import DiscoverSkeleton from "../../Skeleton/DiscoverSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { discoverVideo } from '../../../redux/actions';

function DisCover() {
    const theme = useContext(bgThemeContext);
    const dispatch = useDispatch();
    const discoverData = useSelector(state => state.disCover);
    const [keyData, setKey] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        console.log("call api");
        axios.get('https://json-by-hoang07.herokuapp.com/api/discovers')
            .then(res => {
                dispatch(discoverVideo(res.data));
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleTogglePlayingVideo = (keyData) => {
        setKey(keyData);
        setOpen(true);
    }

    const handleToggleClose = useCallback(() => {
        setOpen(false);
    }, [])

    const { bgColor, leftColor, color } = theme;

    return (
        <div className="discover" style={{ backgroundColor: bgColor }}>
            <div className="container">
                <List sx={{ ml: 8, mr: 8 }} className="list-video-discover">
                    <Grid container spacing={0.5}>
                        <Grid item xs={2.4} className="btn-discover-video">
                            <Link to="" className="link-item" style={{ textDecoration: 'none', margin: '0 2px' }}>
                                <ListItemButton sx={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', backgroundColor: leftColor }}>
                                    <ListItemIcon sx={{ width: '100%', margin: '12px 0' }}>
                                        <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 36, color: '#fc0d1b' }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ width: '100%', marginBottom: '12px', color: color }} className="text-500" primary="Thịnh hành" />
                                </ListItemButton>
                            </Link>
                        </Grid>
                        <Grid item xs={2.4} className="btn-discover-video">
                            <Link to="" className="link-item" style={{ textDecoration: 'none', margin: '0 2px' }}>
                                <ListItemButton sx={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', backgroundColor: leftColor }}>
                                    <ListItemIcon sx={{ width: '100%', margin: '12px 0' }}>
                                        <MusicNoteIcon sx={{ fontSize: 36, color: '#ffc200' }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ width: '100%', marginBottom: '12px', color: color }} className="text-500" primary="Âm nhạc" />
                                </ListItemButton>
                            </Link>
                        </Grid>
                        <Grid item xs={2.4} className="btn-discover-video">
                            <Link to="" className="link-item" style={{ textDecoration: 'none', margin: '0 2px' }}>
                                <ListItemButton sx={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', backgroundColor: leftColor }}>
                                    <ListItemIcon sx={{ width: '100%', margin: '12px 0' }}>
                                        <SportsEsportsIcon sx={{ fontSize: 36, color: '#e04c1a' }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ width: '100%', marginBottom: '12px', color: color }} className="text-500" primary="Trò chơi" />
                                </ListItemButton>
                            </Link>
                        </Grid>
                        <Grid item xs={2.4} className="btn-discover-video">
                            <Link to="" className="link-item" style={{ textDecoration: 'none', margin: '0 2px' }}>
                                <ListItemButton sx={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', backgroundColor: leftColor }}>
                                    <ListItemIcon sx={{ width: '100%', margin: '12px 0' }}>
                                        <NewspaperIcon sx={{ fontSize: 36, color: '#1162fb' }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ width: '100%', marginBottom: '12px', color: color }} className="text-500" primary="Tin tức" />
                                </ListItemButton>
                            </Link>
                        </Grid>
                        <Grid item xs={2.4} className="btn-discover-video">
                            <Link to="" className="link-item" style={{ textDecoration: 'none', margin: '0 2px' }}>
                                <ListItemButton sx={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', backgroundColor: leftColor }}>
                                    <ListItemIcon sx={{ width: '100%', margin: '12px 0' }}>
                                        <EmojiEventsIcon sx={{ fontSize: 36, color: '#6ea2ff' }} />
                                    </ListItemIcon>
                                    <ListItemText sx={{ width: '100%', marginBottom: '12px', color: color }} className="text-500" primary="Thể thao" />
                                </ListItemButton>
                            </Link>
                        </Grid>
                    </Grid>
                </List>
                <Typography className="heading-discover-video" component="h1" variant="h5" sx={{ color: color, fontSize: 16, fontWeight: 'bold', ml: 8, mt: 3, mb: 3 }}>
                    Video thịnh hành
                </Typography>
                <Box className="wrapper-discover-video" sx={{ ml: 8, ":last-child": { paddingBottom: '1px' } }}>
                    {open && <DisCoverVideo keyData={keyData} callback={handleToggleClose} />}
                    {loading ? arr.map(index => (<DiscoverSkeleton key={index} />)) :
                        discoverData.map(item => (
                            <Card key={item.id} className="discover-playing" sx={{ maxWidth: '862px', mb: 1, backgroundColor: bgColor, boxShadow: 'none' }}>

                                <Link onClick={() => handleTogglePlayingVideo(item.video_key)} className="discover-playing-link" to="" style={{ textDecoration: 'none', color: color, padding: 4 }}>
                                    <CardMedia
                                        className="discover-playing-media"
                                        component="img"
                                        alt="test card"
                                        image={item.thumbnail}
                                        height="138px"
                                        sx={{ width: '246px' }}
                                    />
                                    <CardContent sx={{ flex: 1, padding: 0, ":last-child": { paddingBottom: 0 }, ml: 2 }}>
                                        <Box className="heading-video-media-discover" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <Box>
                                                <Typography component="p" sx={{ fontWeight: 500, fontSize: 18 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography component="p" sx={{ fontSize: 14, marginTop: '-2px', display: 'flex', alignItems: 'center' }}>
                                                    {item.name} <MusicNoteIcon /> {item.view} {item.time}
                                                </Typography>
                                            </Box>
                                            <IconButton sx={{ ":hover": { backgroundColor: 'unset' } }} onClick={e => e.preventDefault()}>
                                                <MoreVertIcon sx={{ fontSize: 24, color: color }} />
                                            </IconButton>
                                        </Box>
                                        <Box className="des-video-media-discover">
                                            <Typography className="des-video" component="p" sx={{ mt: 1.5, fontSize: 12, letterSpacing: 0 }}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Link>
                            </Card>))
                    }
                </Box>
            </div>
        </div>
    )
}
export default DisCover;