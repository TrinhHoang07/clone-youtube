import { useContext } from "react";
import { bgThemeContext } from '../../../App';
import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Moment from 'moment';

function About() {
    const user = useSelector(state => state.dataUser);
    console.log('about', user);
    const theme = useContext(bgThemeContext);
    const { color, bgColor, borderColor } = theme;

    return (
        <div className="homechannel" style={{ height: '100%', marginLeft: '74px', backgroundColor: bgColor }}>
            <div className="container-homechannel" style={{ display: 'flex' }}>
                <div className="content-homechannel" style={{ width: '324px', margin: '0 0 0 auto', marginRight: '56px', marginTop: '32px' }}>
                    <Typography component="p" sx={{ fontSize: 16, color: color }}>
                        Thống kê
                    </Typography>
                    <Divider sx={{ mt: 1.5, mb: 1.5, backgroundColor: borderColor }} />
                    <Typography component="p" sx={{ fontSize: 14, color: color }}>
                        Đã tham gia {Moment(user.metadata.lastSignInTime).format('DD/MM/YYYY')}
                    </Typography>
                    <Divider sx={{ mt: 1.5, mb: 1.5, backgroundColor: borderColor }} />
                </div>
            </div>
        </div>
    );
}

export default About;