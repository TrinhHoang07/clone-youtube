import { useState, useContext } from "react";
import { Avatar, Box, Button, ButtonGroup, IconButton, Input, Tab, Tabs, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './HeaderChannel.scss';
import { Link } from "react-router-dom";
import { bgThemeContext } from '../../../App';
import { useSelector } from "react-redux";

function HeaderChannel() {

    const user = useSelector(state => state.dataUser);
    const theme = useContext(bgThemeContext);
    const { color, handleOpenAddVideo, handleChangeSearchVideoUser } = theme;
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="header-channel">
            <div className="container">
                <div className="heading">
                    <Box className="box1">
                        <Avatar sx={{ width: 80, height: 80, mr: 3 }}>
                            {user.displayName.charAt(0)}
                        </Avatar>
                        <Box>
                            <Typography sx={{ color: color }} variant="h5" component="h3">
                                {user.displayName}
                            </Typography>
                            <Typography component="p" sx={{ fontSize: 14, color: color }}>
                                Không có người đăng ký
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="btn-group">
                        <ButtonGroup >
                            <Button onClick={handleOpenAddVideo} sx={{ mr: 1, borderRadius: '2px', backgroundColor: '#065fd4' }} variant="contained">Đăng Video</Button>
                            <Button sx={{ ml: 1, borderRadius: '2px', backgroundColor: '#065fd4' }} variant="contained">Quản lý Video</Button>
                        </ButtonGroup>
                    </Box>
                </div>
                <div className="navbar">
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Tabs scrollButtons="auto" sx={{ color: color }} value={value} onChange={handleChange}>
                            <Tab sx={{ color: color }} label="Trang chủ" component={Link} to="/yourchannel/featured" />
                            <Tab sx={{ color: color }} label="Video" component={Link} to="/yourchannel/video" />
                            <Tab sx={{ color: color }} label="Kênh" component={Link} to="/yourchannel/channel" />
                            <Tab sx={{ color: color }} label="Giới thiệu" component={Link} to="/yourchannel/about" />
                        </Tabs>
                        <Box className="search-box" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton>
                                <SearchOutlinedIcon sx={{ color: color }} />
                            </IconButton>
                            <Input onChange={(e) => handleChangeSearchVideoUser(e.target.value)} className="input-search" sx={{ width: '200px', color: color }} placeholder="Tìm kiếm" />
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default HeaderChannel;