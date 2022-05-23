import { useContext } from "react";
import { Button, Divider, IconButton, Radio } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './History.scss';
import { bgThemeContext } from '../../App';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";

function History() {
    const theme = useContext(bgThemeContext);

    const { color, bgColor, actionColor, historyColor, colorHover, checkedRadio, handleCheckedRadio } = theme;


    return (
        <div className="history" style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div className="content-history">
                    <IconButton disableRipple sx={{ ":hover": { backgroundColor: 'transparent' }, color: '#000' }} >
                        <RestoreIcon sx={{ fontSize: 111, color: color }} />
                    </IconButton>
                    <h3 style={{ color: color }} className="heading">Theo dõi nội dung mà bạn xem</h3>
                    <p style={{ color: color }} className="description">Bạn không thể xem được nhật ký xem khi đã đăng xuất. <a href="https://google.com/" style={{ textDecoration: 'none', color: '#106cd7' }}>Tìm hiểu thêm</a></p>
                    <Button sx={{ border: '1px solid #255fd4', borderRadius: '2px', ":hover": { backgroundColor: 'unset', border: '1px solid #255fd4' } }} variant="outlined" startIcon={<AccountCircleOutlinedIcon />}>ĐĂNG NHẬP</Button>
                </div>
                <div className="content-setting" style={{ backgroundColor: historyColor }}>
                    <div className="des-setting">
                        <h3 style={{ color: color }} className="heading-setting">Loại hoạt động</h3>
                        <Divider sx={{ backgroundColor: colorHover, mt: 2, mb: 2 }} />
                        <Link onClick={(event) => handleCheckedRadio(event, 0)} style={{ color: color }} to="/history" className="link-setting">
                            <span>Nhật kí xem</span>
                            <Radio checked={checkedRadio === 0} sx={{ padding: 0, mr: 3, color: color }} />
                        </Link>
                        <Divider sx={{ backgroundColor: colorHover, mt: 2, mb: 2 }} />
                        <Link onClick={(event) => handleCheckedRadio(event, 1)} style={{ color: color }} to="/history/comunity_history" className="link-setting">
                            <span>Cộng đồng</span>
                            <Radio checked={checkedRadio === 1} sx={{ padding: 0, mr: 3, color: color }} />
                        </Link>
                        <Divider sx={{ backgroundColor: colorHover, mt: 2, mb: 2 }} />
                    </div>
                    <div className="buttons">
                        <Button sx={{ color: actionColor, justifyContent: 'flex-start', padding: '12px 14px 12px 14px', ":hover": { backgroundColor: 'unset' } }} startIcon={<DeleteOutlineIcon />}>XÓA TẤT CẢ VIDEO ĐÃ XEM</Button>
                        <Button sx={{ color: actionColor, justifyContent: 'flex-start', padding: '12px 14px 12px 14px', ":hover": { backgroundColor: 'unset' } }} startIcon={<PauseCircleOutlineIcon />}>TẠM DỪNG LƯU DANH SÁCH VIDEO ĐÃ XEM</Button>
                        <Button sx={{ color: actionColor, justifyContent: 'flex-start', padding: '12px 14px 12px 14px', ":hover": { backgroundColor: 'unset' } }} startIcon={<DeleteOutlineIcon />}>XÓA TẤT CẢ LỊCH SỬ TÌM KIẾM</Button>
                        <Button sx={{ color: actionColor, justifyContent: 'flex-start', padding: '12px 14px 12px 14px', ":hover": { backgroundColor: 'unset' } }} startIcon={<PauseCircleOutlineIcon />}>TẠM DỪNG LƯU NHẬT KÝ TÌM KIẾM</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default History;