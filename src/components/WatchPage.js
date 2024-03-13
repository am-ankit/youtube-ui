import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, storeVideoData } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
// import { GOOGLE_API_KEY } from "../utils/constants";


const WatchPage = () => {

    const dispatch = useDispatch();
    const data = useSelector(store => store.app.storeVideoData);
    const [searchParams] = useSearchParams();

    

    useEffect(() => {
        dispatch(closeMenu());
        getVideoData();
    },[])

    const getVideoData = async () => {
        
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + searchParams.get("v") + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY);
        const json = await data.json();
        dispatch(storeVideoData(json.items));
    }

    return (
        <div>
            <iframe width="640px" height="360px" src={"https://www.youtube.com/embed/" + 
            searchParams.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="rounded-3xl m-2 p-2"
            >
            </iframe>          
        </div>
    )
}

export default WatchPage;