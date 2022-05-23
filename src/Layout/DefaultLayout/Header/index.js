import { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip, Button, tooltipClasses, Typography, ClickAwayListener, Avatar } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import Menu from './Menu';
import './Header.scss';
import AppsYoutube from './AppsYoutube';
import CreateVideo from './CreateVideo';
import Notify from './Notify';
import Settings from './Settings';
import { bgThemeContext } from '../../../App';
import Profile from './Profile';
import axios from 'axios';
import { changeSearch } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../../Hooks/useDebounce';

function Header() {

    console.log('Header render');

    const user = useSelector(state => state.dataUser);
    const dispatch = useDispatch();
    const theme = useContext(bgThemeContext);
    const { color, bgColor, leftColor, inputColor, borderColor } = theme;
    const inputRef = useRef();

    const [openMenu, setOpenMenu] = useState(false);
    const [openApps, setOpenApps] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);
    const [openNotify, setOpenNotify] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const [results, setResults] = useState([]);
    const [isResults, setIsResults] = useState(false);
    const isUser = useSelector(state => state.isUser);

    const debounced = useDebounce(textSearch, 500);

    useEffect(() => {
        if (debounced.trim().length > 0) {
            axios.get(`https://json-by-hoang07.herokuapp.com/api/videos?q=${debounced}`)
                .then(res => {
                    setResults(res.data);
                    setIsResults(true);
                })
                .catch(err => console.log(err));
        }
        else {
            setResults([]);
            setIsResults(false);
        }
    }, [debounced]);

    const handleChangeInput = (e) => {
        setTextSearch(e.target.value);
    }

    const handleRenderSearch = (e) => {
        if (e.key === 'Enter') {
            axios.get(`https://json-by-hoang07.herokuapp.com/api/videos?q=${debounced}`)
                .then(res => {
                    dispatch(changeSearch(res.data));
                })
            setIsResults(false);
        }
    }

    const clickSearch = () => {
        axios.get(`https://json-by-hoang07.herokuapp.com/api/videos?q=${debounced}`)
            .then(res => {
                dispatch(changeSearch(res.data));
            })
        setIsResults(false);
    }

    const handleSubmitSearch = (e) => {
        setTextSearch(e.target.innerText);
        axios.get(`https://json-by-hoang07.herokuapp.com/api/videos?q=${e.target.innerText}`)
            .then(res => {
                dispatch(changeSearch(res.data));
            })
        setIsResults(false);
    }

    const handleClickAway = () => {
        setIsResults(false);
    }

    const handleToggleMenu = () => setOpenMenu(prev => !prev);
    const handleToggleApps = () => setOpenApps(prev => !prev);
    const handleToggleCreateVideo = () => setOpenCreate(prev => !prev);
    const handleToggleNotify = () => setOpenNotify(prev => !prev);
    const handleToggleSettings = () => setOpenSettings(prev => !prev);
    const handleToggleProfile = () => setOpenProfile(prev => !prev);

    const handleCloseSearch = () => {
        setTextSearch('');
        setResults([]);
        inputRef.current.focus();
    }

    const handleCloseApps = () => {
        setOpenApps(false);
    }

    const handleCloseCreate = () => {
        setOpenCreate(false);
    }

    const handleCloseNotify = () => {
        setOpenNotify(false);
    }

    const handleCloseProfile = () => {
        setOpenProfile(false);
    }

    const handleCloseSettings = () => {
        setOpenSettings(false);
    }

    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            fontSize: 14,
            fontWeight: '400',
            padding: '8px'
        },
    }));
    return (
        <header id="header" style={{ backgroundColor: leftColor }}>
            <div className="left-bar">
                <IconButton onClick={handleToggleMenu} sx={{ ml: 1.5, width: 42, height: 42 }}>
                    <MenuIcon sx={{ fontSize: 26, color: color }} />
                </IconButton>
                {openMenu && <Menu open={openMenu} close={handleToggleMenu} />}
                <div className="left-bar-wrapper">
                    <Link to="" className="link-logo" style={{ color: color }}>
                        <div className="logo-svg" style={{ display: 'flex', alignItems: 'center', paddingLeft: '18px' }}>
                            <svg fill={color} height="20px" width="90px" alt="Youtube">
                                <g viewBox="0 0 110 55" preserveAspectRatio="xMidYMid meet">
                                    <g>
                                        <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
                                        <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"></path>
                                            <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"></path>
                                            <path d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"></path>
                                            <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"></path>
                                            <path d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"></path>
                                            <path d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"></path>
                                            <path d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="center-bar">
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className="container-search">
                        <SearchOutlinedIcon className="icon-focus-search" sx={{ pl: 1, fontSize: '28px', color: color, backgroundColor: inputColor }} />
                        <input onKeyUp={handleRenderSearch} onFocus={() => setIsResults(true)} ref={inputRef} value={textSearch} onChange={handleChangeInput} type="text" placeholder='Tìm kiếm' className="center-search" style={{ backgroundColor: inputColor, caretColor: color, color: color, border: '1px solid', borderColor: borderColor }} />
                        {textSearch.length > 0 && <CloseIcon onClick={handleCloseSearch} sx={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: 20, color: color }} />}
                        <div className="result-search">
                            {isResults && results.length > 0 &&
                                results.map((result) => (
                                    <div onClick={(e) => handleSubmitSearch(e)} key={result.id} className="text-result">
                                        <SearchOutlinedIcon sx={{ mr: 1 }} />
                                        <Typography component="p">
                                            {result.description}
                                        </Typography>
                                    </div>
                                ))}
                        </div>
                    </div>
                </ClickAwayListener>
                <LightTooltip title="Tìm kiếm" sx={{ fontSize: 28 }}>
                    <span className="icon-search" style={{ backgroundColor: bgColor }}>
                        <SearchSharpIcon onClick={clickSearch} className="icon-search-h" sx={{ fontSize: 24, height: '100%', color: color }} />
                    </span>
                </LightTooltip>
                <LightTooltip title="Tìm kiếm bằng giọng nói">
                    <IconButton
                        className="icon-microphone"
                        sx={{ width: 42, height: 42, ml: 0.5, backgroundColor: bgColor, mr: 0.5 }}
                    >
                        <KeyboardVoiceIcon sx={{ fontSize: 24, color: color }} />
                    </IconButton>
                </LightTooltip>
            </div>
            <div className="right-bar">
                {isUser ? (<LightTooltip title="Tạo">
                    <IconButton
                        className="icon-apps"
                        sx={{ width: 42, height: 42 }}
                        onClick={handleToggleCreateVideo}
                    >
                        <VideoCallOutlinedIcon sx={{ fontSize: 24, color: color }} />
                    </IconButton>
                </LightTooltip>) : (<></>)}
                <LightTooltip title="Các ứng dụng Youtube">
                    <IconButton
                        className="icon-apps"
                        sx={{ width: 42, height: 42 }}
                        onClick={handleToggleApps}
                    >
                        <AppsOutlinedIcon sx={{ fontSize: 24, color: color }} />
                    </IconButton>
                </LightTooltip>
                {openCreate && <CreateVideo open={openCreate} close={handleCloseCreate} />}
                {openApps && <AppsYoutube open={openApps} close={handleCloseApps} />}
                {isUser ? (<LightTooltip title="Thông báo">
                    <IconButton
                        className="icon-setting"
                        sx={{ width: 42, height: 42, ml: 0.5, mr: 0.5 }}
                        onClick={handleToggleNotify}
                    >
                        <NotificationsNoneOutlinedIcon sx={{ fontSize: 24, color: color }} />
                    </IconButton>
                </LightTooltip>) :
                    (<LightTooltip title="Cài đặt">
                        <IconButton
                            className="icon-setting"
                            sx={{ width: 42, height: 42, ml: 0.5, mr: 0.5 }}
                            onClick={handleToggleSettings}
                        >
                            <MoreVertIcon sx={{ fontSize: 24, color: color }} />
                        </IconButton>
                    </LightTooltip>)}
                {openNotify && <Notify open={openNotify} close={handleCloseNotify} />}
                {openSettings && <Settings open={openSettings} close={handleCloseSettings} />}
                {isUser ? (<Avatar
                    sx={{ width: 32, height: 32, mr: 2, ":hover": { cursor: "pointer" } }}
                    onClick={handleToggleProfile}
                >
                    {user.displayName.charAt(0)}
                </Avatar>) :
                    (<Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size='small'
                            sx={{ fontSize: 14, mr: 2, borderRadius: 0, border: '1px solid #255fd4', ":hover": { border: '1px solid #255fd4' } }}
                            className="btn-login"
                        >
                            <AccountCircleOutlinedIcon sx={{ fontSize: 24, mr: 1 }} />
                            Đăng Nhập
                        </Button>
                    </Link>
                    )}
                {openProfile && <Profile open={openProfile} close={handleCloseProfile} />}
            </div>
        </header>
    )
}

export default Header;