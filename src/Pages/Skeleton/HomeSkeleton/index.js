import { useContext } from 'react';
import { bgThemeContext } from '../../../App';
import { Card, CardContent, CardHeader, Grid, Skeleton, Typography } from "@mui/material";

function HomeSkeleton() {

    const theme = useContext(bgThemeContext);
    const { colorSkeleton, bgColor } = theme;

    return (

        <Grid item xs={12} sm={4} md={3}>
            <Card sx={{ boxShadow: '0px 0px 5px #d7d7d7', backgroundColor: bgColor }}>
                <Skeleton sx={{ backgroundColor: colorSkeleton }} variant="rectangular" width="100%" height="154px" />
                <CardHeader
                    avatar={
                        <Skeleton sx={{ backgroundColor: colorSkeleton, borderRadius: "50%" }} variant="circle" width={48} height={48} />
                    }
                    title={< Skeleton sx={{ backgroundColor: colorSkeleton }} width="100%" />}
                    subheader={< Skeleton sx={{ backgroundColor: colorSkeleton }} width="100%" />}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <Skeleton width="100%" />
                        <Skeleton width="100%" />

                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default HomeSkeleton;