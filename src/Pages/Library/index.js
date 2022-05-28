import { useContext, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Library.scss';
import { bgThemeContext } from '../../App';

function Library() {

    const theme = useContext(bgThemeContext);
    const { color, bgColor } = theme;

    useEffect(() => {
        document.title = 'Thư viện - Youtube';
    }, []);

    return (
        <div className="library" style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div className="content-library">
                    <IconButton disableRipple sx={{ ":hover": { backgroundColor: 'transparent' }, color: '#000' }} >
                        <VideoLibraryOutlinedIcon sx={{ fontSize: 111, color: color }} />
                    </IconButton>
                    <h3 style={{ color: color }} className="heading">Thưởng thức các video yêu thích của bạn</h3>
                    <p style={{ color: color }} className="description">Đăng nhập để truy cập video bạn đã thích hoặc đã lưu</p>
                    <Button href="/library" sx={{ border: '1px solid #255fd4', borderRadius: '2px', ":hover": { backgroundColor: 'unset', border: '1px solid #255fd4' } }} variant="outlined" startIcon={<AccountCircleOutlinedIcon />}>ĐĂNG NHẬP</Button>
                </div>
            </div>
        </div >
    )
}

export default Library;