import { $,flash, getPokeIdByName } from './utilities';
//import { ROUTES } from './routes';
import { POKEDEX } from './db';
import {POKEDEXFLAGS} from './main';
import { PokemonFNImageImport } from '../data/PokemonFrontNormalImageImports';
import { PokemonBNImageImport } from '../data/PokemonBackNormalImageImports';

export class Display {
    setValue(domElement, newValue, append) {
        if (append === undefined) { append = false }
        if (append) {
            domElement.innerHTML += newValue;
        }
        if (!append) {
            if (domElement.innerHTML !== newValue) {
                domElement.innerHTML = newValue;
            }
        }
    };
    getValue(domElement) {
        return domElement.innerHTML;
    };
    setProp(domElement, attribute, newValue) {
        if (domElement[attribute] !== newValue) {
            domElement[attribute] = newValue
        }
    };
    renderPokeOnContainer(id, poke, face,player) {
        const container = $('#' + id + 'Box').querySelector('.pokeBox');
        const townBox = $('#townBox');
        //const trainerButton = $('#trainerButton');
        if (!poke) {
            container.style.display = 'none';
            if (id === 'enemy') {
                townBox.style.display = 'block';
                //let route = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];

            }
            return null;
        } else {
            container.style.display = 'block';
            if (id === 'enemy')
                townBox.style.display = 'none';
        }
        face = face || 'front';
        const pokeStatusAsText = (poke) => {
            let output = '';
            output += 'Attack Speed: ' + poke.attackSpeed()/1000 + '<br>';
            output += '\nAttack: ' + poke.avgAttack() + '<br>';
            output += '\nDefense: ' + poke.avgDefense() + '<br>';
            return output
        };
        const domElements  = {
            name: container.querySelector('.name'),
            img: container.querySelector('.img'),
            hp: container.querySelector('.hp'),
            hpBar: container.querySelector('.hpBar'),
            expBar: container.querySelector('.expBar'),
            status: container.querySelector('.status')
        };
        this.setValue(domElements.name, poke.name + ' (' + poke.level + ')');
        if(id === "player") {    
            this.setProp(domElements.img, 'src', PokemonBNImageImport[getPokeIdByName(poke.name)][poke.name.toLowerCase()]);
        } else{
            this.setProp(domElements.img, 'src', PokemonFNImageImport[getPokeIdByName(poke.name)][poke.name.toLowerCase()]);
        }
        this.setValue(domElements.hp, poke.lifeAsText());
        this.setProp(domElements.hpBar, 'value', poke.currentHp);
        this.setProp(domElements.hpBar, 'max', poke.computedStats.hp);
        if (id === 'player') {
            this.setProp(domElements.expBar, 'value', Math.floor(poke.currentExp - poke.thisLevelExp()));
            this.setProp(domElements.expBar, 'max', poke.nextLevelExp() - poke.thisLevelExp());
        }
        this.setValue(domElements.status, pokeStatusAsText(poke));
    };
    renderPokeDexSort(player) {
        let sortHTML = '<option value="all">All</option>';
        let showList = false;
        if (player.unlocked.shinyDex) {
            sortHTML += '<option value="shiny"' + (player.settings.dexView === 'shiny' ? ' selected="true")' : '') + '>Shiny</option>';
            showList = true;
        }
        if (showList) {
            $('#dexView').innerHTML = sortHTML;
            $('#dexView').style.display = 'block';
        }
    };
    renderPokeDex(player) {
        const dexData = player.getPokedexData();
        const listElement = $('#dexList');
        let listValue = '';
        function findFlag(obj){ return (this === obj.name) }
        let count = POKEDEX.length;
        if (player.settings.dexView === 'all') {
            let highestPoke = player.pokedexHighestID;
            if (highestPoke === 0) {
                highestPoke = player.getHighestPokeDex();
            }
            let highestID = player.findDexIndex(highestPoke);
            count = highestID + 5;
        }
        for(let y = 0; y < count; y++) {
            let dexEntry = dexData.find(findFlag, POKEDEX[y].pokemon[0].Pokemon);
            if (typeof dexEntry === 'undefined')
                dexEntry = {name: '', flag: 0};
            if (player.settings.dexView === 'all' ||
                (player.settings.dexView === 'own' && (dexEntry.flag === POKEDEXFLAGS.ownNormal || dexEntry.flag === POKEDEXFLAGS.ownShiny)) ||
                (player.settings.dexView === 'owned' && (dexEntry.flag >= POKEDEXFLAGS.releasedNormal)) ||
                (player.settings.dexView === 'missing' && (dexEntry.flag !== POKEDEXFLAGS.ownNormal && dexEntry.flag !== POKEDEXFLAGS.ownShiny)) ||
                (player.settings.dexView === 'shiny' && (dexEntry.flag === POKEDEXFLAGS.ownShiny))) {
                if (player.settings.dexView === 'all' && dexEntry.flag === POKEDEXFLAGS.unseen) {
                    listValue += '<li class="pokeDex' + dexEntry.flag + '">' + (y + 1) + ' ???</li>';
                } else {
                    listValue += '<li class="pokeDex' + dexEntry.flag + '">' + (y + 1) + ' ' + POKEDEX[y].pokemon[0].Pokemon + '</li>';
                }
            }
        }
        this.setValue(listElement, listValue, false);
        this.renderPokeDexSort();
    };
    pokeStatus(poke,player) {
        if (poke.alive()) {
            if (poke === player.activePoke()) {
                if (poke.shiny) {
                    return 'activeShiny';
                } else {
                    return 'activeNormal';
                }
            } else {
                if (poke.shiny) {
                    return 'inactiveShiny';
                } else {
                    return 'inactiveNormal';
                }
            }
        } else {
            return 'dead';
        }
    };
    renderPokeSort(player) {
        $('#autoSort').checked = player.settings.autoSort;
        if (player.settings.autoSort) {
            $('#pokeSortOrderSelect').style.display = 'inline';
            $('#pokeSortDirSelect').style.display = 'inline';
        } else {
            $('#pokeSortOrderSelect').style.display = 'none';
            $('#pokeSortDirSelect').style.display = 'none';
        }
    };
    renderPokeList(purge = true,player) {
        const list = player.getPokemon(player);
        const listElement = $('#rosterList');
        const deleteEnabled = $('#enableDelete').checked;
        listElement.className = 'list' + (deleteEnabled ? ' manageTeamEnabled' : '');
        let listElementsToAdd = '';
        list.forEach((poke, index) => {
            const listItemElement = listElement.querySelector('#listPoke' + index);
            if (listItemElement) {
                const listItemNameElement = listItemElement.querySelector('.pokeListName');
                let hasChanged = (listItemNameElement.innerHTML !== `${poke.name} (${poke.level})`) || (listItemNameElement.getAttribute('status') !== this.pokeStatus(poke,player));
                listItemNameElement.innerHTML = `${poke.name} (${poke.level})`;
                listItemNameElement.setAttribute('status', this.pokeStatus(poke,player));
                listItemNameElement.className = 'pokeListName ' + this.pokeStatus(poke,player)
                    + (poke === player.activePoke() ? ' activePoke' : '')
                    + (poke.canEvolve(player) ? ' canEvolve' : '');
                listItemElement.querySelector('img').setAttribute('src', PokemonFNImageImport[getPokeIdByName(poke.name)][poke.name.toLowerCase()]);
                if (!purge && hasChanged) {
                    flash(listItemElement);
                }
            } else {
                const upButton = `<button onclick="userInteractions.pokemonToUp(${index})" class="pokeUpButton"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>`;
                const downButton = `<button onclick="userInteractions.pokemonToDown(${index})" class="pokeDownButton"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>`;
                const firstButton = `<button onclick="userInteractions.pokemonToFirst(${index})" class="pokeFirstButton">#1</button>`;
                const evolveButton = `<button onclick="userInteractions.evolvePokemon(${index})" class="pokeEvolveButton">Evolve</button>`;
                const storageButton = `<button onclick="userInteractions.moveToStorage(${index})" class="toStorageButton">PC</button>`;
                const image = '<p><a href="#" onclick="userInteractions.changePokemon(' + index + ')"><img src="' + PokemonFNImageImport[getPokeIdByName(poke.name)][poke.name.toLowerCase()] + '"></a></p>';

                listElementsToAdd += `<li id="listPoke${index}" class="listPoke">` +
                    image +
                    `<a href="#" onclick="userInteractions.changePokemon(${index})" class="pokeListName ${this.pokeStatus(poke,player)}" status="${this.pokeStatus(poke,player)}">${poke.name} (${poke.level})</a><br>` +
                    upButton +
                    downButton +
                    firstButton +
                    evolveButton +
                    storageButton +
                    `</li>`
            }
        });
        if (listElementsToAdd.length > 0) {
            this.setValue(listElement, listElementsToAdd, true)
        }
        let i = list.length;
        let listItemToRemove;
        while (listItemToRemove === listElement.querySelector('#listPoke' + i)) {
            listElement.removeChild(listItemToRemove);
            i++
        }
    };
    renderStorage(player) {
        const list = player.storage;
        const listElement = $('#storageList');
        let listElementsToAdd = '';
        list.forEach((poke, index) => {
            const listItemElement = listElement.querySelector('#storagePoke' + index);
            if (listItemElement) {
                const listItemNameElement = listItemElement.querySelector('.pokeListName');
                listItemNameElement.innerHTML = `${poke.name} (${poke.level})`;
                listItemNameElement.setAttribute('status', this.pokeStatus(poke));
                listItemNameElement.className = 'pokeListName ' + this.pokeStatus(poke);
            } else {
                const upButton = `<button onclick="userInteractions.pokemonToUp(${index}; 'storage')" class="pokeUpButton"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>`;
                const downButton = `<button onclick="userInteractions.pokemonToDown(${index}; 'storage')" class="pokeDownButton"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>`;
                const firstButton = `<button onclick="userInteractions.pokemonToFirst(${index}; 'storage')" class="pokeFirstButton">#1</button>`;
                const rosterButton = `<button onclick="userInteractions.moveToRoster(${index})" class="toStorageButton">Active</button>`;

                listElementsToAdd += `<li id="storagePoke${index}">` +
                    `<a href="#" class="pokeListName ${this.pokeStatus(poke)}" status="${this.pokeStatus(poke)}">${poke.name} (${poke.level})</a><br>` +
                    upButton +
                    downButton +
                    firstButton +
                    rosterButton +
                    `</li>`
            }
        });
        if (listElementsToAdd.length > 0) {
            this.setValue(listElement, listElementsToAdd, true);
        }
        let i = list.length;
        let listItemToRemove;
        while (listItemToRemove === listElement.querySelector('#storagePoke' + i)) {
            listElement.removeChild(listItemToRemove);
            i++
        }
        if (list.length === 0) {
            this.setValue(listElement, '<li>Your storage is cold and empty</li>');
        }
    };
    renderListBox(player) {
        const roster = $('#rosterBox');
        const pokeDex = $('#pokedexBox');
        const storage = $('#storageBox');
        // hide all by default
        roster.style.display = 'none';
        pokeDex.style.display = 'none';
        storage.style.display = 'none';
        // which is showing
        if (player.settings.listView === 'pokeDex') {
            pokeDex.style.display = 'block';
            this.renderPokeDex(player);
        } else if (player.settings.listView === 'storage') {
            storage.style.display = 'block';
            this.renderStorage(player);
        } else {
            roster.style.display = 'block';
            this.renderPokeList(null,player);

        }
    };
    checkConfirmed(id) {
        return $(id).checked
    };
    attackAnimation(id, direction) {
        const toAnimate = $('#' + id);
        toAnimate.classList = 'img attacked-' + direction;
        window.setTimeout(() => toAnimate.classList = 'img', 80)
    };
    renderBalls(player) {
        Object.keys(player.ballsAmount).forEach(ballType => {
            $('.ball-amount.' + ballType).innerHTML = player.ballsAmount[ballType];
        })
    };
    renderPokeCoins(player) {
        const pokeCoinsElement = $('#pokeCoins');
        pokeCoinsElement.innerHTML = player.currencyAmount.pokecoins;
    };
    renderCatchCoins(player) {
        const catchCoinsElement = $('#catchCoins');
        catchCoinsElement.innerHTML = player.currencyAmount.catchcoins;
    };
    renderBattleCoins(player) {
        const battleCoinsElement = $('#battleCoins');
        battleCoinsElement.innerHTML = player.currencyAmount.battlecoins;
    };
    renderCurrency(player) {
        this.renderBattleCoins(player);
        this.renderCatchCoins(player);
        this.renderPokeCoins(player);
    };
    refreshCatchOption(setCatchOption,userInteractions) {
        $(`#enableCatchNew`).checked = false;
        $(`#enableCatchAll`).checked = false;
        if (setCatchOption === 'new') {
            $(`#enableCatchNew`).checked = true;
        } else if (setCatchOption === 'all') {
            $(`#enableCatchAll`).checked = true;
        }
        userInteractions.changeCatchOption(setCatchOption);
    };
    showPopup(message) {
        $('#modalPopup').style.display = 'flex';
        $('#modalPopup #popupText').innerText = message;
        setTimeout(this.hidePopup, 2000);
    };
    hidePopup() {
        $('#modalPopup').style.display = 'none';
        $('#modalPopup #popupText').innerText = '';
    };
    bindEvents(userInteractions,player) {
        $('#enableDelete').addEventListener( 'click', () => {
            userInteractions.enablePokeListDelete();
        });
        $('#autoSort').addEventListener( 'click', () => {
            userInteractions.enablePokeListAutoSort();
        });
        $('#viewRoster').addEventListener( 'click', () => {
            userInteractions.changeListView('roster');
        });
        $('#viewPokeDex').addEventListener( 'click', () => {
            userInteractions.changeListView('pokeDex');
        });
        $('#viewStorage').addEventListener( 'click', () => {
            userInteractions.changeListView('storage');
        });

        $('#dexView').addEventListener( 'change'
            , () => { userInteractions.changeDexView() }
        );

        $(`#enableCatchAll`).addEventListener( 'click'
            , (player) => {
                let setCatchSetting;
                if ($(`#enableCatchAll`).checked) {
                    $(`#enableCatchNew`).checked = false;
                    setCatchSetting = 'all';
                } else {
                    setCatchSetting = false;
                }
                player.settings.catching = setCatchSetting;
                userInteractions.changeCatchOption(setCatchSetting);
            }
        );

        $(`#enableCatchNew`).addEventListener( 'click'
            , () => {
                let setCatchSetting;
                if ($(`#enableCatchNew`).checked) {
                    $(`#enableCatchAll`).checked = false;
                    setCatchSetting = 'new';
                } else {
                    setCatchSetting = false;
                }
                player.settings.catching = setCatchSetting;
                userInteractions.changeCatchOption(setCatchSetting);
            }
        );

        $(`#saveDialogContainer`).addEventListener( 'click'
            , (event) => { event.target === $(`#saveDialogContainer`) && ($(`#saveDialogContainer`).style.display = 'none'); }
        );

        $(`#inventoryContainer`).addEventListener( 'click'
            , (event) => { event.target === $(`#inventoryContainer`) && ($(`#inventoryContainer`).style.display = 'none'); }
        );

        $(`#settingsContainer`).addEventListener( 'click'
            , (event) => { event.target === $(`#settingsContainer`) && ($(`#settingsContainer`).style.display = 'none'); }
        );

        $(`#townContainer`).addEventListener( 'click'
            , (event) => { event.target === $(`#townContainer`) && ($(`#townContainer`).style.display = 'none'); }
        );
        $(`#pokemonCenterContainer`).addEventListener( 'click'
            , (event) => { event.target === $(`#pokemonCenterContainer`) && ($(`#pokemonCenterContainer`).style.display = 'none'); }
        );
    }
};

export const renderView = (dom, enemy, player, purge = true) => {
    dom.renderPokeOnContainer('enemy', enemy.activePoke(),null, player);
    dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back',player);
};