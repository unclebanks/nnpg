import React from 'react'
import { ROUTES } from '../modules/routes';
import { getRouteIndexByName } from '../modules/utilities';

export const RoutesBox = (props) => {
  let routeButtons = [];
  let i = 1;
  while(i<ROUTES[props.player.settings.currentRegionId].length) {
    let routeName = ROUTES[props.player.settings.currentRegionId][i]['name']
    routeButtons.push(<button onClick={()=>{props.userInteractions.changeRoute(routeName, true,props.player,props.dom,props.combatLoop,props.enemy)}}>{routeName}</button>);
    i++;
  }
  return (
    <div id="routesBox" style={{"display":"grid","gridTemplateRows":"10% 90%","gridRow":"1 / 3","gridColumn":"4","backgroundColor":"lightyellow"}}>
        <select id="regionSelect" onChange={()=>{props.userInteractions.changeRegion()}} style={{"fontSize":"xx-large","textAlign":"center"}}>
            <option value="Kanto">Kanto</option>
            <option value="Johto">Johto</option>
        </select>
        <div id="routeList" style={{"display":"grid","gridTemplateRows":`repeat(1fr,${routeButtons.length})`,"overflow":"auto"}}>
          {routeButtons}
        </div>
    </div>
  )
}
