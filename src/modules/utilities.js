import { ROUTES } from "./routes";
import { POKEDEX } from "./db";

export function RNG(chance) {
    const rnd = Math.random() * 100;
    return (rnd < chance);
}

export function cloneJsonObject(object) {
    return JSON.parse(JSON.stringify(object));
}
export function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}
export function mergeArray(arr1, arr2) {
    if (arr1.length === 0 && arr2.length > 0) {
        return arr2;
    }
    if (arr2.length === 0 && arr1.length > 0) {
        return arr1;
    }
    if (arr1.length > 0 && arr2.length > 0) {
        return arr1.concat(arr2);
    }
    return [];
}
export function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
export function camalCaseToString(text) {
    let result = text.replace( /([A-Z])/g, " $1" );
    return result.charAt(0).toUpperCase() + result.slice(1);
}
export function flash(element) {
    let op = 1;  // initial opacity
    let fadeOut = true;
    let timer = setInterval(function () {
        if (op <= 0.1) {
            fadeOut = false;
        }
        if (op >= 1 && !fadeOut) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        if (fadeOut) {
            op -= op * 0.1;
        } else {
            op += op * 0.1;
        }
    }, 10);
}

export const $ = (cssQuery) => document.querySelector(cssQuery);

export function getRouteIndexByName(region,routeName) {
    let i = 0;
    while(i < ROUTES[region].length) {
        if(ROUTES[region][i].name === routeName) {
            return i;
        } else { i++; }
    }
}
export function getPokeIdByName(name) {
    let i = 0;
    while(i < POKEDEX.length) {
        if(POKEDEX[i].name === name) {
            return i;
        } else { i++; }
    }
}
export function getPokemonDataByName(name) {
    let i = 0;
    while(i < POKEDEX.length) {
        if(POKEDEX[i].name === name) {
            return POKEDEX[i];
        } else { i++; }
    }
}