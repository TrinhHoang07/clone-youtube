import { useContext } from 'react';
import { Grow, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { bgThemeContext } from '../../../App';

function CreateVideo({ open, close }) {
    console.log('CreateVideo render');

    const bgTheme = useContext(bgThemeContext);
    const { color, leftColor, colorHover, handleOpenAddVideo } = bgTheme;
    return (
        <ClickAwayListener onClickAway={close}>
            <Grow
                in={open}
                timeout={300}
            >
                <div className="apps-youtube" style={{ backgroundColor: leftColor }}>
                    <List sx={{ width: 180 }}>
                        <ListItemButton onClick={handleOpenAddVideo} sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px' }}>
                            <ListItemIcon>
                                <AddCircleOutlineIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ color: color }}
                                className="app-text"
                                primary="Tạo"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px' }}>
                            <ListItemIcon>
                                <LiveTvSharpIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{ color: color }}
                                className="app-text"
                                primary="Live"
                            />
                        </ListItemButton>
                    </List>
                </div>
            </Grow>
        </ClickAwayListener>
    )
}
export default CreateVideo;