import React from 'react'

export const PlayerBox = () => {
  return (
    <div id="playerBox" style={{"gridRow":"1","gridColumn":"2","backgroundColor":"lightyellow"}}>
        <div className="pokeBox">
            <span className="name"></span><br/>
            <img id="playerImg" className="img" src="" alt=""/><br/>
            <span className="hp"></span><br/>
            <span>hp: </span>
            <progress className="hpBar" value="0" max="100"></progress><br/>
            <progress className="expBar" value="0" max="100"></progress>
            <br/>
            <span className="status"></span>
        </div>
    </div>
  )
}
