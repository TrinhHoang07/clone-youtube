import { useContext, memo } from 'react';
import { Divider, Grow, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { bgThemeContext } from '../../../App';

function AppsYoutube({ open, close }) {
    console.log('AppsYoutube render');

    const bgTheme = useContext(bgThemeContext);
    const { color, leftColor, colorHover } = bgTheme;
    return (
        <ClickAwayListener onClickAway={close}>
            <Grow
                in={open}
                timeout={300}
            >
                <div className="apps-youtube" style={{ backgroundColor: leftColor }}>
                    <List>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px' }}>
                            <ListItemIcon>
                                <LiveTvSharpIcon sx={{ fontSize: 26, color: 'red' }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ color: color }}
                                className="app-text"
                                primary="Youtube TV"
                            />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <List>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px' }}>
                            <ListItemIcon>
                                <PlayCircleFilledIcon sx={{ fontSize: 26, color: 'red' }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ color: color }}
                                className="app-text"
                                primary="Youtube Music"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px' }}>
                            <ListItemIcon>
                                <SubscriptionsIcon sx={{ fontSize: 26, color: 'red' }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ color: color }}
                                className="app-text"
                                primary="Youtube Kids"
                            />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <List>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px' }}>
                            <ListItemIcon>
                                <YouTubeIcon sx={{ fontSize: 26, color: 'red' }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ color: color }}
                                className="app-text"
                                primary="Youtube dành cho nghệ sỹ"
                            />
                        </ListItemButton>
                    </List>
                </div>
            </Grow>
        </ClickAwayListener>
    )
}
export default memo(AppsYoutube);