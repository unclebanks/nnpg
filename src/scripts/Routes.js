export const ROUTES = {
    Kanto: {
        palletTown: {
            name: 'Pallet Town',
            id: "palletTown",
            type: "town",
            prof: {
                name: 'Prof. Oak',
                win: 'oak1',
                poke: [
                    ['Bulbasaur', 15],
                    ['Charmander', 15],
                    ['Squirtle', 15]
                ]
            },
            npc: [
                {
                    name: "Prof. Oak",
                    id: "oak",
                    message: "Awesome"
                },
                {
                    name: "Blue",
                    id: "blue",
                    message: "Turd"
                }
            ],
            buildings: [
                {
                    name: "Prof. Lab",
                    id: "profLab",
                    type: "lab"
                }
            ]
        },
        kantoRoute1: {
            name: 'Route 1',
            id: "kantoRoute1",
            type: "route",
            pokes: ['Pidgey', 'Rattata'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'palletTown'
        },
        viridianCity: {
            name: 'Viridian City',
            id: "viridianCity",
            type: "town",
            gymLeader: {
                name: 'Giovanni',
                badge: 'Earth Badge',
                poke: [
                    ['Rhyhorn', 45],
                    ['Dugtrio', 42],
                    ['Nidoqueen', 44],
                    ['Nidoking', 45],
                    ['Rhydon', 50]
                ]
            }
        },
        kantoRoute22: {
            name: 'Route 22',
            id: "kantoRoute22",
            type: "route",
            pokes: ['Rattata', 'Nidoran F', 'Nidoran M', 'Mankey', 'Spearow'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'viridianCity'
        }
        , kantoRoute2: {
            name: 'Route 2'
            , pokes: ['Pidgey', 'Rattata', 'Caterpie', 'Weedle', 'Nidoran F', 'Nidoran M']
            , minLevel: 3
            , maxLevel: 5,
            respawn: 'viridianCity',
        }
        , viridianForest: {
            name: 'Virdian Forest'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Pikachu']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'viridianCity'
        }
        , pewterCity: {
            name: 'Pewter City',
            id: "pewterCity",
            type: "town",
            gym: [
                {
                    name: "Craig",
                    pokemon: ["pika", "squirter"],
                    type: "gymTrainer",
                    win: 0
                },
                {
                    name: "Brock",
                    pokemon: ["geodude", "onix"],
                    type: "gymLeader",
                    win: 1,
                    badge: "Boulder Badge"
                }
            ]
        }
        , kantoRoute3: {
            name: 'Route 3'
            , pokes: ['Pidgey', 'Rattata', 'Spearow', 'Jigglypuff', 'Sandshrew', 'Mankey']
            , minLevel: 5
            , maxLevel: 12,
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        kantoRoute4: {
            name: 'Route 4'
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Mankey']
            , minLevel: 6
            , maxLevel: 12,
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        ceruleanCity: {
            name: 'Cerulean City',
            town: true,
            gymLeader: {
                name: 'Misty',
                badge: 'Cascade Badge',
                win: 'cascade1',
                poke: [
                    ['Staryu', 18],
                    ['Starmie', 21]
                ],
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , kantoRoute24: {
            name: 'Route 24'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout']
            , minLevel: 7
            , maxLevel: 14,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , kantoRoute25: {
            name: 'Route 25'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout']
            , minLevel: 7
            , maxLevel: 14,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , kantoRoute5: {
            name: 'Route 5'
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout']
            , minLevel: 10
            , maxLevel: 16,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        }
        , kantoRoute6: {
            name: 'Route 6'
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout']
            , minLevel: 10
            , maxLevel: 16,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        vermilionCity: {
            name: 'Vermilion City',
            town: true,
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        kantoRoute11: {
            name: 'Route 11'
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
            , minLevel: 18
            , maxLevel: 25,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        }
        , kantoRoute9: {
            name: 'Route 9'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino']
            , minLevel: 9
            , maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        kantoRoute10: {
            name: 'Route 10'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidoran M', 'Machop', 'Magnemite', 'Voltorb']
            , minLevel: 11
            , maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        lavenderTown: {
            name: 'Lavender Town',
            town: true,
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        kantoRoute8: {
            name: 'Route 8',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Ekans', 'Sandshrew', 'Vulpix', 'Jiglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra'],
            minLevel: 15,
            maxLevel: 20,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , kantoRoute7: {
            name: 'Route 7'
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout']
            , minLevel: 18
            , maxLevel: 22,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        celadonCity: {
            name: 'Celadon City',
            town: true,
            gymLeader: {
                name: 'Erika',
                badge: 'Rainbow Badge',
                win: 'rainbow1',
                poke: [
                    ['Victreebel', 29],
                    ['Tangela', 24],
                    ['Vileplume', 29]
                ]
            }
        },
        saffronCity: {
            name: 'Saffron City',
            town: true,
            gymLeader: {
                name: 'Sabrina',
                badge: 'Marsh Badge',
                win: 'marsh1',
                poke: [
                    ['Kadabra', 38],
                    ['Mr. Mime', 37],
                    ['Venomoth', 38],
                    ['Alakazam', 43]
                ]
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        kantoRoute16: {
            name: 'Route 16'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Snorlax']
            , minLevel: 18
            , maxLevel: 30,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , kantoRoute17: {
            name: 'Route 17'
            , pokes: ['Raticate', 'Spearow', 'Fearow', 'Ponyta', 'Doduo', 'Dodrio']
            , minLevel: 20
            , maxLevel: 29,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , kantoRoute18: {
            name: 'Route 18'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo']
            , minLevel: 20
            , maxLevel: 29,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        fuchsiaCity: {
            name: 'Fuchsia City',
            town: true,
            gymLeader: {
                name: 'Koga',
                badge: 'Soul Badge',
                poke: [
                    ['Koffing', 37],
                    ['Muk', 39],
                    ['Koffing', 37],
                    ['Weezing', 43]
                ]
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        kantoRoute15: {
            name: 'Route 15'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        }
        , kantoRoute14: {
            name: 'Route 14'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 23
            , maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        }
        , kantoRoute13: {
            name: 'Route 13'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto', 'Farfetchd']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        kantoRoute12: {
            name: 'Route 12'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Snorlax', 'Mr. Mime', 'Farfetchd']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        kantoRoute19: {
            name: 'Route 19'
            , pokes: ['Tentacool']
            , minLevel: 5
            , maxLevel: 40,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        kantoRoute20: {
            name: 'Route 20'
            , pokes: ['Tentacool']
            , minLevel: 5
            , maxLevel: 40,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        cinnabarIsland: {
            name: 'Cinnabar Island',
            town: true,
            gymLeader: {
                name: 'Blaine',
                badge: 'Volcano Badge',
                win: 'volcano1',
                poke: [
                    ['Growlithe', 42],
                    ['Ponyta', 40],
                    ['Rapidash', 42],
                    ['Arcanine', 47]
                ]
            },
        }
        , kantoRoute21: {
            name: 'Route 21'
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tentacool', 'Tangela']
            , minLevel: 21
            , maxLevel: 32,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , kantoRoute23: {
            name: 'Route 23'
            , pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Nidorina', 'Nidorino', 'Mankey', 'Primeape', 'Ditto']
            , minLevel: 33
            , maxLevel: 43,
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        }
        , victoryRoad: {
            name: 'Victory Road'
            , pokes: ['Zubat', 'Golbat', 'Venomoth', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Onix', 'Marowak', 'Moltres']
            , minLevel: 36
            , maxLevel: 45,
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        }
        , ceruleanCave: {
            name: 'Cerulean Cave',
            pokes: ['Arbok', 'Raichu', 'Sandslash', 'Wigglytuff', 'Golbat', 'Gloom', 'Parasect', 'Venomoth', 'Kadabra', 'Weepinbell', 'Graveler', 'Magneton', 'Dodrio', 'Hypno', 'Electrode', 'Marowak', 'Lickitung', 'Rhyhorn', 'Rhydon', 'Chansey', 'Ditto', 'Mewtwo'],
            minLevel: 51,
            maxLevel: 60,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        }
    },
    Johto: {
        _unlock: {
            badges: {
                'Earth Badge': true
            }
        },
        _global: {
            pokes: ['Chikorita', 'Cyndaquil', 'Totodile'],
            rarePokes: ['Shuckle', 'Raikou', 'Entei', 'Suicune', 'Celebi'],
            superRare: []
        },
        newBarkTown: {
            name: 'New Bark Town',
            town: true,
            prof: {
                name: 'Prof. Elm',
                badge: null,
                poke: [
                    ['Chikorita', 15],
                    ['Cyndaquil', 15],
                    ['Totodile', 15]
                ]
            }
        }
        , jroute29: {
            name: 'Route 29'
            , pokes: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot', 'Hoppip']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'starter2'
        },
        cherrygroveCity: {
            name: 'Cherrygrove City',
            town: true
        }
        , jroute30: {
            name: 'Route 30'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'cherrygroveCity'
        }
        , jroute46: {
            name: 'Route 46'
            , pokes: ['Rattata', 'Spearow', 'Jigglypuff', 'Geodude', 'Phanpy']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'NewBarkTown',
        }
        , jroute31: {
            name: 'Route 31'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Bellsprout', 'Gastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'cherrygroveCity'
        }
        , darkCave: {
            name: 'Dark Cave'
            , pokes: ['Zubat', 'Geodude', 'Graveler', 'Wobbuffet', 'Dunsparce', 'Teddiursa', 'Ursaring']
            , minLevel: 2
            , maxLevel: 30,
            respawn: 'cherrygroveCity'
        },
        violetCity: {
            name: 'Violet City',
            town: true,
            gymLeader: {
                name: 'Falkner',
                win: 'falkner1',
                badge: 'Zephyr Badge',
                poke: [
                    ['Pidgeotto', 25],
                    ['Noctowl', 25],
                    ['Pidgeot', 25]
                ]
            },
            gymLeader1: {
                name: 'Falkner',
                win: 'falkner2',
                poke: [
                    ['Pidgeotto', 40],
                    ['Noctowl', 40],
                    ['Pidgeot', 40],
                    ['Murkrow', 40]
                ]
            },
            gymLeader2: {
                name: 'Falkner',
                win: 'falkner3',
                poke: [
                    ['Dodrio', 60],
                    ['Noctowl', 60],
                    ['Pidgeot', 60],
                    ['Murkrow', 60],
                    ['Fearow', 60]
                ]
            },
            gymLeader3: {
                name: 'Falkner',
                win: 'falkner4',
                megaStone: 'pidgeotite',
                poke: [
                    ['Dodrio', 100],
                    ['Noctowl', 100],
                    ['M-Pidgeot', 100],
                    ['Murkrow', 100],
                    ['Fearow', 100]
                ]
            },
        }
        , sproutTower: {
            name: 'Sprout Tower'
            , pokes: ['Rattata', 'Gastly']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , jroute32: {
            name: 'Route 32'
            , pokes: ['Pidgey', 'Rattata', 'Ekans', 'Zubat', 'Bellsprout', 'Gastly', 'Hoothoot', 'Mareep', 'Hoppip', 'Wooper']
            , minLevel: 4
            , maxLevel: 8,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , ruinsofAlph: {
            name: 'Ruins of Alph'
            , pokes: ['Natu', 'Smeargle', 'Wooper']
            , minLevel: 18
            , maxLevel: 24,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , innerRuins: {
            name: 'Inner Ruins'
            , pokes: ['Unown']
            , minLevel: 5
            , maxLevel: 5,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , unionCave: {
            name: 'Union Cave'
            , pokes: ['Rattata', 'Raticate', 'Sandshrew', 'Zubat', 'Golbat', 'Geodude', 'Onix', 'Wooper', 'Quagsire', 'Lapras']
            , minLevel: 6
            , maxLevel: 24,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , jroute33: {
            name: 'Route 33'
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Zubat', 'Geodude', 'Hoppip']
            , minLevel: 6
            , maxLevel: 8,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , slowpokeWell: {
            name: 'Slowpoke Well'
            , pokes: ['Zubat', 'Golbat', 'Slowpoke', 'Slowking']
            , minLevel: 5
            , maxLevel: 25,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , azaleaTown: {
            name: 'Azalea Town',
            town: true,
            gymLeader: {
                name: 'Bugsy',
                win: 'bugsy1',
                badge: 'Hive Badge',
                poke: [
                    ['Butterfree', 25],
                    ['Beedrill', 25],
                    ['Scyther', 25]
                ]
            },
            gymLeader1: {
                name: 'Bugsy',
                win: 'bugsy2',
                poke: [
                    ['Butterfree', 60],
                    ['Beedrill', 60],
                    ['Scizor', 60],
                    ['Pinsir', 60],
                ]
            },
            gymLeader2: {
                name: 'Bugsy',
                win: 'bugsy3',
                poke: [
                    ['Heracross', 80],
                    ['Beedrill', 80],
                    ['Scizor', 80],
                    ['Ariados', 80],
                    ['Pinsir', 80],
                ]
            },
            gymLeader3: {
                name: 'Bugsy',
                win: 'bugsy4',
                megaStone: 'beedrillite',
                poke: [
                    ['M-Heracross', 100],
                    ['M-Beedrill', 100],
                    ['M-Scizor', 100],
                    ['Ariados', 100],
                    ['M-Pinsir', 100],
                ]
            },
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , ilexForest: {
            name: 'Ilex Forest'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Zubat', 'Oddish', 'Paras', 'Venonat', 'Psyduck', 'Hoothoot']
            , minLevel: 5
            , maxLevel: 7,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Hive Badge': true
                }
            }
        }
        , jroute34: {
            name: 'Route 34'
            , pokes: ['Pidgey', 'Rattata', 'Jigglypuff', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Snubbull']
            , minLevel: 10
            , maxLevel: 12,
            respawn: 'azaleaTown',
            _unlock: {
                badges: {
                    'Hive Badge': true
                }
            }
        },
        daycareHouse: {
            name: 'Daycare House'
            , pokes: ['Pichu', 'Cleffa', 'Igglybuff', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Togepi'] // TODO: make these hatch from eggs
            , minLevel: 5
            , maxLevel: 5
        },
        goldenrodCity: {
            name: 'Goldenrod City',
            town: true,
            gymLeader: {
                name: 'Whitney',
                win: 'whitney1',
                badge: 'Plain Badge',
                poke: [
                    ['Clefairy', 18],
                    ['Miltank', 20]
                ]
            },
            gymLeader1: {
                name: 'Whitney',
                win: 'whitney2',
                poke: [
                    ['Clefable', 60],
                    ['Wigglytuff', 60],
                    ['Miltank', 60],
                    ['Granbull', 60],
                ]
            },
            gymLeader2: {
                name: 'Whitney',
                win: 'whitney3',
                poke: [
                    ['Clefable', 60],
                    ['Wigglytuff', 60],
                    ['Miltank', 60],
                    ['Granbull', 60],
                    ['Blissey', 60]
                ]
            },
            gymLeader3: {
                name: 'Whitney',
                win: 'whitney4',
                poke: [
                    ['Clefable', 100],
                    ['Wigglytuff', 100],
                    ['Miltank', 100],
                    ['Granbull', 100],
                    ['Blissey', 100]
                ]
            },
            _unlock: {
                badges: {
                    'Hive Badge': true
                }
            }
        }
        , jroute35: {
            name: 'Route 35'
            , pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Jigglypuff', 'Psyduck', 'Growlithe', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Yanma', 'Snubbull']
            , minLevel: 10
            , maxLevel: 14,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , nationalPark: {
            name: 'National Park'
            , pokes: ['Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Nidoran F', 'Nidoran M', 'Paras', 'Venonat', 'Psyduck', 'Scyther', 'Pinsir', 'Hoothoot', 'Ledyba', 'Spinarak', 'Sunkern']
            , minLevel: 10
            , maxLevel: 15,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , jroute36: {
            name: 'Route 36'
            , pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Vulpix', 'Growlithe', 'Bellsprout', 'Ghastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Stantler', 'Sudowoodo']
            , minLevel: 13
            , maxLevel: 20,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , jroute37: {
            name: 'Route 37'
            , pokes: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Stantler']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        },
        ecruteakCity: {
            name: 'Ecruteak City',
            town: true,
            gymLeader: {
                name: 'Morty',
                badge: 'Fog Badge',
                poke: [
                    ['Gastly', 21],
                    ['Haunter', 21],
                    ['Haunter', 23],
                    ['Gengar', 25]
                ]
            },
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , burnedTower: {
            name: 'Burned Tower'
            , pokes: ['Rattata', 'Raticate', 'Zubat', 'Koffing', 'Weezing', 'Magmar']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , tinTower: {
            name: 'Tin Tower'
            , pokes: ['Rattata', 'Gastly', 'Ho-Oh']
            , minLevel: 20
            , maxLevel: 70,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , jroute38: {
            name: 'Route 38'
            , pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Snubbull', 'Miltank']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Fog Badge': true
                }
            }
        }
        , jroute39: {
            name: 'Route 39'
            , pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Miltank']
            , minLevel: 15
            , maxLevel: 16,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Fog Badge': true
                }
            }
        },
        olivineCity: {
            name: 'Olivine City',
            town: true,
            gymLeader: {
                name: 'Jasmine',
                win: 'jasmine1',
                badge: 'Mineral Badge',
                poke: [
                    ['Magneton', 45],
                    ['Forretress', 45],
                    ['Steelix', 45]
                ]
            },
            gymLeader1: {
                name: 'Jasmine',
                win: 'jasmine2',
                poke: [
                    ['Magneton', 60],
                    ['Forretress', 60],
                    ['Steelix', 60]
                ]
            },
            gymLeader2: {
                name: 'Jasmine',
                win: 'jasmine3',
                poke: [
                    ['Magnezone', 85],
                    ['M-Scizor', 85],
                    ['Forretress', 85],
                    ['Skarmory', 85],
                    ['M-Steelix', 85]
                ]
            },
            gymLeader3: {
                name: 'Jasmine',
                win: 'jasmine4',
                megaStone: 'steelixite',
                poke: [
                    ['Magnezone', 100],
                    ['M-Scizor', 100],
                    ['Forretress', 100],
                    ['Skarmory', 100],
                    ['M-Steelix', 100]
                ]
            },
            _unlock: {
                badges: {
                    'Fog Badge': true
                }
            }
        }
        , jroute40: {
            name: 'Route 40'
            , pokes: ['Tentacool', 'Tentacruel']
            , minLevel: 15
            , maxLevel: 24,
            respawn: 'olivineCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true
                }
            }
        }
        , jroute41: {
            name: 'Route 41'
            , pokes: ['Mantine', 'Tentacool', 'Tentacruel']
            , minLevel: 20
            , maxLevel: 24,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , whirlIsland: {
            name: 'Whirl Island'
            , pokes: ['Zubat', 'Golbat', 'Seel', 'Krabby', 'Lugia']
            , minLevel: 22
            , maxLevel: 70,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , cianwoodCity: {
            name: 'Cianwood City',
            town: true,
            gymLeader: {
                name: 'Chuck',
                badge: 'Storm Badge',
                poke: [
                    ['Primeape', 27],
                    ['Poliwrath', 30]
                ]
            },
            _unlock: {
                badges: {
                    'Mineral Badge': true
                }
            }
        }
        , jroute47: {
            name: 'Route 47'
            , pokes: ['Raticate', 'Spearow', 'Fearow', 'Gloom', 'Farfetchd', 'Ditto', 'Noctowl', 'Miltank']
            , minLevel: 40
            , maxLevel: 43,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true
                }
            }
        }
        , jroute48: {
            name: 'Route 48'
            , pokes: ['Fearow', 'Vulpix', 'Gloom', 'Diglett', 'Growlithe', 'Farfetchd', 'Tauros', 'Hoppip', 'Girafarig']
            , minLevel: 40
            , maxLevel: 43,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true
                }
            }
        }
        , jroute42: {
            name: 'Route 42'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Zubat', 'Golbat', 'Mankey', 'Mareep', 'Flaaffy', 'Marill']
            , minLevel: 13
            , maxLevel: 17,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , mtMortar: {
            name: 'Mt. Mortar'
            , pokes: ['Rattata', 'Raticate', 'Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Marill']
            , minLevel: 15
            , maxLevel: 32,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , rocketHideout: {
            name: 'Rocket Hideout'
            , pokes: ['Geodude', 'Voltorb', 'Electrode', 'Koffing']
            , minLevel: 23
            , maxLevel: 23,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        },
        mahoganyTown: {
            name: 'Mahogany Town',
            town: true,
            gymLeader: {
                name: 'Pryce',
                badge: 'Glacier Badge',
                poke: [
                    ['Seel', 27],
                    ['Dewgong', 29],
                    ['Piloswine', 31]
                ]
            },
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , jroute43: {
            name: 'Route 43'
            , pokes: ['Pidgeotto', 'Raticate', 'Venonat', 'Venomoth', 'Farfetchd', 'Sentret', 'Furret', 'Noctowl', 'Mareep', 'Flaaffy', 'Girafarig']
            , minLevel: 15
            , maxLevel: 17,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , lakeofRage: {
            name: 'Lake of Rage'
            , pokes: ['Gyarados', 'Magikarp']
            , minLevel: 30
            , maxLevel: 30,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , jroute44: {
            name: 'Route 44'
            , pokes: ['Poliwag', 'Poliwhirl', 'Bellsprout', 'Weepinbell', 'Lickitung', 'Tangela']
            , minLevel: 22
            , maxLevel: 26,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , icePath: {
            name: 'Ice Path'
            , pokes: ['Zubat', 'Golbat', 'Jynx', 'Sneasel', 'Swinub', 'Delibird']
            , minLevel: 21
            , maxLevel: 24,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , dragonsDen: {
            name: 'Dragons Den'
            , pokes: ['Magikarp', 'Dratini']
            , minLevel: 10
            , maxLevel: 14,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , jroute45: {
            name: 'Route 45'
            , pokes: ['Geodude', 'Graveler', 'Gligar', 'Teddiursa', 'Skarmory', 'Phanpy', 'Donphan']
            , minLevel: 20
            , maxLevel: 27,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        },
        blackthornCity: {
            name: 'Blackthorn City',
            town: true,
            gymLeader: {
                name: 'Clair',
                badge: 'Rising Badge',
                poke: [
                    ['Dragonair', 37],
                    ['Dragonair', 37],
                    ['Dragonair', 37],
                    ['Kingdra', 40]
                ]
            },
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , jroute26: {
            name: 'Route 27'
            , pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire']
            , minLevel: 28
            , maxLevel: 32,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , jroute27: {
            name: 'Route 26'
            , pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire']
            , minLevel: 28
            , maxLevel: 32,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , jroute28: {
            name: 'Route 28'
            , pokes: ['Ponyta', 'Tangela', 'Ursaring', 'Donphan', 'Rapidash', 'Arbok', 'Doduo', 'Dodrio', 'Sneasel', 'Poliwhirl', 'Golbat']
            , minLevel: 39
            , maxLevel: 42,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , mtSilver: {
            name: 'Mt.Silver'
            , pokes: ['Arbok', 'Golbat', 'Parasect', 'Golduck', 'Poliwhirl', 'Machoke', 'Graveler', 'Doduo', 'Dodrio', 'Ponyta', 'Rapidash', 'Onix', 'Tangela', 'Magmar', 'Quagsire', 'Misdreavus', 'Sneasel', 'Ursaring', 'Donphan', 'Larvitar', 'Pupitar']
            , minLevel: 38
            , maxLevel: 48,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
    },
    Hoenn: {
        _unlock: {
            badges: {
                'Rising Badge': true
            }
        },
        _global: {
            pokes: ['Treecko', 'Mudkip', 'Torchic'],
            rarePokes: ['Deoxys', 'Jirachi', 'Rayquaza'],
            superRare: []
        },
        littlerootTown: {
            name: 'Littleroot Town',
            town: true,
            prof: {
                name: 'Prof. Birch',
                badge: null,
                poke: [
                    ['Treecko', 15],
                    ['Mudkip', 15],
                    ['Torchic', 15]
                ]
            }
        },
        hroute101: {
            name: 'Route 101'
            , pokes: ['Poochyena', 'Zigzagoon', 'Wurmple']
            , minLevel: 2
            , maxLevel: 3,
            respawn: 'littlerootTown',
        },
        oldaleTown: {
            name: 'Oldale Town',
            town: true,
        },
        hroute103: {
            name: 'Route 103'
            , pokes: ['Poochyena', 'Zigzagoon', 'Wingull']
            , minLevel: 2
            , maxLevel: 4,
            respawn: 'oldaleTown',
        },
        hroute102: {
            name: 'Route 102'
            , pokes: ['Poochyena', 'Zigzagoon', 'Wurmple', 'Lotad', 'Seedot', 'Ralts', 'Surskit']
            , minLevel: 3
            , maxLevel: 4,
            respawn: 'oldaleTown',
        },
        petalburgCity: {
            name: 'Petalburg City',
            town: true,
            gymLeader: {
                name: 'Norman',
                badge: 'Balance Badge',
                poke: [
                    ['Slaking', 57],
                    ['Blissey', 57],
                    ['Kangaskhan', 55],
                    ['Tauros', 57],
                    ['Spinda', 58],
                    ['Slaking', 60],
                ]
            },
        },
        hroute104: {
            name: 'Route 104'
            , pokes: ['Marill', 'Poochyena', 'Zigzagoon', 'Wurmple', 'Taillow', 'Wingull']
            , minLevel: 3
            , maxLevel: 5,
            respawn: 'petalburgCity',
        },
        petalburgWoods: {
            name: 'Petalburg Woods'
            , pokes: ['Poochyena', 'Zigzagoon', 'Wurmple', 'Silcoon', 'Cascoon', 'Taillow', 'Shroomish', 'Slakoth']
            , minLevel: 5
            , maxLevel: 6,
            respawn: 'petalburgCity',
        },
        rustboroCity: {
            name: 'Rustboro City',
            town: true,
            gymLeader: {
                name: 'Roxanne',
                badge: 'Stone Badge',
                poke: [
                    ['Aerodactyl', 47],
                    ['Golem', 47],
                    ['Omastar', 47],
                    ['Kabutops', 50],
                    ['Steelix', 50],
                    ['Nosepass', 52],
                ]
            },
        },
        hroute116: {
            name: 'Route 116'
            , pokes: ['Abra', 'Poochyena', 'Zigzagoon', 'Taillow', 'Nincada', 'Whismur', 'Skitty']
            , minLevel: 6
            , maxLevel: 8,
            respawn: 'rustboroCity',
        }
        , rusturfTunnel: {
            name: 'Rusturf Tunnel'
            , pokes: ['Whismur']
            , minLevel: 5
            , maxLevel: 8,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        }
        , hroute105: {
            name: 'Route 105'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'petalburgCity',
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        },
        hroute106: {
            name: 'Route 106'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'petalburgCity',
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        },
        dewfordTown: {
            name: 'Dewford Town',
            town: true,
            gymLeader: {
                name: 'Brawly',
                badge: 'Knuckle Badge',
                poke: [
                    ['Hitmonlee', 47],
                    ['Hitmonchan', 47],
                    ['Machamp', 47],
                    ['Medicham', 50],
                    ['Hitmontop', 50],
                    ['Hariyama', 52],
                ]
            },
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        },
        graniteCave: {
            name: 'Granite Cave'
            , pokes: ['Zubat', 'Abra', 'Geodude', 'Makuhita', 'Sableye', 'Mawile', 'Aron', 'Nosepass']
            , minLevel: 6
            , maxLevel: 12,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute107: {
            name: 'Route 107'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute108: {
            name: 'Route 108'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , abandonedShip: {
            name: 'Abandoned Ship'
            , pokes: ['Tentacool', 'Tentacruel']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , hroute109: {
            name: 'Route 109'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        slateportCity: {
            name: 'Slateport City',
            town: true,
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        hroute110: {
            name: 'Route 110'
            , pokes: ['Oddish', 'Zigzagoon', 'Poochyena', 'Wingull', 'Electrike', 'Plusle', 'Minun', 'Gulpin']
            , minLevel: 12
            , maxLevel: 13,
            respawn: 'slateportCity',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        mauvilleCity: {
            name: 'Mauville City',
            town: true,
            gymLeader: {
                name: 'Wattson',
                badge: 'Dynamo Badge',
                poke: [
                    ['Electabuzz', 50],
                    ['Raichu', 51],
                    ['Ampharos', 53],
                    ['Electrode', 53],
                    ['Magneton', 53],
                    ['Manectric', 55],
                ]
            },
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        newMauville: {
            name: 'New Mauville'
            , pokes: ['Magnemite', 'Magneton', 'Voltorb', 'Electrode']
            , minLevel: 22
            , maxLevel: 26,
            respawn: 'slateportCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , hroute117: {
            name: 'Route 117'
            , pokes: ['Oddish', 'Marill', 'Poochyena', 'Zigzagoon', 'Seedot', 'Surskit', 'Volbeat', 'Illumise', 'Roselia']
            , minLevel: 13
            , maxLevel: 14,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute111: {
            name: 'Route 111'
            , pokes: ['Sandshrew', 'Trapinch', 'Cacnea', 'Baltoy']
            , minLevel: 19
            , maxLevel: 22,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , hroute112: {
            name: 'Route 112'
            , pokes: ['Machop', 'Marill', 'Numel']
            , minLevel: 14
            , maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , fieryPath: {
            name: 'Fiery Path'
            , pokes: ['Machop', 'Grimer', 'Koffing', 'Slugma', 'Numel', 'Torkoal']
            , minLevel: 14
            , maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , hroute113: {
            name: 'Route 113'
            , pokes: ['Sandshrew', 'Slugma', 'Skarmory', 'Spinda']
            , minLevel: 14
            , maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        fallarborTown: {
            name: 'Fallarbor Town',
            town: true,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute114: {
            name: 'Route 114'
            , pokes: ['Lotad', 'Lombre', 'Seedot', 'Nuzleaf', 'Surskit', 'Swablu', 'Zangoose', 'Seviper']
            , minLevel: 15
            , maxLevel: 18,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        meteorFalls: {
            name: 'Meteor Falls'
            , pokes: ['Zubat', 'Golbat', 'Lunatone', 'Solrock', 'Bagon']
            , minLevel: 14
            , maxLevel: 40,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute115: {
            name: 'Route 115'
            , pokes: ['Jigglypuff', 'Taillow', 'Swellow', 'Wingull', 'Swablu']
            , minLevel: 23
            , maxLevel: 26,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        jaggedPass: {
            name: 'Jagged Pass'
            , pokes: ['Machop', 'Numel', 'Spoink']
            , minLevel: 18
            , maxLevel: 22,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        lavaridgeTown: {
            name: 'Lavaridge Town',
            town: true,
            gymLeader: {
                name: 'Flannery',
                badge: 'Heat Badge',
                poke: [
                    ['Arcanine', 55],
                    ['Magcargo', 51],
                    ['Houndoom', 53],
                    ['Rapidash', 53],
                    ['Camerupt', 53],
                    ['Torkoal', 55],
                ]
            },
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute118: {
            name: 'Route 118'
            , pokes: ['Zigzagoon', 'Linoone', 'Wingull', 'Electrike', 'Manectric', 'Kecleon']
            , minLevel: 24
            , maxLevel: 27,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , hroute119: {
            name: 'Route 119'
            , pokes: ['Oddish', 'Zigzagoon', 'Linoone', 'Kecleon', 'Tropius']
            , minLevel: 24
            , maxLevel: 27,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , weatherInstitute: {
            name: 'Weather Institute'
            , pokes: ['Castform']
            , minLevel: 25
            , maxLevel: 25,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        },
        fortreeCity: {
            name: 'Fortree City',
            town: true,
            gymLeader: {
                name: 'Winona',
                badge: 'Feather Badge',
                poke: [
                    ['Noctowl', 53],
                    ['Tropius', 55],
                    ['Pelipper', 55],
                    ['Dragonite', 58],
                    ['Skarmory', 57],
                    ['Altaria', 60],
                ]
            },
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        },
        hroute120: {
            name: 'Route 120'
            , pokes: ['Oddish', 'Marill', 'Poochyena', 'Zigzagoon', 'Linoone', 'Seedot', 'Surskit', 'Kecleon', 'Absol']
            , minLevel: 25
            , maxLevel: 27,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute121: {
            name: 'Route 121'
            , pokes: ['Oddish', 'Gloom', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon', 'Shuppet', 'Duskull']
            , minLevel: 25
            , maxLevel: 28,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hoennSafarZone: {
            name: 'Hoenn Safari Zone',
            pokes: ['Pikachu', 'Oddish', 'Gloom', 'Doduo', 'Dodrio', 'Rhyhorn', 'Pinsir', 'Hoothoot', 'Spinarak', 'Natu', 'Xatu', 'Mareep', 'Aipom', 'Sunkern', 'Girafarig', 'Wobbuffet', 'Pineco', 'Gligar', 'Snubbull', 'Heracross', 'Teddiursa', 'Houndour', 'Phanpy', 'Stantler', 'Miltank'],
            minLevel: 25,
            maxLevel: 40,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute122: {
            name: 'Route 122'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , myPyre: {
            name: 'Mt. Pyre'
            , pokes: ['Vulpix', 'Wingull', 'Meditite', 'Duskull', 'Shuppet', 'Chimecho']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute123: {
            name: 'Route 123'
            , pokes: ['Oddish', 'Gloom', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon', 'Shuppet', 'Duskull']
            , minLevel: 25
            , maxLevel: 28,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        lilycoveCity: {
            name: 'Lilycove City',
            town: true,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        hroute124: {
            name: 'Route 124'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'lilycoveCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        mossdeepCity: {
            name: 'Mossdeep City',
            town: true,
            gymLeader: {
                name: 'Liza & Tate',
                badge: 'Mind Badge',
                poke: [
                    ['Hypno', 64],
                    ['Claydol', 66],
                    ['Slowking', 66],
                    ['Xatu', 68],
                    ['Lunatone', 70],
                    ['Solrock', 70],
                ]
            },
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        hroute125: {
            name: 'Route 125'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , shoalCave: {
            name: 'Shoal Cave'
            , pokes: ['Zubat', 'Golbat', 'Snorunt', 'Spheal']
            , minLevel: 26
            , maxLevel: 32,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute126: {
            name: 'Route 126'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute127: {
            name: 'Route 127'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute128: {
            name: 'Route 128'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        },
        sootopolisCity: {
            name: 'Sootopolis City',
            town: true,
            gymLeader: {
                name: 'Juan',
                badge: 'Rain Badge',
                poke: [
                    ['Lapras', 75],
                    ['Whiscash', 75],
                    ['Politoed', 78],
                    ['Walrein', 78],
                    ['Crawdaunt', 79],
                    ['Kingdra', 80],
                ]
            },
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        },
        hVictoryRoad: {
            name: 'Victory Road',
            pokes: ['Zubat', 'Golbat', 'Whiscash', 'Loudred', 'Makuhita', 'Hariyama', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Meditite', 'Medicham'],
            minLevel: 36,
            maxLevel: 42,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute129: {
            name: 'Route 129'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper', 'Wailord']
            , minLevel: 5
            , maxLevel: 40,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute130: {
            name: 'Route 130'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , mirageIsland: {
            name: 'Mirage Island'
            , pokes: ['Wynaut']
            , minLevel: 5
            , maxLevel: 50,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute131: {
            name: 'Route 131'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , skyPillar: {
            name: 'Sky Pillar'
            , pokes: ['Golbat', 'Sableye', 'Mawile', 'Altaria', 'Claydoll', 'Banette', 'Dusclops']
            , minLevel: 34
            , maxLevel: 60,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , skyPillarRoof: {
            name: 'Sky Pillar Roof'
            , pokes: ['Rayquaza']
            , minLevel: 70
            , maxLevel: 70,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        },
        pacifidlogTown: {
            name: 'Pacifidlog Town',
            town: true,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute132: {
            name: 'Route 132'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute133: {
            name: 'Route 133'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute134: {
            name: 'Route 134'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , sealdedChamber: {
            name: 'Sealed Chamber'
            , pokes: ['Regice', 'Regirock', 'Registeel']
            , minLevel: 40
            , maxLevel: 40,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , southernIsland: {
            name: 'Southern Island'
            , pokes: ['Latios', 'Latias']
            , minLevel: 50
            , maxLevel: 50,
            respawn: 'lilycoveCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , caveOfOrigin: {
            name: 'Cave of Origin'
            , pokes: ['Kyogre', 'Groudon']
            , minLevel: 45
            , maxLevel: 45,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , underwater: {
            name: 'Underwater'
            , pokes: ['Chinchou', 'Clamperl', 'Relicanth']
            , minLevel: 20
            , maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
    }
};