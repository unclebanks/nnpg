import { useSelector } from "react-redux";
import { TownBox } from "./TownBox";
import { RouteBox } from "./RouteBox";
import "../styles/MainBox.css";


export function MainBox() {

    const containerType = useSelector((state)=> state.location.value.type);
    let containerToDisplay;

    switch(containerType) {
        case "town": containerToDisplay = <TownBox />;
        break;
        case "route": containerToDisplay = <RouteBox />;
        break;
        default: containerToDisplay = "Error";
    }

    return(
        <div id="mainBoxContainer">
            {containerToDisplay}
        </div>
    )
}