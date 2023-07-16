import React from 'react'

export const ListBox = (props) => {
  return (
    <div id="listBox" style={{"gridColumn":"1","gridRow":"1 / 3","height":"100%","width":"100%","backgroundColor":"lightyellow"}}>
        <div id="rosterBox" style={{"display":"none"}}>
            <input type="checkbox" id="enableDelete"/><label htmlFor="enableDelete"><span className="checkDescription">Manage Team</span></label>
            <ul id="rosterList"></ul>
        </div>
        <div id="storageBox" style={{"display":"none"}}>
            <input type="checkbox" id="autoSort"/><label htmlFor="autoSort"><span className="checkDescription">Auto sort</span></label><br/>
            <select id="pokeSortOrderSelect" onChange={()=>{props.userInteractions.changePokeSortOrder()}}>
                <option value="lvl">Level</option>
                <option value="dex">Pokedex #</option>
                <option value="vlv">Level, attack</option>
                <option value="time">Newest</option>
            </select>
            <select id="pokeSortDirSelect" onChange={()=>{props.userInteractions.changePokeSortOrder()}}>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
            <ul id="storageList" className="manageTeamEnabled"></ul>
        </div>
        <div id="pokedexBox" style={{"display":"none"}}>
            <select id="dexView" style={{"display":"none"}}>
                <option value="all">All</option>
            </select>
            <ul id="dexList"></ul>
        </div>
    </div>
  )
}
