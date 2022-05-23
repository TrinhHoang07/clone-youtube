import { ToolBar } from './export'
import { Video } from "./export";
import './Home.scss';


function Home() {
    return (
        <div className="home">
            <ToolBar />
            <Video />
        </div>
    )
}

export default Home;