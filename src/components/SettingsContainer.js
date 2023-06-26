import React from 'react'

export const SettingsContainer = (props) => {
  return (
    <div id="settingsContainer" className="modalContainer" style={{"display":"none"}}>
        <div id="settingsDialog" className="modalDialog">
            <div>
                <h3 id="settingsTitle" className="modalTitle">Settings</h3>
            </div>
            <div>
                <h4>Visual Settings</h4>
                <p>Choose which sprite You want to display htmlFor your pokemon:</p>
                <p>
            <span className="spriteChoice">
              <input type="radio" id="spriteChoiceBack" name="spriteChoice" onChange={()=>{props.userInteractions.changeSpriteChoice()}} /><label htmlFor="spriteChoiceBack">Back</label>
              <input type="radio" id="spriteChoiceFront" name="spriteChoice" onChange={()=>{props.userInteractions.changeSpriteChoice()}} /><label htmlFor="spriteChoiceFront">Front</label>
            </span>
                </p>
                <h4>Import and Export Save</h4>
                <p><button onClick={()=>{props.userInteractions.forceSave()}}>Force Save</button> <span id="forceSave" style={{"color":"red"}}>Saved!</span></p>
                <p><button onClick={()=>{props.userInteractions.exportSaveDialog()}}>Export</button></p>
                <p><button onClick={()=>{props.userInteractions.importSaveDialog()}}>Import</button></p>
                <h4>Clear Game Data</h4>
                <p style={{"color":"red","fontWeight":"bold"}}>Warning! This cannot be undone.</p>
                <p><input type="checkbox" id="confirmClearData"/>
                    <a href="#" style={{"color":"red"}} onClick={()=>{props.userInteractions.clearGameData()}}>Clear game data</a>
                </p>
            </div>
        </div>
    </div>
  )
}
