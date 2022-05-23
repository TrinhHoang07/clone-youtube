import { useContext, useRef, useEffect, useState } from "react";
import VideoShort from "./VideoShort";
import './Short.scss';
import { bgThemeContext } from '../../App';
import axios from 'axios';
import ShortSkeleton from '../Skeleton/ShortSkeleton';

function Short() {
    const theme = useContext(bgThemeContext);
    const { bgColor } = theme;
    const shortRef = useRef();
    const [loading, setLoading] = useState(true);
    const [shorts, setShorts] = useState([]);

    useEffect(() => {
        console.log("call api");
        axios.get('https://json-by-hoang07.herokuapp.com/api/shorts')
            .then(res => {
                setShorts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleScrollingDown = () => {
        shortRef.current.scrollTo({
            behavior: 'smooth',
            top: shortRef.current.scrollTop + 350,
        })
    }
    const handleScrollingUp = () => {
        shortRef.current.scrollTo({
            behavior: 'smooth',
            top: shortRef.current.scrollTop - 350,
        })
    }

    const data = {
        handleScrollingDown,
        handleScrollingUp
    }
    return (
        <div className="wrapper-short" ref={shortRef} style={{ backgroundColor: bgColor }}>
            {loading ? (<ShortSkeleton />) : (
                shorts.map(short => (
                    <VideoShort data={data} key={short.id} des={short.description} iname={short.name} avatar={short.avatar} video={short.video} />
                ))
            )}
        </div>
    )
}

export default Short;