import React from 'react'

export const EnemyBox = (props) => {
  return (
    <div id="enemyBox" style={{"gridRow":"1","gridColumn":"3","width":"100%","height":"100%","backgroundColor":"lightyellow"}}>
        <div className="pokeBox">
            <span className="name"></span><br/>
            <img id="enemyImg" className="img" src="" alt=""/><br/>
            <span className="hp"></span><br/>
            <span>hp: </span>
            <progress className="hpBar" value="0" max="100"></progress>
            <br/>
            <span className="status"></span>
        </div>
        <div id="townBox" style={{"display":"none"}}>
            <button onClick={()=>{props.userInteractions.viewTown(props.town,props.player)}} className="button">Town</button>
            <button onClick={()=>{props.userInteractions.trainerBattle()}} className="button" id="trainerButton">Trainer Battle</button>
        </div>
    </div>
  )
}
