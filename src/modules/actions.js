import { ROUTES } from './routes';
import { $,getRouteIndexByName,isEmpty } from './utilities';
import { renderView } from './display';
import { POKEDEXFLAGS } from './main';

export class UserActions {
    changeRoute(newRouteId, force = false,player,dom,combatLoop,enemy) {
        if (!force && player.alivePokeIndexes().length === 0) {
            return false;
        }
        if (combatLoop.trainer) {
            return false;
        }
        if (!player.routeUnlocked(player.settings.currentRegionId, newRouteId)) {
            return false;
        }
        player.settings.currentRouteId = newRouteId;
        if (ROUTES[player.settings.currentRegionId][getRouteIndexByName(player.settings.currentRegionId,player.settings.currentRouteId)]['type']==='town') {
            combatLoop.pause(enemy);
        } else {
            combatLoop.unpause(enemy,player,dom,this);
        }
        renderView(dom, enemy, player);
        player.savePokes();
    };
    changePokemon(newActiveIndex,player,combatLoop,dom,enemy) {
        player.setActive(newActiveIndex);
        combatLoop.changePlayerPoke(player.activePoke());
        renderView(dom, enemy, player)
    };
    changeRegion(player) {
        const regionSelect = document.getElementById('regionSelect');
        const regionId = regionSelect.options[regionSelect.selectedIndex].value;
        if (player.regionUnlocked(regionId)) {
            player.settings.currentRegionId = regionId;
            if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
            } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
            } else {
                this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
            }
        }
        return false;
    };
    enablePokeListDelete(player,dom) {
        player.settings.listView = 'roster';
        dom.renderListBox();
    };
    enablePokeListAutoSort(player,dom) {
        player.settings.autoSort = $('#autoSort').checked;
        // hide or show sort dropdowns
        dom.renderPokeSort();
        dom.renderListBox();
    };
    changeDexView(player,dom) {
        const regionSelect = document.getElementById('dexView');
        player.settings.dexView = regionSelect.options[regionSelect.selectedIndex].value;
        dom.renderPokeDex();
    };
    changeCatchOption(newCatchOption,combatLoop) {
        combatLoop.changeCatch(newCatchOption)
    };
    changeListView(view,player,dom) {
        player.settings.listView = view;
        dom.renderListBox();
    };
    clearGameData(dom,player) {
        if (dom.checkConfirmed('#confirmClearData')) {
            localStorage.clear();
            player.purgeData = true;
            window.location.reload(true);
        }
    };
    changeSelectedBall(newBall,player) {
        player.changeSelectedBall(newBall)
    };
    pokemonToFirst(pokemonIndex, from = 'roster',player,dom,combatLoop) {
        const pokeList = (from === 'roster') ? player.getPokemon() : player.storage;
        const moveToFirst = (index, arr) => {
            arr.splice(0, 0, arr.splice(index, 1)[0])
        };

        moveToFirst(pokemonIndex, pokeList);
        player.savePokes();
        if (from === 'roster') {
            combatLoop.changePlayerPoke(player.activePoke());
            dom.renderPokeList();
        } else {
            dom.renderStorage();
        }
    };
    pokemonToDown(pokemonIndex, from = 'roster',player,combatLoop,dom) {
        const pokeList = (from === 'roster') ? player.getPokemon() : player.storage;
        const moveToDown = index => arr => [
            ...arr.slice(0,parseInt(index)),
            arr[parseInt(index)+1],
            arr[parseInt(index)],
            ...arr.slice(parseInt(index)+2)
        ];
        if (pokeList[pokemonIndex + 1]) {
            const newPokemonList = moveToDown(pokemonIndex)(pokeList);
            player.reorderPokes(newPokemonList, from);
            if (from === 'roster') {
                combatLoop.changePlayerPoke(player.activePoke());
                dom.renderPokeList();
            } else {
                dom.renderStorage();
            }
            player.savePokes();
        }
    };
    pokemonToUp(pokemonIndex, from = 'roster',player,combatLoop,dom) {
        const pokeList = (from === 'roster') ? player.getPokemon() : player.storage;
        const moveToUp = index => arr => [
            ...arr.slice(0,parseInt(index)-1),
            arr[parseInt(index)],
            arr[parseInt(index)-1],
            ...arr.slice(parseInt(index)+1)
        ];
        if (pokeList[pokemonIndex - 1]) {
            const newPokemonList = moveToUp(pokemonIndex)(pokeList);
            player.reorderPokes(newPokemonList, from);
            if (from === 'roster') {
                combatLoop.changePlayerPoke(player.activePoke());
                dom.renderPokeList();
            } else {
                dom.renderStorage();
            }
            player.savePokes();
        }
    };
    evolvePokemon(pokemonIndex,dom,player,enemy) {
        player.getPokemon()[pokemonIndex].tryEvolve(player.getPokemon()[pokemonIndex].shiny());
        dom.renderPokeList();
        renderView(dom, enemy, player);
    };
    moveToStorage(pokemonIndex,dom,player) {
        // you must keep at least one active pokemon
        if (player.pokemons.length > 1) {
            const poke = player.getPokemon()[pokemonIndex];
            player.pokemons.splice(pokemonIndex, 1);
            player.storage.push(poke);
            dom.renderPokeList();
        } else {
            dom.showPopup('You must have at least one active pokemon!');
        }
    };
    moveToRoster(pokemonIndex,dom,player) {
        // check you have space
        if (player.pokemons.length < 6) {
            const poke = player.storage[pokemonIndex];
            player.storage.splice(pokemonIndex, 1);
            player.pokemons.push(poke);
            dom.renderStorage();
            dom.renderPokeList();
        } else {
            dom.showPopup('You can only have six active pokemon!');
        }
    };
    forceSave(player) {
        player.savePokes();
        $(`#forceSave`).style.display = 'inline';
    };
    exportSaveDialog(player) {
        document.getElementById('saveDialogTitle').innerHTML = 'Export your save';
        if (document.queryCommandSupported('copy')) {
            document.getElementById('copySaveText').style.display = 'initial';
        }
        document.getElementById('saveText').value = player.saveToString();
        document.getElementById('loadButtonContainer').style.display = 'none';
        document.getElementById('saveDialogContainer').style.display = 'block';
        $(`#settingsContainer`).style.display = 'none';
    };
    importSaveDialog() {
        document.getElementById('saveDialogTitle').innerHTML = 'Import a save';
        document.getElementById('copySaveText').style.display = 'none';
        document.getElementById('saveText').value = '';
        document.getElementById('loadButtonContainer').style.display = 'block';
        document.getElementById('saveDialogContainer').style.display = 'block';
        $(`#settingsContainer`).style.display = 'none';
    };
    importSave(dom,player,enemy) {
        if (window.confirm('Loading a save will overwrite your current progress, are you sure you wish to continue?')) {
            player.loadFromString(document.getElementById('saveText').value.trim());
            document.getElementById('saveDialogContainer').style.display = 'none';
            // reload everything
            renderView(dom, enemy, player);
            dom.renderListBox();
            dom.renderPokeSort();
            dom.renderBalls();
            dom.renderPokeCoins();
        }
    };
    copySaveText() {
        document.getElementById('saveText').select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges()
    };
    changePokeSortOrder(player,dom) {
        player.sortPokemon();
        player.savePokes();
        dom.renderStorage();
    };
    changeSpriteChoice(player,dom,enemy) {
        if (document.getElementById('spriteChoiceFront').checked) {
            player.settings.spriteChoice = 'front';
            document.getElementById('player').className = 'container poke frontSprite'
        } else {
            player.settings.spriteChoice = 'back';
            document.getElementById('player').className = 'container poke'
        }
        player.savePokes(dom,enemy);
        renderView(dom, enemy, player)
    };
    viewSettings() {
        document.getElementById('settingsContainer').style.display = 'block';
        $(`#forceSave`).style.display = 'none';
    };
    viewInventory(player) {
        if (!isEmpty(player.badges)) {
            let badgesHTML = '';
            for (let badge in player.badges) {
                badgesHTML += '<li>' + '<img src="assets/images/badges/' + [badge] + '.png"></img>' + '</li>';
            }
            document.getElementById('badgeList').innerHTML = badgesHTML;
        }
        let inventoryHTML = 'To do';
        document.getElementById('inventoryList').innerHTML = inventoryHTML;
        document.getElementById('inventoryContainer').style.display = 'block';
    };
    viewTown(town,player) {
        console.log(town);
        town.renderPokeCoinShop(player);
        town.renderBattleCoinShop(player);
        town.renderCatchCoinShop(player);
        town.renderTrader(player);
        document.getElementById('townContainer').style.display = 'block';
    };
    trainerBattle(player,combatLoop) {
        const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
        if (routeData['trainer'] && routeData['trainer']['poke'].length > 0) {
            combatLoop.trainer = {name: routeData['trainer']['name'], badge: routeData['trainer']['badge']};
            combatLoop.trainerPoke = Object.values(Object.assign({}, routeData['trainer']['poke']));
            combatLoop.unpause();
            combatLoop.refresh();
        }
    };
    closeStory(story) {
        if (story.canClose) {
            $(`#storyContainer`).style.display = 'none';
        }
    }
};