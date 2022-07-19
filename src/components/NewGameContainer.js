import React, { useState } from "react";
import "../styles/NewGameContainer.css";

export const NewGameContainer = () => {

    const [currentNewGamePage, setNewGamePage] = useState("page1");
    let newGamePage;

    const newGame1 = 
        <div id="newGamePage1">
            <span>Page1</span>
            <button onClick={()=>{setNewGamePage("page2")}}>Next</button>
        </div>

    const newGame2 = 
        <div id="newGamePage2">
            <span>Page2</span>
            <button onClick={()=>{setNewGamePage("page1")}}>Previous</button>
        </div>

    switch(currentNewGamePage) {
        case "page1": newGamePage = newGame1;
        break;
        case "page2": newGamePage = newGame2;
        break;
        default: newGamePage = "Error, please reload the page.";
    }

    return(
        <div id="newGameContainer">
            {newGamePage}
        </div>
    )
}