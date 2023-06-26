import './App.css';
import { GameContainer } from './components/GameContainer';
import { ModalPopup } from './components/ModalPopup';
import { SaveDialogue } from './components/SaveDialogue';
import { InventoryContainer } from './components/InventoryContainer';
import { SettingsContainer } from './components/SettingsContainer';
import { TownContainer } from './components/TownContainer';
import { StoryContainer } from './components/StoryContainer';
import { player,dom,userInteractions,combatLoop,enemy,town } from './modules/main';
import { renderView } from './modules/display';
import { useEffect } from 'react';

function App() {
  const startGame = () => {  
  if (localStorage.getItem(`totalPokes`) !== null) {
      player.loadPokes();
      dom.refreshCatchOption(player.settings.catching);
      userInteractions.changeRoute(player.settings.currentRouteId);
  } else {
      combatLoop.pause(enemy);
      document.getElementById('storyContainer').style.display = 'block';
  }

if (player.settings.spriteChoice === 'front') {
    document.getElementById('spriteChoiceFront').checked = true;
    document.getElementById('player').className += ' frontSprite'
} else {
    document.getElementById('spriteChoiceBack').checked = true
}

dom.bindEvents();
dom.renderBalls(player);
dom.renderCurrency(player);

renderView(dom,enemy, player);
dom.renderListBox(player);
dom.renderPokeSort(player);

combatLoop.init(player,enemy,dom);

requestAnimationFrame(function renderTime() {
    requestAnimationFrame(renderTime)
});
}
useEffect(() => {
  startGame()
}, [])

  return (
    <div className="App">
      <GameContainer player={player} userInteractions={userInteractions} combatLoop={combatLoop} enemy={enemy} dom={dom} town={town}/>
      <ModalPopup />
      <SaveDialogue userInteractions={userInteractions}/>
      <InventoryContainer />
      <SettingsContainer />
      <TownContainer />
      <StoryContainer userInteractions={userInteractions} startGame={startGame} dom={dom} player={player} enemy={enemy} combatLoop={combatLoop}/>
    </div>
  );
}

export default App;
