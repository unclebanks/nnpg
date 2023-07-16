import React from 'react'

export const InventoryContainer = () => {
  return (
    <div id="inventoryContainer" className="modalContainer" style={{"display":"none"}}>
        <div id="inventoryDialog" className="modalDialog">
            <div>
                <h3>Badges</h3>
                <ul id="badgeList">
                    <li>Nothing</li>
                </ul>
                <h3>Inventory</h3>
                <ul id="inventoryList">
                    <li>Nothing</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
