import { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import RestoreIcon from '@mui/icons-material/Restore';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import './BarLeft.scss';
import { bgThemeContext } from '../../../App';
import { useSelector } from 'react-redux';

function BarLeft() {
    console.log('BarLeft render');

    const isUser = useSelector(state => state.isUser);

    const theme = useContext(bgThemeContext);
    const { color, leftColor, colorHover, selectedIndex, handleListItemClick } = theme;
    return (
        <div className="bar-left" style={{ backgroundColor: leftColor }}>
            <List className="list-item">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Trang chủ"
                        />
                    </ListItemButton>
                </Link>
                <Link to="/discover" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <ExploreOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Khám phá"
                        />
                    </ListItemButton>
                </Link>
                <Link to="/short" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <MusicVideoIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Shorts"
                        />
                    </ListItemButton>
                </Link>
                {!isUser ? (<Link to="/subscriptions" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <OndemandVideoSharpIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Kênh đăng ký"
                        />
                    </ListItemButton>
                </Link>) : (<Link to="/user/subscriptions" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <OndemandVideoSharpIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Kênh đăng ký"
                        />
                    </ListItemButton>
                </Link>)}

                {!isUser ? (<Link to="/library" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item hide-mobile"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <VideoLibraryOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Thư viện"
                        />
                    </ListItemButton>
                </Link>) : (<Link to="/user/library" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item hide-mobile"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <VideoLibraryOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Thư viện"
                        />
                    </ListItemButton>
                </Link>)}


                {!isUser ? (<Link to="/history" style={{ textDecoration: 'none' }}>
                    <ListItemButton
                        className="item hide-mobile"
                        sx={{ ":hover": { backgroundColor: colorHover }, display: 'block', borderRadius: '2px', color: color, width: '100%', padding: '10px 0', textAlign: 'center' }}
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                    >
                        <ListItemIcon sx={{ display: 'block', fontSize: 28, color: color }}>
                            <RestoreIcon />
                        </ListItemIcon>
                        <ListItemText
                            className="text-bar"
                            primary="Video đã xem"
                        />
                    </ListItemButton>
                </Link>) : (<></>)}
            </List>
        </div>
    )
}

export default memo(BarLeft);