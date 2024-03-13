import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, {RedBorderVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {

    const [popularVideos, setPopularVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setPopularVideos(json.items);
    }

    if(!popularVideos[0]) return (
        <div className="flex flex-wrap">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
        </div>
    )

    return(
        <div className="flex flex-wrap">
            {popularVideos[0] && <RedBorderVideoCard data={popularVideos[0]}/>}
            {popularVideos.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard data={video}/>
                </Link>
            ))}
        </div>
    )
}

export default VideoContainer;