import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { ClickAwayListener, Divider, Grow, IconButton } from '@mui/material';
import { useContext, memo } from 'react';
import { bgThemeContext } from '../../../App';


function Notify({ open, close }) {
    console.log('Notify render');

    const bgTheme = useContext(bgThemeContext);
    const { color, leftColor } = bgTheme;

    return (
        <ClickAwayListener onClickAway={close}>
            <Grow
                in={open}
                timeout={300}
            >
                <div className="notify" style={{ backgroundColor: leftColor }}>
                    <header className="header-notify">
                        <p style={{ color: color }} className="title">Thông báo</p>
                        <IconButton>
                            <SettingsIcon sx={{ fontSize: 24, color: "#909090" }} />
                        </IconButton>
                    </header>
                    <Divider />
                    <div className="content-notify">
                        <div className="container">
                            <IconButton sx={{ color: "#909090" }} disableRipple>
                                <NotificationsNoneOutlinedIcon sx={{ fontSize: 120 }} />
                            </IconButton>
                            <h3 style={{ color: "#909090" }} className="heading">Thông báo của bạn hiển thị ở đây</h3>
                            <p style={{ color: "#909090" }} className="description">Đăng ký kênh yêu thích của bạn để nhận thông báo về các video mới nhất.</p>
                        </div>
                    </div>
                </div>
            </Grow>
        </ClickAwayListener >
    );
}

export default memo(Notify);