import React from 'react'
import { ListBox } from './ListBox'
import { RoutesBox } from './RoutesBox'
import { ViewSelectBox } from './ViewSelectBox'
import { InvBox } from './InvBox'
import { EnemyBox } from './EnemyBox'
import { PlayerBox } from './PlayerBox'

export const GameContainer = (props) => {
  return (
    <div id="gameContainer"style={{"height":"100%","width":"100%","display":"grid","gridTemplateColumns":"20% 30% 30% 20%","gridTemplateRows":"50% 50%"}}>
        <ListBox userInteractions={props.userInteractions}/>
        <RoutesBox userInteractions={props.userInteractions} player={props.player} combatLoop={props.combatLoop} dom={props.dom} enemy={props.enemy}/>
        <ViewSelectBox userInteractions={props.userInteractions}/>
        <InvBox />
        <EnemyBox userInteractions={props.userInteractions} player={props.player} town={props.town}/>
        <PlayerBox />
    </div>
  )
}
