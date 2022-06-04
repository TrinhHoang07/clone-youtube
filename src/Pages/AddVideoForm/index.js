import { Box, Button, Fade, IconButton, styled, Typography } from "@mui/material";
import FeedbackIcon from '@mui/icons-material/Feedback';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import './AddVideoForm.scss';
import { bgThemeContext } from '../../App';
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoUser } from '../../redux/actions';

const Input = styled('input')({
    display: 'none',
});

function AddVideoForm() {

    const dispatch = useDispatch();
    const [textTitleName, setTextTitleName] = useState('');

    const handleAddVideo = (e) => {
        const file = e.target.files[0];
        file.hideVideo = URL.createObjectURL(file);
        file.nameVideoTitle = textTitleName;
        dispatch(getVideoUser(file));
        handleCloseAddVideo();
    }
    // useEffect(() => {
    //     return () => {
    //         video && URL.revokeObjectURL(video.hideVideo);
    //     }
    // }, [video])

    const theme = useContext(bgThemeContext);
    const { handleCloseAddVideo } = theme;

    return (
        <Fade in={true} timeout={300}>
            <div className="add-video-form">
                <div className="addvideoform-container">
                    <header className="addvideo-form-header">
                        <Typography component="h5" sx={{ fontSize: 20, fontWeight: 500 }}>
                            Tải video lên
                        </Typography>
                        <Box>
                            <IconButton sx={{ width: 42, height: 42 }}>
                                <FeedbackIcon />
                            </IconButton>
                            <IconButton onClick={handleCloseAddVideo} sx={{ width: 42, height: 42 }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </header>
                    <form className="addvideo-form-content">
                        <IconButton sx={{ backgroundColor: '#e8e8e8', padding: 3, mt: 8, mb: 2, ":hover": { backgroundColor: '#e8e8e8' } }}>
                            <FileUploadOutlinedIcon sx={{ fontSize: 100 }} />
                        </IconButton>
                        <Typography sx={{ fontSize: 18, mb: 0.5, fontWeight: 400 }} component="h5">Tải video lên</Typography>
                        <Typography sx={{ fontSize: 14, mb: 3 }} component="p">Các video của bạn sẽ ở chế độ riêng tư cho đến khi bạn xuất bản.</Typography>
                        <div style={{ marginBottom: '8px' }}>
                            <label htmlFor="input-text-name">
                                <Typography component="span" sx={{ fontSize: 14, cursor: 'pointer' }}> Name: </Typography>
                                <input onChange={(e) => setTextTitleName(e.target.value)} className="input-name-video" type="text" id="input-text-name" placeholder="Nhập tiêu đề video..." />
                            </label>
                        </div>
                        <label htmlFor="contained-button-file">
                            <Input id="contained-button-file" onChange={handleAddVideo} type="file" />
                            <Button sx={{ borderRadius: '2px' }} variant="contained" component="span">
                                Chọn tệp
                            </Button>
                        </label>
                    </form>
                    <footer className="addvideo-form-footer">
                        <Typography sx={{ fontSize: 12 }} component="p">
                            Khi gửi video lên YouTube, bạn xác nhận rằng bạn đồng ý với
                            <a style={{ textDecoration: 'none', color: '#1568d7' }} href=""> Điều khoản dịch vụ </a>
                            và
                            <a style={{ textDecoration: 'none', color: '#1568d7' }} href=""> Nguyên tắc cộng đồng </a>
                            của YouTube.
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} component="p">
                            Bạn cần đảm bảo không vi phạm bản quyền hoặc quyền riêng tư của người khác.
                            <a style={{ textDecoration: 'none', color: '#1568d7' }} href=""> Tìm hiểu thêm</a>
                        </Typography>
                    </footer>
                </div>
            </div>
        </Fade>
    )
}

export default AddVideoForm;