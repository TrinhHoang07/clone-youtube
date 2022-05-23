import { useContext } from "react";
import { Button, Divider, Radio } from "@mui/material";
import './HistoryComunity.scss';
import { bgThemeContext } from '../../App';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";

function HistoryComunity() {
    const theme = useContext(bgThemeContext);

    const { color, bgColor, actionColor, historyColor, colorHover, checkedRadio, handleCheckedRadio } = theme;


    return (
        <div className="history-comunity" style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div className="content-history-comunity">
                    <Link to="" className="link-comunity">Đăng nhập </Link>
                    <span style={{ color: color }}>để xem Cộng đồng lịch sử của bạn</span>
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

export default HistoryComunity;