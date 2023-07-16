import React, { useState } from 'react'
import { PokeMartContainer } from './PokeMartContainer';

export const PokemonCenter = (props) => {
    const [pokemonCenterState,setPokemonCenterState] = useState("pokemonCenter");
    const pokemonCenterDiv = 
        <div id='pokemonCenter' className='modalDialog' style={{"display":"grid","gridTemplateColumns":"50% 50%","gridTemplateRows":"50% 50%"}}>
            <button onClick={()=>{props.player.healAllPokemons()}} style={{"gridRow":"1","gridColumn":"1"}}>Heal Pokemon</button>
            <button onClick={()=>{setPokemonCenterState('pokeMart')}} style={{"gridRow":"1","gridColumn":"2"}}>PokeMart</button>
            <button style={{"gridRow":"2","gridColumn":"1 / 3"}}>PC</button>
        </div>
    let pokemonCenterToReturn;
    switch(pokemonCenterState) {
        case "pokemonCenter": pokemonCenterToReturn = pokemonCenterDiv;
        break;
        case "pokeMart": pokemonCenterToReturn = <PokeMartContainer player={props.player}/>;
        break;
        default: pokemonCenterToReturn = "Error";
        
    }
  return (
    <div id='pokemonCenterContainer' style={{"display":"none"}} className='modalContainer'>
        {pokemonCenterToReturn}
    </div>
  )
}
