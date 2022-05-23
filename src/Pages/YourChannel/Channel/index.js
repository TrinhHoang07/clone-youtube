import { useContext } from "react";
import { bgThemeContext } from '../../../App';
import { Typography } from "@mui/material";

function Channel() {

    const theme = useContext(bgThemeContext);
    const { color, bgColor } = theme;

    return (
        <div className="homechannel" style={{ height: '100%', marginLeft: '74px', backgroundColor: bgColor }}>
            <div className="container-homechannel" style={{ display: 'flex' }}>
                <div className="content-homechannel" style={{ margin: 'auto', textAlign: 'center' }}>
                    <Typography component="p" sx={{ mt: 2, fontSize: 14, color: color }}>
                        Kênh này không có bất kỳ kênh nào khác.
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default Channel;