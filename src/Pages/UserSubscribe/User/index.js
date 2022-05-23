import { Avatar, Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import rose from '../../../videotiktok/roseee.jpeg';

function User({ color }) {

    return (
        <Grid item xs={6} sm={4} md={2.4} sx={{ textAlign: 'center', mt: 0.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: '96px', height: '96px' }} src={rose} alt="Rose cute" />
            </Box>
            <Typography sx={{ fontSize: '16px', mt: 0.5, color: color }} component="h3" variant="h6">
                Rose So Cute
            </Typography>
            <Typography sx={{ fontSize: '14px', mt: 0.5, color: color }} component="p">
                ❤❤❤❤❤
            </Typography>
            <Button sx={{ mt: 1.5, backgroundColor: '#d7d7d7', padding: '2px 8px', color: '#6e6e6e', ":hover": { backgroundColor: '#d7d7d7' } }} variant="text">
                Đăng ký
            </Button>
        </Grid>
    );
}

export default User;