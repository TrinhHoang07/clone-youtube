import { Chip, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { bgThemeContext } from '../../../App';

function ToolBar() {
    const theme = useContext(bgThemeContext);
    const { color, bgColor, inputColor, colorContentHoverHeader } = theme;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Stack direction="row" spacing={1.5} className="header-toolbar" sx={{ backgroundColor: bgColor }}>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 0)}
                    sx={{ fontSize: 15, color: selectedIndex === 0 ? inputColor : color, backgroundColor: selectedIndex === 0 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 0 ? color : colorContentHoverHeader } }}
                    label="Tất cả"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 1)}
                    sx={{ fontSize: 15, color: selectedIndex === 1 ? inputColor : color, backgroundColor: selectedIndex === 1 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 1 ? color : colorContentHoverHeader } }}
                    label="Âm nhạc"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: 15, color: selectedIndex === 2 ? inputColor : color, backgroundColor: selectedIndex === 2 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 2 ? color : colorContentHoverHeader } }}
                    label="Trực tiếp"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 3)}
                    sx={{ fontSize: 15, color: selectedIndex === 3 ? inputColor : color, backgroundColor: selectedIndex === 3 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 3 ? color : colorContentHoverHeader } }}
                    label="Bóng đá"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 4)}
                    sx={{ fontSize: 15, color: selectedIndex === 4 ? inputColor : color, backgroundColor: selectedIndex === 4 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 4 ? color : colorContentHoverHeader } }}
                    label="Đọc rap"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 5)}
                    sx={{ fontSize: 15, color: selectedIndex === 5 ? inputColor : color, backgroundColor: selectedIndex === 5 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 5 ? color : colorContentHoverHeader } }}
                    label="Phim hoạt hình"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 6)}
                    sx={{ fontSize: 15, color: selectedIndex === 6 ? inputColor : color, backgroundColor: selectedIndex === 6 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 6 ? color : colorContentHoverHeader } }}
                    label="Chương trình nấu ăn"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 7)}
                    sx={{ fontSize: 15, color: selectedIndex === 7 ? inputColor : color, backgroundColor: selectedIndex === 7 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 7 ? color : colorContentHoverHeader } }}
                    label="Nấu ăn"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 8)}
                    sx={{ fontSize: 15, color: selectedIndex === 8 ? inputColor : color, backgroundColor: selectedIndex === 8 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 8 ? color : colorContentHoverHeader } }}
                    label="Thú cưng"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 9)}
                    sx={{ fontSize: 15, color: selectedIndex === 9 ? inputColor : color, backgroundColor: selectedIndex === 9 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 9 ? color : colorContentHoverHeader } }}
                    label="Nghệ thuật thị giác"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 10)}
                    sx={{ fontSize: 15, color: selectedIndex === 10 ? inputColor : color, backgroundColor: selectedIndex === 10 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 10 ? color : colorContentHoverHeader } }}
                    label="Trò chơi"
                />
            </Link>
            <Link to="" className="toolbar-link">
                <Chip
                    onClick={(event) => handleListItemClick(event, 11)}
                    sx={{ fontSize: 15, color: selectedIndex === 11 ? inputColor : color, backgroundColor: selectedIndex === 11 ? color : '', border: '1px solid #d2d2d2', ':hover': { backgroundColor: selectedIndex === 11 ? color : colorContentHoverHeader } }}
                    label="Hành động phiêu lưu"
                />
            </Link>
        </Stack>
    )
}
export default ToolBar;