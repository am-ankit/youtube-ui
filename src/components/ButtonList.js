import Button from "./Button";
import {buttonList} from "../utils/constants";

const ButtonList = () => {

    return (
        <div className="whitespace-nowrap">
            {buttonList.map((item, index) => <Button key={index} name={item}/>)}
        </div>
    )
}

export default ButtonList;