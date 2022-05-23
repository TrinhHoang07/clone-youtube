import { bgThemeContext } from '../../App';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import './UserLibrary.scss';
import { useSelector } from 'react-redux';
function UserLibrary() {

    const user = useSelector(state => state.dataUser);
    const theme = useContext(bgThemeContext);
    const { color, bgColor } = theme;

    return (
        <div className="userlibrary" style={{ backgroundColor: bgColor }}>
            <div className="container-userlibrary">
                <div className="content-process">
                    <List>
                        <ListItem sx={{ display: 'unset', color: color }}>
                            <ListItemButton sx={{ pl: 0, pt: 0, pb: 0, pr: 0, ":hover": { backgroundColor: 'unset' } }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                                    <RestoreRoundedIcon sx={{ fontSize: 28, color: color }} />
                                </ListItemIcon>
                                <ListItemText
                                    className="heading-process"
                                    primary="Video đã xem"
                                />

                            </ListItemButton>
                            <Typography component="p" sx={{ fontSize: 14 }}>
                                Các video mà bạn xem sẽ xuất hiện ở đây.
                                <Link to="" style={{ textDecoration: 'none', color: '#5e3da0' }}> Duyệt qua các video</Link>
                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ display: 'unset', color: color }}>
                            <ListItemButton sx={{ pl: 0, pt: 0, pb: 0, pr: 0, ":hover": { backgroundColor: 'unset' } }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                                    <AccessTimeRoundedIcon sx={{ fontSize: 28, color: color }} />
                                </ListItemIcon>
                                <ListItemText
                                    className="heading-process"
                                    primary="Xem sau"
                                />

                            </ListItemButton>
                            <Typography component="p" sx={{ fontSize: 14 }}>
                                Lưu video để xem sau. Danh sách của bạn sẽ hiển thị ngay tại đây.

                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ display: 'unset', color: color }}>
                            <ListItemButton sx={{ pl: 0, pt: 0, pb: 0, pr: 0, ":hover": { backgroundColor: 'unset' } }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                                    <PlaylistPlayRoundedIcon sx={{ fontSize: 28, color: color }} />
                                </ListItemIcon>
                                <ListItemText
                                    className="heading-process"
                                    primary="Danh sách phát"
                                />

                            </ListItemButton>
                            <Typography component="p" sx={{ fontSize: 14 }}>
                                Danh sách phát mà bạn tạo hoặc lưu sẽ xuất hiện ở đây.

                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ display: 'unset', color: color }}>
                            <ListItemButton sx={{ pl: 0, pt: 0, pb: 0, pr: 0, ":hover": { backgroundColor: 'unset' } }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                                    <ThumbUpOutlinedIcon sx={{ fontSize: 28, color: color }} />
                                </ListItemIcon>
                                <ListItemText
                                    className="heading-process"
                                    primary="Video đã thích"
                                />

                            </ListItemButton>
                            <Typography component="p" sx={{ fontSize: 14 }}>
                                Sử dụng biểu tượng ngón tay trỏ lên để thích video. Danh sách của bạn sẽ hiển thị ngay tại đây.

                            </Typography>
                        </ListItem>
                        <Divider />
                    </List>
                </div>
                <div className="content-info">
                    <Box sx={{ pt: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Avatar sx={{ width: 100, height: 100 }}>
                            {user.displayName.charAt(0)}
                        </Avatar>
                        <Typography sx={{ mt: 1, mb: 1, fontSize: 16, color: color }} component="h3" variant="h6">
                            {user.displayName}
                        </Typography>
                    </Box>
                    <Divider />
                    <List sx={{ pt: 0 }}>
                        <ListItem sx={{ color: color }}>
                            <ListItemButton sx={{ padding: 0, ":hover": { backgroundColor: 'unset' } }}>
                                <ListItemText className="text-info" primary="Kênh đăng ký" />
                                <Typography sx={{ fontSize: 14 }} component="p">0</Typography>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ color: color }}>
                            <ListItemButton sx={{ padding: 0, ":hover": { backgroundColor: 'unset' } }}>
                                <ListItemText className="text-info" primary="Video tải lên" />
                                <Typography sx={{ fontSize: 14 }} component="p">0</Typography>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem sx={{ color: color }}>
                            <ListItemButton sx={{ padding: 0, ":hover": { backgroundColor: 'unset' } }}>
                                <ListItemText className="text-info" primary="Video đã thích" />
                                <Typography sx={{ fontSize: 14 }} component="p">0</Typography>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </List>
                </div>
            </div>
        </div>
    );
}

export default UserLibrary;