import { useEffect } from 'react';
import { ToolBar } from './export'
import { Video } from "./export";
import './Home.scss';


function Home() {

    useEffect(() => {
        document.title = 'Trang chủ - Youtube';
    }, []);

    return (
        <div className="home">
            <ToolBar />
            <Video />
        </div>
    )
}

export default Home;