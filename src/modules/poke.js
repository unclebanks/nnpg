import { EXP_TABLE } from "./main";
import { EVOLUTIONS } from "./evolutions.js";

export class Pokemon {
    constructor(pokeObj, level, shiny = false, prestigeLevel = 0, appliedVitamins = {}) {
        this.name = pokeObj.name;
        this.id = pokeObj.id;
        this.baseStats = pokeObj.stats? pokeObj.stats: pokeObj.baseStats;
        this.baseExp = pokeObj.exp? pokeObj.exp: pokeObj.baseExp;
        this.expTable = EXP_TABLE[this.getGrowthRate()];
        this.currentExp = this.expTable[level - 1];
        this.level = this.currentLevel();
        this.computedStats = {
            hp: this.computeStats("hp"),
            atk: this.computeStats("attack"),
            def: this.computeStats("defense"),
            spAtk: this.computeStats("spAtk"),
            spDef: this.computeStats("spDef"),
            speed: this.computeStats("speed"),
        }
        this.shiny = shiny;
        this.caughtAt = Date.now();
        this.prestigeLevel = prestigeLevel;
        this.appliedVitamins = appliedVitamins;
        this.currentHp = this.computeStats("hp");
    };
    alive() { return this.currentHp > 0; };
    attackSpeed() {
        const speed = Math.floor(1000 / (500 + this.computedStats.speed) * 800);
        if (speed <= 300) {
            return 300;
        } else {
            return speed;
        }
    };
    setHp(newHp) { this.currentHp = newHp; };
    computeStats(statName) {
        let raw = this.baseStats[statName];
        // raw += this.appliedVitamins[statName];
        // ^^^ Vitamins to be implemented later
        let calculated;
        if(statName !== "hp") {
            calculated = (raw * 100 + 50 * this.currentLevel()) / 150
        } else { 
            calculated = (raw * this.currentLevel()) / 40
        };
        if (statName !== 'speed' || statName !== 'hp') {
            calculated *= 1.25;
        }
        if(statName === "hp") {
            calculated *= 3;
        }
        return Math.floor(calculated);
    };
    currentLevel() {
        let i = 0;
        while(this.currentExp > this.expTable[i]) {
            i++;
        }
        this.level = i+1;
        return i + 1;
    };
    getGrowthRate() {
        return this.baseStats["growthRate"];
    };
    avgAttack() { return (this.computedStats.atk + this.computedStats.spAtk) / 2; };
    avgDefense() { return (this.computedStats.def + this.computedStats.spDef) / 2; };
    takeDamage(enemyAttack) {
        const damageToTake = ((enemyAttack - this.avgDefense() / 10) > 0 && Math.ceil((enemyAttack - this.avgDefense() / 10) * ((Math.random() + 0.1) * 2) / 100)) || 0;
        this.setHp(this.currentHp - damageToTake);
        return damageToTake;
    };
    giveExp(expToGive) {
        this.currentExp += expToGive;
    };
    resetHp() {
        this.currentHp = this.computeStats("hp");
    };
    lifeAsText() { return '' + (this.currentHp < 0 ? 0 : this.currentHp) + ' / ' + this.computedStats.hp; };
    thisLevelExp() { return this.expTable[this.currentLevel() - 1] || 10; };
    nextLevelExp() { return this.expTable[this.currentLevel()]; };
    canEvolve(player) {
    // pokemon Has Evolution
        if (EVOLUTIONS[this.name] !== undefined) {
            const levelToEvolve = Number(EVOLUTIONS[this.name].level);
            const stoneType = EVOLUTIONS[this.name].stone;
            if (this.currentLevel() >= levelToEvolve) {
                if (!player.hasPokemon(EVOLUTIONS[this.name].to, 0)) {
                    return true;
                }
            }
            if (player.unlocked[stoneType]) {
                if (!player.hasPokemon(EVOLUTIONS[this.name].to, 0)) {
                    return true;
                }
            }
        }
        return false;
    };
    heal() {
        this.currentHp = this.computedStats.hp;
    }
}