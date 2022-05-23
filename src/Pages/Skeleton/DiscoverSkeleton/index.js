import { useContext } from 'react';
import { bgThemeContext } from '../../../App';
import { Card, CardContent, Typography, Skeleton, Box } from "@mui/material";

function DiscoverSkeleton() {

    const theme = useContext(bgThemeContext);
    const { colorSkeleton, bgColor } = theme;

    return (
        <Card sx={{ display: 'flex', mt: 1.5, boxShadow: '0px 0px 5px #d7d7d7', backgroundColor: bgColor }}>

            <Skeleton sx={{ backgroundColor: colorSkeleton }} variant="rectangular" width="25%" height="154px" />
            <CardContent sx={{ flex: 1, padding: 0, ":last-child": { paddingBottom: 0 }, ml: 2 }}>
                <Box sx={{ width: "100%" }}>
                    <Box>
                        <Typography variant="h3">
                            <Skeleton sx={{ backgroundColor: colorSkeleton }} width="100%" />

                        </Typography >
                        <Typography variant="p">
                            <Skeleton sx={{ backgroundColor: colorSkeleton }} width="100%" />

                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="p">
                        <Skeleton sx={{ backgroundColor: colorSkeleton }} width="100%" />
                    </Typography>

                </Box>
            </CardContent>
        </Card>
    );
}

export default DiscoverSkeleton;