import React from 'react'

export const TownContainer = () => {
  return (
    <div id="townContainer" className="modalContainer" style={{"display":"none"}}>
        <div id="townDialog" className="modalDialog">
            <div>
                <h3 id="townTitle" className="modalTitle">Town</h3>
            </div>
            <div id="townBuildings">
                <div id="pokecoinShop" className="townBuilding">
                    <h4>PokeCoin Shop</h4>
                    <ul id="pokecoinShopItems">
                    </ul>
                    <div id="battlecoinShop">
                        <h4>BattleCoin Shop</h4>
                        <ul id="battlecoinShopItems">
                        </ul>
                    </div>
                    <div id="catchcoinShop">
                        <h4>CatchCoin Shop</h4>
                        <ul id="catchcoinShopItems">
                        </ul>
                    </div>
                </div>
                <div id="trader" className="townBuilding">
                    <h4>Poke Trader</h4>
                    Buy Pokemon
                    <ul id="traderBuyList" className="traderList">
                        <li>Nothing yet</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
