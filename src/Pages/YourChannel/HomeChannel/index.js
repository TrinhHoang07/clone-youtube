import { bgThemeContext } from '../../../App';
import { useContext, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import './Homechannel.scss';
import UserVideo from '../UserVideo';
import { useSelector } from 'react-redux';

function HomeChannel() {

    const videoUser = useSelector(state => state.videoUser);
    const dataUser = useSelector(state => state.dataUser);

    const theme = useContext(bgThemeContext);
    const { color, bgColor, handleOpenAddVideo } = theme;

    useEffect(() => {
        document.title = `${dataUser.displayName} - Youtube`;
    }, []);

    return (
        <>
            {videoUser.length > 0 ? (<UserVideo />) : (<div className="homechannel" style={{ height: '100%', marginLeft: '74px', backgroundColor: bgColor }}>
                <div className="container-homechannel" style={{ display: 'flex', height: '100%' }}>
                    <div className="content-homechannel" style={{ margin: 'auto', textAlign: 'center' }}>
                        <Typography sx={{ color: color }} variant="h5" component="h3">
                            Tải một video lên để bắt đầu
                        </Typography>
                        <Typography className="text-homechannel" component="p" sx={{ color: color, fontSize: 14, width: 460, mt: 0.5 }}>
                            Bắt đầu chia sẻ câu chuyện của bạn và kết nối với người xem. Các video mà bạn tải lên sẽ xuất hiện ở đây.
                        </Typography>
                        <Button onClick={handleOpenAddVideo} variant="contained" sx={{ mt: 1, backgroundColor: '#065fd4' }}>
                            Tải video lên
                        </Button>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default HomeChannel;