import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { MENU_BAR, PROFILE_LOGO, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const  Header = () =>{

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const dispatch = useDispatch();
    const searchCache = useSelector(store => store.search);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    useEffect(() => {
        const timer = setTimeout(() => {

            if(!searchCache[searchQuery]){
                getSearchSuggestions();
            }
            }, 200);

            return () => {
                clearTimeout(timer);
            }
            
    },[searchQuery]);

    const getSearchSuggestions = async() => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    }

    return(
        <div className="grid grid-flow-col m-2 p-2 shadow-lg">
            <div className="flex col-span-1">
                <img alt="menu" src={MENU_BAR}
                className="h-6 cursor-pointer"
                onClick={toggleMenuHandler}
                />
                <img alt="youtube-logo" src={YOUTUBE_LOGO}
                     className="h-5 mx-2 cursor-pointer"
                />
            </div>

            <div className="col-span-10 px-10">
                <input 
                    type="text" 
                    className="border border-gray-400 rounded-l-full w-1/2 p-2"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />
                <button 
                    className="py-2 px-2 border border-gray-400 rounded-r-full bg-gray-100"
                    onClick={getSearchSuggestions}
                >🔍</button>
                {(showSuggestion) && (suggestions.length > 1) && 
                <div>
                <ul className="bg-white absolute m-2 p-2 w-96 rounded-lg shadow border border-gray-200">
                    {suggestions.map((result) => (
                        <li key={result} className="m-1 p-1 hover:bg-gray-200">{result}</li>
                    ))}
                </ul>
                </div>}
            </div>          

            <div className="col-span-1">
                <img alt="user" src={PROFILE_LOGO}
                className="h-8 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Header;