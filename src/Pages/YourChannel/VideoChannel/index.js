import { useContext } from "react";
import { bgThemeContext } from '../../../App';
import { Button, Typography } from "@mui/material";

function VideoChannel() {

    const theme = useContext(bgThemeContext);
    const { color, bgColor, handleOpenAddVideo } = theme;

    return (
        <div className="homechannel" style={{ height: '100%', marginLeft: '74px', backgroundColor: bgColor }}>
            <div className="container-homechannel" style={{ display: 'flex', height: '100%' }}>
                <div className="content-homechannel" style={{ margin: 'auto', textAlign: 'center' }}>
                    <Typography component="p" sx={{ color: color }}>
                        Kênh này không có video nào!
                    </Typography>
                    <Button onClick={handleOpenAddVideo} variant="contained" sx={{ mt: 1, backgroundColor: '#065fd4' }}>
                        Đăng video
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default VideoChannel;