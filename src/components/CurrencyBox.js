import React from "react";
import { useSelector } from "react-redux";

export function CurrencyBox() {

    const currency = useSelector((state)=> state.currency.value);
    return(
        <div id="currencyBoxContainer">
            <span>PokeCoins: {currency.pokeCoins}</span><br/>
            <span>BattleCoins: {currency.battleCoins}</span><br/>
            <span>CatchCoins: {currency.catchCoins}</span><br/>
            <span>EvoCoins: {currency.evoCoins}</span><br/>
        </div>
    )
}