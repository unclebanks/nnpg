import { POKEDEXFLAGS,BALLRNG } from './main';
import { POKEDEX } from './db';
import { getPokemonDataByName, mergeArray } from './utilities';
import { ROUTES } from './routes';
import { Pokemon } from './poke';

export class Player {
    pokemons = [];
    storage = [];
    pokedexData = [];
    pokedexHighestID = 0;
    activePokeID = 0;
    selectedBall = "pokeball";
    ballsAmount = {
        pokeball: 20,
        greatball: 0,
        ultraball: 0,
        masterball: 0
    };
    lastSave = Date.now();
    unlocked = {
        shinyDex: 0,
        razzBerry: 0,
        fishing: 0
    };
    currencyAmount = {
        pokecoins: 0,
        catchcoins: 0,
        battlecoins: 0
    };
    settings = {
        currentRegionId: 'Kanto',
        currentRouteId: 'Route 1',
        listView: 'roster',
        autoSort: true,
        dexView: 'all',
        dexVersion: 194, // check if users dex is out of date
        spriteChoice: 'back',
        catching: false
    };
    badges = {};
    purgeData = false;
    checksum(s) {
        let chk = 0x12345678;
        const len = s.length;
        for (let i = 0; i < len; i++) {
            chk += (s.charCodeAt(i) * (i + 1));
        }
        return (chk & 0xffffffff).toString(16);
    };
    addPoke(poke) {
        if (this.pokemons.length < 6) {
            this.pokemons.push(poke);
        } else {
            this.storage.push(poke);
        }
    };
    findDexIndex(p) {POKEDEX.findIndex(x=>x.pokemon[0].Pokemon === p.name)};
    addPokedex(pokeName, flag,dom) {
        // helper to search dex array for a string
        function findFlag(obj){ return (this === obj.name) }
        const dexEntry = this.pokedexData.find(findFlag, pokeName);
        let reloadDex = false;
        if (typeof dexEntry === 'object') {
            if (dexEntry.flag < flag ||
                (dexEntry.flag === POKEDEXFLAGS.ownShiny && flag === POKEDEXFLAGS.releasedShiny) || // own can be released
                (dexEntry.flag === POKEDEXFLAGS.ownNormal && flag === POKEDEXFLAGS.releasedNormal) ||
                (dexEntry.flag === POKEDEXFLAGS.ownShiny && flag === POKEDEXFLAGS.ownedShiny) || // own can be come owned
                (dexEntry.flag === POKEDEXFLAGS.ownNormal && flag === POKEDEXFLAGS.ownedNormal)) {
                if (this.pokedexData[this.pokedexData.indexOf(dexEntry)].flag !== flag) {
                    reloadDex = true;
                    this.pokedexData[this.pokedexData.indexOf(dexEntry)].flag = flag;
                }
            }
        } else {
            reloadDex = true;
            this.pokedexData.push({name: pokeName, flag: flag});
        }
        if (this.settings.listView === 'pokeDex' && reloadDex) {
            // is it a new highest entry?
            const dexID = this.findDexIndex(dexEntry);
            if (this.pokedexHighestID < dexID) {
                this.pokedexHighestID = dexID;
            }
            dom.renderPokeDex();
        }
    };
    hasDexEntry(pokeName, flag, exact = false) {
        function findFlag(obj){ return (this === obj.name) }
        const dexEntry = this.pokedexData.find(findFlag, pokeName);
        if (typeof dexEntry !== 'undefined') {
            if ((exact && dexEntry.flag === flag)
                || (!exact && dexEntry.flag >= flag)) {
                return true;
            }
        }
        return false;
    };
    getHighestPokeDex() {
        let dex = (lhs, rhs) => this.findDexIndex(rhs) - this.findDexIndex(lhs);
        this.pokedexHighestID = this.getPokedexData().sort(dex)[0];
        return this.pokedexHighestID;
    };
    countPokedex(flag, exactMatch = false) {
        let counter = 0;
        let i, pData;
        for (i in this.pokedexData) {
            pData = this.pokedexData[i];
            if (exactMatch && flag === pData.flag) {
                counter++;
            } else if (!exactMatch && flag <= pData.flag) {
                counter++;
            }
        }
        return counter;
    };
    setActive(index) {
        this.activePokeID = index;
    };
    alivePokeIndexes() {
        let alive = this.getPokemon().filter((poke, index) => {
            if (poke.alive()) {
                return true;
            } else {
                return false;
            }
        });
        return alive;
    };
    activePoke() { return this.pokemons[this.activePokeID] };
    getPokemon() { return this.pokemons };
    getPokedexData() { return this.pokedexData };
    reorderPokes(newList, list = 'roster') {
        if (list === 'roster') {
            this.pokemons = newList;
        } else {
            this.storage = newList;
        }
    };
    cmpFunctions = {
        lvl: (lhs, rhs) => {
            return lhs.level() - rhs.level()
        },
        dex: (lhs, rhs) => {
            let index = p => POKEDEX.findIndex(x=>x.pokemon[0].Pokemon === p.pokeName());
            return index(lhs) - index(rhs)
        },
        vlv: (lhs, rhs) => {
            return lhs.level() - rhs.level() || lhs.avgAttack() - rhs.avgAttack();
        },
        time: (lhs, rhs) => {
            return lhs.caughtAt - rhs.caughtAt;
        }
    };
    inverseCmp(cmpFunc) {
        return (lhs, rhs) => -cmpFunc(lhs, rhs);
    };
    sortPokemon() {
        const dirSelect = document.getElementById('pokeSortDirSelect');
        const direction = dirSelect.options[dirSelect.selectedIndex].value;
        const orderSelect = document.getElementById('pokeSortOrderSelect');
        const sortOrder = orderSelect.options[orderSelect.selectedIndex].value;
        let cmpFunc = this.cmpFunctions[sortOrder];
        if (direction === 'desc') {
            cmpFunc = this.inverseCmp(cmpFunc)
        }
        this.reorderPokes(this.storage.sort(cmpFunc), 'storage');
    };
    healAllPokemons() {
        this.pokemons.forEach((poke) => poke.heal());
    };
    hasPokemon(pokemonName, shiny) {
        const allPokes = mergeArray(this.pokemons, this.storage);
        return typeof allPokes.find(function(obj){ return (this[0] === obj.pokeName() && this[1] === obj.shiny()); }, [pokemonName, shiny]) != 'undefined';
    };
    ballRNG(ballName) {
        return BALLRNG[ballName];
    };
    changeSelectedBall(newBall) {
        this.selectedBall = newBall
    };
    consumeBall(ballName) {
        if (this.ballsAmount[ballName] > 0) {
            this.ballsAmount[ballName] -= 1;
            return true;
        }
        return false;
    };
    bestAvailableBall() {
        const ballsFromBestToWorst = ['masterball', 'ultraball', 'greatball', 'pokeball'];
        for (let i = 0; i < ballsFromBestToWorst.length; i++) {
            if (this.ballsAmount[ballsFromBestToWorst[i]] > 0) {
                return ballsFromBestToWorst[i];
            }
        }
    };
    addBalls(ballName, amount) {
        this.ballsAmount[ballName] += amount;
    };
    addPokeCoins(amount,dom) {
        this.currencyAmount.pokecoins += amount;
        //dom.renderPokeCoins();
    };
    addCatchCoins(amount,dom) {
        this.currencyAmount.catchcoins += amount;
        //dom.renderCatchCoins();
    };
    addBattleCoins(amount,dom) {
        this.currencyAmount.battlecoins += amount;
        //dom.renderBattleCoins();
    };
    meetsCriteria(criteriaObj) {
        for (let group in criteriaObj) {
            if (typeof criteriaObj[group] === 'object') {
                for (let criteria in criteriaObj[group]) {
                    // if pokedex criteria
                    if (group === 'dex') {
                        if (criteria === 'caughtCount'
                            && this.countPokedex(POKEDEXFLAGS.releasedNormal) < criteriaObj[group][criteria]) {
                            return false;
                        }
                    }
                    else if (typeof this[group][criteria] === 'undefined')
                        return false;
                    else if (typeof criteriaObj[group][criteria] === 'boolean' && this[group][criteria] < criteriaObj[group][criteria])
                        return false;
                    else if (this[group][criteria] < criteriaObj[group][criteria])
                        return false;
                }
            } else {
                if (this[group] < criteriaObj[group])
                    return false;
            }
        }
        return true;
    };
    regionUnlocked(region) {
        const unlockData = ROUTES[region]._unlock;
        if (unlockData) {
            return this.meetsCriteria(unlockData);
        }
        return true;
    };
    routeUnlocked(region, route) {
        const routeData = ROUTES[region][route];
        //reimplement unlock conditions later
        // if (routeData._unlock) {
        //     return this.meetsCriteria(routeData._unlock);
        // }
        return true;
    };
    // Load and Save functions
    savePokes(force = false) {
        //TODO Implement saving
        // Don't save more then every 60 seconds
        // if (force || (this.lastSave + (1000 * 60) < Date.now())) {
        //     this.lastSave = Date.now();
        //     localStorage.setItem(`totalPokes`, this.pokemons.length);
        //     this.pokemons.forEach((poke, index) => {
        //         localStorage.setItem(`poke${index}`, JSON.stringify(poke.save()))
        //     });
        //     localStorage.setItem(`totalStorage`, this.storage.length);
        //     this.storage.forEach((poke, index) => {
        //         localStorage.setItem(`storage${index}`, JSON.stringify(poke.save()))
        //     });
        //     localStorage.setItem(`ballsAmount`, JSON.stringify(this.ballsAmount));
        //     localStorage.setItem(`pokedexData`, JSON.stringify(this.pokedexData));
        //     localStorage.setItem(`statistics`, JSON.stringify(this.statistics));
        //     localStorage.setItem(`settings`, JSON.stringify(this.settings));
        //     localStorage.setItem(`badges`, JSON.stringify(this.badges));
        //     localStorage.setItem(`unlocked`, JSON.stringify(this.unlocked));
        //     localStorage.setItem(`currencyAmount`, JSON.stringify(this.currencyAmount));
        // }
    };
    saveToString() {
        const saveData = JSON.stringify({
            pokes: this.pokemons.map((poke) => poke.save()),
            storage: this.storage.map((poke) => poke.save()),
            pokedexData: this.pokedexData,
            statistics: this.statistics,
            settings: this.settings,
            ballsAmount: this.ballsAmount,
            badges: this.badges,
            unlocked: this.unlocked,
            currencyAmount: this.currencyAmount,
        });
        return btoa(this.checksum(saveData) + '|' + saveData)
    };
    loadPokes() {
        // reset pokemon array
        this.pokemons = [];
        let pokeCount = 0;
        // reset storage array
        this.storage = [];
        Array(Number(localStorage.getItem(`totalPokes`))).fill(0).forEach((el, index) => {
            const loadedPoke = JSON.parse(localStorage.getItem('poke'+index));
            if (loadedPoke) {
                const pokeName = loadedPoke[0];
                const exp = loadedPoke[1];
                const shiny = (loadedPoke[2] === true);
                const caughtAt = loadedPoke[3];
                if (pokeCount < 6) {
                    this.pokemons.push(new Pokemon(getPokemonDataByName(pokeName), false, Number(exp), shiny, caughtAt));
                } else {
                    this.storage.push(new Pokemon(getPokemonDataByName(pokeName), false, Number(exp), shiny, caughtAt));
                }
                pokeCount++;
            }
        });
        Array(Number(localStorage.getItem(`totalStorage`))).fill(0).forEach((el, index) => {
            const loadedPoke = JSON.parse(localStorage.getItem('storage'+index));
            if (loadedPoke) {
                const pokeName = loadedPoke[0];
                const exp = loadedPoke[1];
                const shiny = (loadedPoke[2] === true);
                const caughtAt = loadedPoke[3];
                this.storage.push(new Pokemon(getPokemonDataByName(pokeName), false, Number(exp), shiny, caughtAt));
            }
        });
        if (JSON.parse(localStorage.getItem('ballsAmount'))) {
            this.ballsAmount = JSON.parse(localStorage.getItem('ballsAmount'));
        }
        if (JSON.parse(localStorage.getItem('pokedexData'))) {
            this.pokedexData = JSON.parse(localStorage.getItem('pokedexData'));
        } else {
            this.pokedexData = [];
        }
        if (JSON.parse(localStorage.getItem('statistics'))) {
            let loadedStats = JSON.parse(localStorage.getItem('statistics'));
            this.statistics = Object.assign({}, this.statistics, loadedStats);
        }
        if (JSON.parse(localStorage.getItem('settings'))) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
        if (JSON.parse(localStorage.getItem('badges'))) {
            this.badges = JSON.parse(localStorage.getItem('badges'));
        }
        if (JSON.parse(localStorage.getItem('unlocked'))) {
            let loadedUnlocked = JSON.parse(localStorage.getItem('unlocked'));
            this.unlocked = Object.assign({}, this.unlocked, loadedUnlocked);
        }
        if (JSON.parse(localStorage.getItem('currencyAmount'))) {
            this.currencyAmount = JSON.parse(localStorage.getItem('currencyAmount'));
        }
    };
    loadFromString(saveData) {
        saveData = atob(saveData);
        saveData = saveData.split('|');
        if (this.checksum(saveData[1]) === saveData[0]) {
            try {
                saveData = JSON.parse(saveData[1])
            } catch (err) {
                alert('Failed to parse save data, loading canceled!');
                return;
            }
            this.pokemons = [];
            let pokeCount = 0;
            this.storage = [];
            saveData.pokes.forEach((loadedPoke) => {
                const pokeName = loadedPoke[0];
                const exp = loadedPoke[1];
                const shiny = (loadedPoke[2] === true);
                const caughtAt = loadedPoke[3];
                if (pokeCount < 6) {
                    this.pokemons.push(new Pokemon(getPokemonDataByName(pokeName), false, Number(exp), shiny, caughtAt));
                } else {
                    this.storage.push(new Pokemon(getPokemonDataByName(pokeName), false, Number(exp), shiny, caughtAt));
                }
                pokeCount++;
            });
            saveData.storage.forEach((loadedPoke) => {
                const pokeName = loadedPoke[0];
                const exp = loadedPoke[1];
                const shiny = (loadedPoke[2] === true);
                const caughtAt = loadedPoke[3];
                this.storage.push(new Pokemon(getPokemonDataByName(pokeName), false, Number(exp), shiny, caughtAt));
            });
            this.ballsAmount = saveData.ballsAmount; // import from old spelling mistake
            this.currencyAmount = saveData.currencyAmount;
            this.pokedexData = saveData.pokedexData ? saveData.pokedexData : [];
            let loadedStats = saveData.statistics ? saveData.statistics : {};
            this.statistics = Object.assign({}, this.statistics, loadedStats);
            if (saveData.settings) {
                this.settings = saveData.settings;
            }
            this.badges = saveData.badges ? saveData.badges : {};
            let loadedUnlocked = saveData.unlocked ? saveData.unlocked : [];
            this.unlocked = Object.assign({}, this.unlocked, loadedUnlocked);
        } else {
            alert('Invalid save data, loading canceled!');
        }
    }
};