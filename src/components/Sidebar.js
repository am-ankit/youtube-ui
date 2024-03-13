import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return !isMenuOpen ? null : (
        <div className="shadow-lg w-40 p-5">
            <ul className="cursor-pointer">
                <li className="hover:bg-gray-200"><Link to="/">Home</Link></li>
                <li className="hover:bg-gray-200">Shorts</li>
                <li className="hover:bg-gray-200">Subscriptions</li>
            </ul>  

            <h1 className="font-bold mt-2 cursor-pointer">Subscriptions</h1>
            <ul className="cursor-pointer">
                <li className="hover:bg-gray-200">Music</li>
                <li className="hover:bg-gray-200">Sports</li>
                <li className="hover:bg-gray-200">Gaming</li>
                <li className="hover:bg-gray-200">Movies</li>
            </ul>

            <h1 className="font-bold mt-2 cursor-pointer">Watch Later</h1>
            <ul className="cursor-pointer">
                <li className="hover:bg-gray-200">Music</li>
                <li className="hover:bg-gray-200">Sports</li>
                <li className="hover:bg-gray-200">Gaming</li>
                <li className="hover:bg-gray-200">Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar;