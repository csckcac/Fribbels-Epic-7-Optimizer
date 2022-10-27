/*
Defines basic constants in the game. This isn't used as much as it should be,
need to move other reused constants into here.
*/

module.exports = {

    // Remember to update piecesBySetIndex too
    setsByIndex: [
        "HealthSet",
        "DefenseSet",
        "AttackSet",
        "SpeedSet",
        "CriticalSet",
        "HitSet",
        "DestructionSet",
        "LifestealSet",
        "CounterSet",
        "ResistSet",
        "UnitySet",
        "RageSet",
        "ImmunitySet",
        "PenetrationSet",
        "RevengeSet",
        "InjurySet",
        "ProtectionSet",
        "TorrentSet"
    ],

    piecesBySetIndex: [
        2,
        2,
        4,
        4,
        2,
        2,
        4,
        4,
        4,
        2,
        2,
        4,
        2,
        2,
        4,
        4,
        4,
        2,
    ],

    indexByGearType: {
        "Weapon": 0,
        "Helmet": 1,
        "Armor": 2,
        "Necklace": 3,
        "Ring": 4,
        "Boots": 5,
    },

    gearDisplayIdByIndex: {
        0: "heroes-equipped-weapon",
        1: "heroes-equipped-helmet",
        2: "heroes-equipped-armor",
        3: "heroes-equipped-necklace",
        4: "heroes-equipped-ring",
        5: "heroes-equipped-boots",
    },

    speedByItemTypeNotYetRolled: {
        "Epic": {
            15: 0,
            12: 0,
            9: 0,
            6: 0,
            3: 0,
            0: 0
        },
        "Heroic": {
            15: 0,
            12: 0,
            9: 2,
            6: 2,
            3: 2,
            0: 2
        },
        "Rare": {
            15: 0,
            12: 0,
            9: 2,
            6: 2,
            3: 2,
            0: 2
        },
        "Good": {
            15: 0,
            12: 0,
            9: 2,
            6: 2,
            3: 2,
            0: 2
        },
        "Normal": {
            15: 0,
            12: 2,
            9: 2,
            6: 2,
            3: 2,
            0: 2
        }
    },

    speedByItemTypeAlreadyRolled: {
        "Epic": {
            15: 0,
            12: 1,
            9: 2,
            6: 3,
            3: 4,
            0: 5
        },
        "Heroic": {
            15: 0,
            12: 1,
            9: 1,
            6: 2,
            3: 3,
            0: 4
        },
        "Rare": {
            15: 0,
            12: 1,
            9: 1,
            6: 1,
            3: 2,
            0: 3
        },
        "Good": {
            15: 0,
            12: 1,
            9: 1,
            6: 1,
            3: 1,
            0: 2
        },
        "Normal": {
            15: 0,
            12: 1,
            9: 1,
            6: 1,
            3: 1,
            0: 1
        }
    },

    speedRollsToValue: {
        0: 0,
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 4,
    },

    modValues: {
        reforged: {
            lesser: {
                Speed: [
                    [2, 3],
                    [3, 5],
                    [5, 7],
                    [7, 9],
                    [9, 11],
                    [10, 12],
                ],
                Health: [
                    [190, 228],
                    [312, 397],
                    [442, 527],
                    [545, 616],
                    [650, 771],
                    [813, 896],
                ],
                Defense: [
                    [33, 39],
                    [45, 70],
                    [70, 92],
                    [87, 104],
                    [107, 127],
                    [134, 148],
                ],
                Attack: [
                    [39, 51],
                    [64, 87],
                    [91, 119],
                    [111, 137],
                    [135, 165],
                    [175, 194],
                ],
                CriticalHitChancePercent: [
                    [3, 4],
                    [4, 6],
                    [6, 8],
                    [8, 11],
                    [11, 13],
                    [13, 15],
                ],
                CriticalHitDamagePercent: [
                    [4, 5],
                    [6, 8],
                    [9, 12],
                    [13, 16],
                    [17, 19],
                    [19, 21],
                ],
                AttackPercent: [
                    [4, 6],
                    [8, 11],
                    [12, 15],
                    [16, 19],
                    [20, 22],
                    [22, 24],
                ],
                DefensePercent: [
                    [4, 6],
                    [8, 11],
                    [12, 15],
                    [16, 19],
                    [20, 22],
                    [22, 24],
                ],
                HealthPercent: [
                    [4, 6],
                    [8, 11],
                    [12, 15],
                    [16, 19],
                    [20, 22],
                    [22, 24],
                ],
                EffectivenessPercent: [
                    [4, 6],
                    [8, 11],
                    [12, 15],
                    [16, 19],
                    [20, 22],
                    [22, 24],
                ],
                EffectResistancePercent: [
                    [4, 6],
                    [8, 11],
                    [12, 15],
                    [16, 19],
                    [20, 22],
                    [22, 24],
                ],
            },
            greater: {
                Speed: [
                    [2, 4],
                    [4, 6],
                    [6, 8],
                    [8, 11],
                    [10, 13],
                    [11, 14],
                ],
                Health: [
                    [214, 259],
                    [347, 448],
                    [490, 590],
                    [602, 685],
                    [715, 858],
                    [897, 995],
                ],
                Defense: [
                    [37, 44],
                    [50, 79],
                    [78, 103],
                    [96, 116],
                    [118, 142],
                    [148, 165],
                ],
                Attack: [
                    [44, 58],
                    [72, 99],
                    [101, 134],
                    [123, 153],
                    [149, 184],
                    [194, 217],
                ],
                CriticalHitChancePercent: [
                    [3, 5],
                    [5, 8],
                    [8, 11],
                    [11, 14],
                    [14, 16],
                    [16, 18],
                ],
                CriticalHitDamagePercent: [
                    [5, 8],
                    [8, 11],
                    [11, 15],
                    [15, 19],
                    [19, 22],
                    [21, 24],
                ],
                AttackPercent: [
                    [5, 9],
                    [10, 14],
                    [14, 18],
                    [18, 22],
                    [22, 25],
                    [24, 27],
                ],
                DefensePercent: [
                    [5, 9],
                    [10, 14],
                    [14, 18],
                    [18, 22],
                    [22, 25],
                    [24, 27],
                ],
                HealthPercent: [
                    [5, 9],
                    [10, 14],
                    [14, 18],
                    [18, 22],
                    [22, 25],
                    [24, 27],
                ],
                EffectivenessPercent: [
                    [5, 9],
                    [10, 14],
                    [14, 18],
                    [18, 22],
                    [22, 25],
                    [24, 27],
                ],
                EffectResistancePercent: [
                    [5, 9],
                    [10, 14],
                    [14, 18],
                    [18, 22],
                    [22, 25],
                    [24, 27],
                ],
            }
        },

        unreforged: {
            lesser: {
                Speed: [
                    [2, 3],
                    [2, 4],
                    [3, 5],
                    [4, 6],
                    [5, 7],
                    [6, 8],
                ],
                Health: [
                    [134, 172],
                    [200, 285],
                    [274, 359],
                    [321, 392],
                    [370, 491],
                    [477, 560],
                ],
                Defense: [
                    [24, 30],
                    [27, 52],
                    [43, 65],
                    [51, 68],
                    [62, 82],
                    [80, 94],
                ],
                Attack: [
                    [28, 40],
                    [42, 65],
                    [58, 86],
                    [67, 93],
                    [80, 110],
                    [109, 128],
                ],
                CriticalHitChancePercent: [
                    [2, 3],
                    [2, 4],
                    [3, 5],
                    [4, 7],
                    [6, 8],
                    [7, 9],
                ],
                CriticalHitDamagePercent: [
                    [3, 4],
                    [4, 6],
                    [6, 9],
                    [9, 12],
                    [11, 13],
                    [12, 14],
                ],
                AttackPercent: [
                    [3, 5],
                    [5, 8],
                    [8, 11],
                    [11, 14],
                    [13, 15],
                    [14, 16],
                ],
                DefensePercent: [
                    [3, 5],
                    [5, 8],
                    [8, 11],
                    [11, 14],
                    [13, 15],
                    [14, 16],
                ],
                HealthPercent: [
                    [3, 5],
                    [5, 8],
                    [8, 11],
                    [11, 14],
                    [13, 15],
                    [14, 16],
                ],
                EffectivenessPercent: [
                    [3, 5],
                    [5, 8],
                    [8, 11],
                    [11, 14],
                    [13, 15],
                    [14, 16],
                ],
                EffectResistancePercent: [
                    [3, 5],
                    [5, 8],
                    [8, 11],
                    [11, 14],
                    [13, 15],
                    [14, 16],
                ],
            },
            greater: {
                Speed: [
                    [2, 4],
                    [3, 5],
                    [4, 6],
                    [5, 8],
                    [6, 9],
                    [7, 10],
                ],
                Health: [
                    [158, 203],
                    [235, 336],
                    [322, 422],
                    [378, 461],
                    [435, 578],
                    [561, 659],
                ],
                Defense: [
                    [28, 35],
                    [32, 61],
                    [51, 76],
                    [60, 80],
                    [73, 97],
                    [94, 111],
                ],
                Attack: [
                    [33, 47],
                    [50, 77],
                    [68, 101],
                    [79, 109],
                    [94, 129],
                    [128, 151],
                ],
                CriticalHitChancePercent: [
                    [2, 4],
                    [3, 6],
                    [5, 8],
                    [7, 10],
                    [9, 11],
                    [10, 12],
                ],
                CriticalHitDamagePercent: [
                    [4, 7],
                    [6, 9],
                    [8, 12],
                    [11, 15],
                    [13, 16],
                    [14, 17],
                ],
                AttackPercent: [
                    [4, 8],
                    [7, 11],
                    [10, 14],
                    [13, 17],
                    [15, 18],
                    [16, 19],
                ],
                DefensePercent: [
                    [4, 8],
                    [7, 11],
                    [10, 14],
                    [13, 17],
                    [15, 18],
                    [16, 19],
                ],
                HealthPercent: [
                    [4, 8],
                    [7, 11],
                    [10, 14],
                    [13, 17],
                    [15, 18],
                    [16, 19],
                ],
                EffectivenessPercent: [
                    [4, 8],
                    [7, 11],
                    [10, 14],
                    [13, 17],
                    [15, 18],
                    [16, 19],
                ],
                EffectResistancePercent: [
                    [4, 8],
                    [7, 11],
                    [10, 14],
                    [13, 17],
                    [15, 18],
                    [16, 19],
                ],
            }
        }
    }
}