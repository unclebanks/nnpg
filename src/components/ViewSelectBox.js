import React from 'react'

export const ViewSelectBox = (props) => {
  return (
    <div id="viewSelectBox" style={{"gridRow":"2","gridColumn":"2","height":"100%","width":"100%","backgroundColor":"lightyellow"}}>
        <button id="viewRoster" className="button">Pokemon</button>
        <button id="viewStorage" className="button">Storage</button>
        <button id="viewPokeDex" className="button">PokeDex</button>
        <button onClick={()=>{props.userInteractions.viewInventory()}} className="button">Inventory</button><br/>
        <button onClick={()=>{props.userInteractions.viewSettings()}} className="button">Settings</button><br/>
    </div>
  )
}
