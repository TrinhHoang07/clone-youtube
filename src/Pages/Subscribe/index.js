import { useContext, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Subscribe.scss';
import { bgThemeContext } from '../../App';
import { Link } from "react-router-dom";

function Subscribe() {

    const theme = useContext(bgThemeContext);
    const { color, bgColor } = theme;

    useEffect(() => {
        document.title = 'Kênh đăng ký - Youtube';
    }, []);

    return (
        <div className="subscribe" style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div className="content-subscribe">
                    <IconButton disableRipple sx={{ ":hover": { backgroundColor: 'transparent' }, color: '#000' }} >
                        <OndemandVideoIcon sx={{ fontSize: 111, color: color }} />
                    </IconButton>
                    <h3 style={{ color: color }} className="heading">Đừng bỏ lỡ video mới</h3>
                    <p style={{ color: color }} className="description">Đăng nhập để xem cập nhật từ các kênh YouTube yêu thích của bạn</p>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button sx={{ border: '1px solid #255fd4', borderRadius: '2px', ":hover": { backgroundColor: 'unset', border: '1px solid #255fd4' } }} variant="outlined" startIcon={<AccountCircleOutlinedIcon />}>ĐĂNG NHẬP</Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Subscribe;