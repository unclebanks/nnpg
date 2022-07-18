import React from "react";
import { BallBox } from './BallBox';
import { CurrencyBox } from './CurrencyBox';
import { MainBox } from './MainBox';
import { RegionBox } from './RegionBox';

export const MainContainer = () => {

    return(
        <div id="mainContainer">
            <RegionBox />
            <MainBox />
            <CurrencyBox />
            <BallBox />
        </div>
    )
}