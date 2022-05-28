import { useContext, memo } from "react";
import { ClickAwayListener, Divider, styled, List, ListItemButton, ListItemIcon, ListItemText, Switch, Zoom } from "@mui/material";
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import { bgThemeContext } from '../../../App';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

function Settings({ open, close }) {
    console.log('Setting render');

    const bgTheme = useContext(bgThemeContext);
    const { color, leftColor, colorHover, checked, handleToggleColorSkeleton, handleToggleBorderColor, handleToggleHistoryColor, handleToggleActionColor, handleToggleShortColor, handleToggleColorContentHeader, handleSetColorHover, handleToggleInputColor, handleToggleLeftColor, handleToggleColor, handleChecked, handleToggleBgColor } = bgTheme;

    const handleChange = () => {
        handleToggleBgColor();
        handleChecked();
        handleToggleColor();
        handleToggleLeftColor();
        handleToggleInputColor();
        handleSetColorHover();
        handleToggleColorContentHeader();
        handleToggleShortColor();
        handleToggleActionColor();
        handleToggleHistoryColor();
        handleToggleBorderColor();
        handleToggleColorSkeleton();
    }
    return (
        <ClickAwayListener onClickAway={close}>
            <Zoom in={open} timeout={300}>
                <div className="settings" style={{ backgroundColor: leftColor }}>
                    <List>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <ModeNightOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Chế độ tối"
                            />
                            <MaterialUISwitch checked={checked} onChange={handleChange} />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <TranslateOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Ngôn ngữ"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <LanguageOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Địa điểm"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <SettingsOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Cài đặt"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <VerifiedUserOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Dữ liệu của bạn trên Youtube"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <HelpOutlineOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Trợ giúp"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <FeedbackOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Gửi phản hồi"
                            />
                        </ListItemButton>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemIcon>
                                <KeyboardOutlinedIcon sx={{ fontSize: 26, color: color }} />
                            </ListItemIcon>
                            <ListItemText
                                className="app-text"
                                primary="Phím tắt"
                            />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <List>
                        <ListItemButton sx={{ ":hover": { backgroundColor: colorHover }, padding: '6px 16px', color: color }}>
                            <ListItemText
                                className="diffe"
                                primary="Chế độ hạn chế"
                            />
                            <Switch />
                        </ListItemButton>
                    </List>
                </div>
            </Zoom>
        </ClickAwayListener>
    )
}

export default memo(Settings);