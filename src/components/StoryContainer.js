import React from 'react';
import { Pokemon } from '../modules/poke';
import { pokeById,POKEDEXFLAGS } from '../modules/main';
import { $, getPokemonDataByName } from '../modules/utilities';
import { renderView } from '../modules/display';
import { PokemonFNImageImport } from '../data/PokemonFrontNormalImageImports';

export const StoryContainer = (props) => {

    const selectFirstPoke = (id,dom,player,combatLoop,enemy,userInteractions) => {
        let starterPoke = new Pokemon(getPokemonDataByName(id), 5);
        player.addPoke(starterPoke);
        player.addPokedex(starterPoke.name, POKEDEXFLAGS.ownNormal);
        player.setActive(0);
        combatLoop.unpause(enemy,player,dom,userInteractions);
        renderView(dom, enemy, player);
        dom.renderListBox(player);
        $(`#storyContainer`).style.display = 'none';
    }

return (
<div id="storyContainer" className="modalContainer" style={{"display":"none"}}>
    <div id="storyDialog" className="modalDialog">
        <div style={{"height":"100%","width":"100%","display":"grid","gridTemplateRows":"10% 50% 30% 10%"}}>
            <div>
                <h3 id="storyTitle" className="modalTitle">Welcome To The World of Pokemon!</h3>
            </div>
            <div>Please take a pokemon</div>
            <div style={{"display":"grid","gridTemplateColumns":"25% 25% 25% 25%"}}>
                <div style={{"backgroundColor":"lightgreen","display":"grid","gridTemplateRows":"10% 70% 20%"}}>
                    <div style={{"textAlign":"center"}}>Bulbasaur LV. 5</div>
                    <div style={{"display":"grid","gridTemplateColumns":"30% 40% 30%"}}>
                        <div></div>
                        <img src={PokemonFNImageImport[0].bulbasaur} alt='Bulbasaur'/>
                        <div></div>
                    </div>
                    <button onClick={()=>{selectFirstPoke('Bulbasaur',props.dom,props.player,props.combatLoop,props.enemy,props.userInteractions)}}>SELECT</button>
                </div>
                <div style={{"backgroundColor":"lightcoral","display":"grid","gridTemplateRows":"10% 70% 20%"}}>
                    <div style={{"textAlign":"center"}}>Charmander LV. 5</div>
                    <div style={{"display":"grid","gridTemplateColumns":"30% 40% 30%"}}>
                        <div></div>
                        <img src={PokemonFNImageImport[3].charmander} alt='Charmander'/>
                        <div></div>
                    </div>
                    <button onClick={()=>{selectFirstPoke('Charmander',props.dom,props.player,props.combatLoop,props.enemy,props.userInteractions)}}>SELECT</button>
                </div>
                <div style={{"backgroundColor":"lightskyblue","display":"grid","gridTemplateRows":"10% 70% 20%"}}>
                    <div style={{"textAlign":"center"}}>Squirtle LV. 5</div>
                    <div style={{"display":"grid","gridTemplateColumns":"30% 40% 30%"}}>
                        <div></div>
                        <img src={PokemonFNImageImport[6].squirtle} alt='Squirtle'/>
                        <div></div>
                    </div>
                    <button onClick={()=>{selectFirstPoke('Squirtle',props.dom,props.player,props.combatLoop,props.enemy,props.userInteractions)}}>SELECT</button>
                </div>
                <div style={{"backgroundColor":"lightyellow","display":"grid","gridTemplateRows":"10% 70% 20%"}}>
                    <div style={{"textAlign":"center"}}>Pikachu LV. 5</div>
                    <div style={{"display":"grid","gridTemplateColumns":"30% 40% 30%"}}>
                        <div></div>
                        <img src={PokemonFNImageImport[24].pikachu} alt='Pikachu'/>
                        <div></div>
                    </div>
                    <button onClick={()=>{selectFirstPoke('Pikachu',props.dom,props.player,props.combatLoop,props.enemy,props.userInteractions)}}>SELECT</button>
                </div>
            </div>
            <button id="storyClose" onClick={()=>{props.userInteractions.closeStory()}}>Close</button>
        </div>
    </div>
</div>
)
}