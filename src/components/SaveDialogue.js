import React from 'react'

export const SaveDialogue = (props) => {
  return (
    <div id="saveDialogContainer" className="modalContainer" style={{"display":"none"}}>
        <div id="saveDialog" className="modalDialog">
            <div>
                <button id="copySaveText" onClick={()=>{props.userInteractions.copySaveText()}} style={{"display":"none"}}>Copy to clipboard</button>
                <h3 id="saveDialogTitle" className="modalTitle">Export your save</h3>
            </div>
            <textarea id="saveText" placeholder="Paste the save data here"></textarea>
            <div id="loadButtonContainer" style={{"display":"none"}}>
                <button onClick={()=>{props.userInteractions.importSave()}}>Load</button>
            </div>
        </div>
    </div>
  )
}
