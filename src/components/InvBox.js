import React from 'react'

export const InvBox = (props) => {
  return (
    <div id="invBox" style={{"gridRow":"2","gridColumn":"3","height":"100%","width":"100%","backgroundColor":"lightyellow"}}>
        <p>Catch: <label><input type="checkbox" id="enableCatchAll"/>All</label> <label><input type="checkbox" id="enableCatchNew"/><span>New</span></label></p>
        <input type="radio" name="name" value="pokeball" onClick={()=>{props.userInteractions.changeSelectedBall('pokeball')}} id="pokeball"/>
        <label htmlFor="pokeball">
          <span title="Pokeball">
            <img className="pokeballImg" src="assets/images/pokeballs/poke.png" height="14px" width="14px"/> 
          </span>Pokeballs: <span className="ball-amount pokeball">10</span></label><br/>
        <input type="radio" name="name" value="greatball" onClick={()=>{props.userInteractions.changeSelectedBall('greatball')}} id="greatball"/><label htmlFor="greatball"><span title="Greatball"><img className="greatballImg" src="assets/images/pokeballs/great.png" height="14px" width="14px"/></span>Greatballs: <span className="ball-amount greatball">0</span></label><br/>
        <input type="radio" name="name" value="ultraball" onClick={()=>{props.userInteractions.changeSelectedBall('ultraball')}} id="ultraball"/><label htmlFor="ultraball"><span title="Ultraball"><img className="UltraballImg" src="assets/images/pokeballs/ultra.png" height="14px" width="14px"/></span>Ultraballs: <span className="ball-amount ultraball">0</span></label><br/>
        <input type="radio" name="name" value="ultraball" onClick={()=>{props.userInteractions.changeSelectedBall('masterball')}} id="masterball"/><label htmlFor="masterball"><span title="Masterball"><img className="MasterballImg" src="assets/images/pokeballs/master.png" height="14px" width="14px"/></span>Masterballs: <span className="ball-amount masterball">0</span></label><br/>
        <span>Currency:</span><br/>
        <span title="PokeCoins" id="pokeC">
          <img className="pokecoins" src="assets/images/currency/PokeCoin.png" height="16" width="16"/>
        </span> 
        <span>PokeCoins:</span> 
        <span id="pokeCoins">0</span><br/>
        <span title="CatchCoins" id="catchC"><img className="catchcoins" src="assets/images/currency/CatchCoin.png" height="16" width="16"/></span> CatchCoins: <span id="catchCoins">0</span><br/>
        <span title="BattleCoins" id="battleC"><img className="battlecoins" src="assets/images/currency/BattleCoin.png" height="16" width="16"/></span> BattleCoins: <span id="battleCoins">0</span><br/>
    </div>
  )
}
