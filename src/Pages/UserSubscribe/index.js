import { bgThemeContext } from '../../App';
import { useContext } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import User from "./User";
import './UserSubscribe.scss';

function UserSubscribe() {

    const theme = useContext(bgThemeContext);
    const { color, bgColor } = theme;

    return (
        <div className="usersubscribe" style={{ backgroundColor: bgColor }}>
            <div className="container-user">
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Sắc đẹp & thời trang
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Hài kịch
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Thể thao
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Âm nhạc
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Công nghệ
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Trò chơi
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Nấu ăn và sức khỏe
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
                <Divider sx={{ mt: 2, mb: 1 }} />
                <Typography className="text-user" sx={{ fontSize: 16, color: color }} variant="h6" component="h5">
                    Phim và giải trí
                </Typography>
                <Grid container spacing={2} sx={{ mt: 0.5 }}>
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                    <User color={color} />
                </Grid>
            </div>
        </div>
    );
}

export default UserSubscribe;