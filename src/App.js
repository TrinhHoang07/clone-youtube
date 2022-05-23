import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoute, privateRoute, privateRouteSpecial, publicRouteSpecial } from './routes';
import DefaultLayout from './Layout/DefaultLayout';
import Layout from './Pages/YourChannel/Layout';
import { useSelector } from 'react-redux';
import { AddVideoForm } from './Pages';


export const bgThemeContext = createContext();
function App() {

  const isUser = useSelector(state => state.isUser);

  const [bgColor, setBgColor] = useState('#f2f2f2');
  const [leftColor, setLeftColor] = useState('#fff');
  const [inputColor, setInputColor] = useState('#fff');
  const [colorHover, setColorHover] = useState('#f2f2f2');
  const [historyColor, setHistoryColor] = useState('#e8e8e8');
  const [shortColor, setShortColor] = useState('#e4e4e4');
  const [actionColor, setActionColor] = useState('#606060');
  const [borderColor, setBorderColor] = useState('#d7d7d7');
  const [colorSkeleton, setColorSkeleton] = useState('#d2d2d2');
  const [color, setColor] = useState('#333');
  const [colorContentHoverHeader, setColorContentHoverHeader] = useState('#d0d0d0');
  const [checked, setChecked] = useState(false);
  const [isAddVideo, setIsAddVideo] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [checkedRadio, setCheckedRadio] = useState(0);

  const handleOpenAddVideo = () => {
    setIsAddVideo(true);
  }

  const handleCloseAddVideo = () => {
    setIsAddVideo(false);
  }

  const handleToggleColorSkeleton = () => {
    setColorSkeleton(colorSkeleton === '#d2d2d2' ? '#212121' : '#d2d2d2');
  }

  const handleCheckedRadio = (event, index) => {
    setCheckedRadio(index);
  };

  const handleToggleBorderColor = () => {
    setBorderColor(borderColor === '#d7d7d7' ? 'transparent' : '#d7d7d7');
  }

  const handleToggleHistoryColor = () => {
    setHistoryColor(historyColor === '#e8e8e8' ? '#121212' : '#e8e8e8');
  }

  const handleToggleShortColor = () => {
    setShortColor(shortColor === '#e4e4e4' ? '#212121' : '#e4e4e4');
  }

  const handleToggleActionColor = () => {
    setActionColor(actionColor === '#606060' ? '#aaaaaa' : '#606060');
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleToggleColorContentHeader = () => {
    setColorContentHoverHeader(colorContentHoverHeader === '#d0d0d0' ? '#4d4d4d' : '#d0d0d0');
  }

  const handleChecked = () => setChecked(checked => !checked);

  const handleToggleBgColor = () => {
    setBgColor(bgColor === '#f2f2f2' ? '#181818' : '#f2f2f2');
  }

  const handleSetColorHover = () => {
    setColorHover(colorHover === '#f2f2f2' ? '#383838' : '#f2f2f2');
  }

  const handleToggleLeftColor = () => {
    setLeftColor(leftColor === '#fff' ? '#212121' : '#fff');
  }

  const handleToggleInputColor = () => {
    setInputColor(inputColor === '#fff' ? '#121212' : '#fff');
  }

  const handleToggleColor = () => {
    setColor(color === '#333' ? '#fff' : '#333');
  }
  const value = {
    colorSkeleton,
    borderColor,
    checkedRadio,
    historyColor,
    actionColor,
    shortColor,
    colorContentHoverHeader,
    colorHover,
    selectedIndex,
    color,
    bgColor,
    checked,
    leftColor,
    inputColor,
    handleOpenAddVideo,
    handleCloseAddVideo,
    handleToggleColorSkeleton,
    handleToggleBorderColor,
    handleCheckedRadio,
    handleToggleHistoryColor,
    handleToggleActionColor,
    handleToggleShortColor,
    handleToggleColorContentHeader,
    handleSetColorHover,
    handleToggleColor,
    handleChecked,
    handleToggleBgColor,
    handleListItemClick,
    handleToggleLeftColor,
    handleToggleInputColor
  }
  return (

    <bgThemeContext.Provider value={value}>
      <div className="App" style={{ backgroundColor: bgColor }}>
        {isAddVideo && <AddVideoForm />}
        <Routes>
          {publicRoute.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<DefaultLayout><Page /></DefaultLayout>} />
          })}
        </Routes>

        <Routes>
          {publicRouteSpecial.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>

        {isUser && <Routes>
          {privateRoute.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<DefaultLayout><Layout><Page /></Layout></DefaultLayout>} />
          })}
        </Routes>}

        {isUser && <Routes>
          {privateRouteSpecial.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<DefaultLayout><Page /></DefaultLayout>} />
          })}
        </Routes>}


      </div>
    </bgThemeContext.Provider>
  );
}

export default App;
