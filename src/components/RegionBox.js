import React from "react";
import { useSelector } from "react-redux/es/exports"
import { Utils } from "../scripts/Utils";
import { ROUTES } from "../scripts/Routes";

export function RegionBox() {

    const location = useSelector((state) => state.location.value);
    const routesData = Utils.createArray(ROUTES[location.currentRegionId]);
    console.log(routesData);
    let createRouteButton = (route) => {
        return(
            <button id={route.name} key={route.id}>
                {route.name}
            </button>
        )
    };

    return(
        <div id="regionBoxContainer">
            <div id="regionSelectContainer">
                <span>RegionSelect</span>
                <div>
                    <button>Kanto</button>
                    <button>Johto</button>
                    <button>Hoenn</button>
                    <button>Sinnoh</button>
                    <button>Kalos</button>
                </div>
            </div>
            <div id="routeList">
                <ul>
                    {routesData.map(createRouteButton, this)}
                </ul>
            </div>
        </div>
    )
}