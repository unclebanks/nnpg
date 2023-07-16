import { TYPES } from "./typeModifiers";
import { RNG,flash,$, getRouteIndexByName } from "./utilities";
import { POKEDEXFLAGS } from "./main";
import { ROUTES } from './routes';
import { renderView } from "./display";

export class Combat {
    paused = false;
    trainer = null;
    trainerPoke = {};
    trainerCurrentID = 0;
    playerActivePoke = null;
    enemyActivePoke = null;
    playerTimerId = null;
    enemyTimerId = null;
    catchEnabled = false;
    init(player,enemy,dom,userInteractions) {
        if (!this.paused) {
            this.playerActivePoke = player.activePoke();
            this.enemyActivePoke = enemy.activePoke();
            this.playerTimer(dom,enemy,player,userInteractions);
            this.enemyTimer(dom,enemy,player,userInteractions);
        }
    };
    pause(enemy) {
        this.paused = true;
        this.stop();
        enemy.clear();
        this.enemyActivePoke = null;
    };
    unpause(enemy,player,dom,userInteractions) {
        this.paused = false;
        this.stop();
        this.newEnemy(enemy,player);
        this.init(player,enemy,dom,userInteractions);
    };
    stop() {
        window.clearTimeout(this.playerTimerId);
        window.clearTimeout(this.enemyTimerId);
    };
    refresh() {
        this.stop();
        this.init();
    };
    playerTimer(dom,enemy,player,userInteractions) {
        const nextAttack = this.playerActivePoke.attackSpeed();
        this.playerTimerId = window.setTimeout(
            () => this.dealDamage(this.playerActivePoke, this.enemyActivePoke, 'player',dom,enemy,player,userInteractions),
            nextAttack
        )
    };
    enemyTimer(dom,enemy,player,userInteractions) {
        const nextAttack = this.enemyActivePoke.attackSpeed();
        this.enemyTimerId = window.setTimeout(
            () => this.dealDamage(this.enemyActivePoke, this.playerActivePoke, 'enemy',dom,enemy,player,userInteractions),
            nextAttack
        )
    };
    calculateDamageMultiplier(attackingTypes, defendingTypes) {
        const typeEffectiveness = (attackingType, defendingTypes) =>
            (TYPES[attackingType][defendingTypes[0]] * (defendingTypes[1] && TYPES[attackingType][defendingTypes[1]]) || 1);
        return Math.max(
            (typeEffectiveness(attackingTypes[0], defendingTypes),
            attackingTypes[1] && typeEffectiveness(attackingTypes[1], defendingTypes)) || 0
        )
    };
    dealDamage(attacker, defender, who,dom,enemy,player,userInteractions) {
        if (!attacker || !defender) return null;
        if (attacker.alive() && defender.alive()) {
            // calculate damage done
            const missRNG = RNG(5);
            if (!missRNG) {
                const critRNG = RNG(5);
                const critMultiplier = (critRNG) ? 1 + (attacker.level / 100) : 1;
                const damageMultiplier = this.calculateDamageMultiplier(attacker.baseStats.types, defender.baseStats.types) * critMultiplier;
                const damage = defender.takeDamage(attacker.avgAttack() * damageMultiplier);
                dom.renderPokeOnContainer('enemy', enemy.activePoke(),null,player);
                dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back',player);
            }
            if (who === 'player') {
                dom.attackAnimation('playerImg', 'right');
                this.playerTimer(dom,enemy,player,userInteractions);
            } else {
                dom.attackAnimation('enemyImg', 'left');
                this.enemyTimer(dom,enemy,player,userInteractions);
            }
        }
        if (!attacker.alive() || !defender.alive()) {
            // one is dead
            window.clearTimeout(this.playerTimerId);
            window.clearTimeout(this.enemyTimerId);

            if (((who === 'enemy') && !attacker.alive()) ||
                ((who === 'player') && !defender.alive()))
            {
                this.enemyFaint(enemy,player,dom,userInteractions);
            } else {
               this.playerFaint(player,userInteractions,dom,enemy);
            }
            dom.renderPokeOnContainer('enemy', enemy.activePoke(),null,player);
        }
    };
    enemyFaint(enemy,player,dom,userInteractions) {
        this.attemptCatch();
        this.findPokeballs(enemy.activePoke().level,player,dom);
        const foundPokeCoins = Math.floor(this.enemyActivePoke.level * 4) + 5;
        player.addPokeCoins(foundPokeCoins);

        const beforeExp = player.getPokemon().map((poke) => poke.level);
        const expToGive = (this.enemyActivePoke.baseExp / 16) + (this.enemyActivePoke.level * 3);
        this.playerActivePoke.giveExp(expToGive);
        player.getPokemon().forEach((poke) => poke.giveExp((this.enemyActivePoke.baseExp / 100) + (this.enemyActivePoke.level / 10)));
        const afterExp = player.getPokemon().map((poke) => poke.level);

        // check if a pokemon leveled up
        if (beforeExp.join('') !== afterExp.join('')) {
            if (player.settings.listView === 'roster') {
                dom.renderPokeList(false,player);
            }
        }

        // was it a trainer poke
        if (this.trainer) {
            // remove the pokemon
            this.trainerPoke.splice(this.trainerCurrentID, 1);
            if (this.trainerPoke.length < 1) {
                if (this.trainer.badge) {
                    if (!player.badges[this.trainer.badge]) {
                        player.badges[this.trainer.badge] = true;
                        dom.renderRouteList();
                    }
                }
                this.trainer = null;
                this.pause(enemy);
                return false;
            }
        }

        player.savePokes();
        this.newEnemy(enemy,player);
        this.enemyTimer(dom,enemy,player,userInteractions);
        this.playerTimer(dom,enemy,player,userInteractions);
        dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back');
    };
    newEnemy(enemy,player) {
        if (this.trainer) {
            enemy.trainerPoke(this.trainerPoke);
        } else {
            enemy.generateNew(player.settings.currentRegionId, player.settings.currentRouteId);
        }
        this.enemyActivePoke = enemy.activePoke();
        player.addPokedex(enemy.activePoke().ballName, (enemy.activePoke().shiny ? POKEDEXFLAGS.seenShiny : POKEDEXFLAGS.seenNormal));
    };
    playerFaint(player,userInteractions,dom,enemy) {
        const alivePokeIndexes = player.alivePokeIndexes();
        if (alivePokeIndexes.length > 0) {
            player.setActive(player.getPokemon().indexOf(alivePokeIndexes[0]));
            this.playerActivePoke = player.activePoke();
            this.refresh();
        } else {
            if (this.trainer) {
                this.trainer = null;
                this.pause(enemy);
            }
            flash($('#gameContainer'));
            if (ROUTES[player.settings.currentRegionId][getRouteIndexByName(player.settings.currentRegionId,player.settings.currentRouteId)]['respawn']) {
                console.log("playerfaint");
                console.log(enemy);
                userInteractions.changeRoute(ROUTES[player.settings.currentRegionId][getRouteIndexByName(player.settings.currentRegionId,player.settings.currentRouteId)]['respawn'], true,player,dom,this,enemy);
            }
        }
        dom.renderPokeList(false,player);
    };
    attemptCatch(enemy,player,dom) {
        if ((this.catchEnabled === 'all' && !this.trainer )|| ((this.catchEnabled === 'new' && !player.hasPokemon(enemy.activePoke().name, 0)) && !this.trainer)) {
            const selectedBall = (enemy.activePoke().shiny ? player.bestAvailableBall() : player.selectedBall);
            if (player.consumeBall(selectedBall)) {
                dom.renderBalls();
                const gainCatchCoins = Math.floor(this.enemyActivePoke.level * 1) + 1;
                const catchBonus = (player.unlocked.razzBerry) ? 1.25 : 1;
                const rngHappened = RNG(((enemy.activePoke().catchRate() * player.ballRNG(selectedBall)) / 3) * catchBonus);
                if (rngHappened) {
                    player.addCatchCoins(gainCatchCoins);
                    if (!player.hasPokemon(enemy.activePoke().name, 0)) {
                    player.addPoke(enemy.activePoke(), 0);
                    dom.renderPokeList();
                    }
                    player.addPokedex(enemy.activePoke().name, (enemy.activePoke().shiny ? POKEDEXFLAGS.ownShiny : POKEDEXFLAGS.ownNormal));
                    if (enemy.activePoke().shiny) {
                        player.unlocked.shinyDex = 1;
                    }
                    renderView(dom,enemy, player);
                }
            }
        }
    };
    findPokeballs(pokeLevel,player,dom) {
        const ballsAmount = Math.floor(Math.random() * (pokeLevel/2)) + 1;
        const ballWeights = {
            'masterball': 1,
            'ultraball': 10,
            'greatball': 20,
            'pokeball': 100,
        };
        const rng = Math.floor(Math.random() * (2000 - (pokeLevel * 4)));
        for (let ballName in ballWeights) {
            if (rng < ballWeights[ballName]) {
                player.addBalls(ballName, ballsAmount);
                dom.renderBalls(player);
            }
        }
    };
    changePlayerPoke(newPoke) {
        this.playerActivePoke = newPoke;
        this.refresh()
    };
    changeEnemyPoke(newPoke) {
        this.enemyActivePoke = newPoke;
        this.refresh()
    };
    changeCatch(shouldCatch) { this.catchEnabled = shouldCatch; }
};