import { useState } from 'react';
import './App.css';
import { BattleContainer } from './components/BattleContainer';
import { MainContainer } from './components/MainContainer';
import { NewGameContainer } from './components/NewGameContainer';
import { Utils } from './scripts/Utils';

function App() {

  const saveFile = localStorage.getItem("nnpg")? Utils.loadSave() : "";
  // ^^^ this Utils.loadSave() needs to be updated to load all the saved information to Redux and/or set state where required

  const [appComponentToReturn, setAppComponentToReturn] = useState("newGame");

  let appSubComponent;

  const changeAppComponentToReturn = (newValue) => {
    if(appComponentToReturn !== newValue) {
      console.log(`Settings component to ${newValue}`)
      setAppComponentToReturn(newValue);
    }
  }
  switch(appComponentToReturn) {
    case "newGame": appSubComponent = <NewGameContainer changeAppPage={changeAppComponentToReturn}/>;
    break;
    case "battle": appSubComponent = <BattleContainer changeAppPage={changeAppComponentToReturn}/>;
    break;
    case "main": appSubComponent = <MainContainer changeAppPage={changeAppComponentToReturn}/>;
    break;
    default: appSubComponent = "Error, please refresh the page"
  }


  return (
    <div className="App">
      {/* <RegionBox />
      <MainBox />
      <CurrencyBox />
      <BallBox /> */
      appSubComponent
      }
    </div>
  );
}

export default App;
