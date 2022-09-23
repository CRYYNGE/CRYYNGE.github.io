addLayer("1", {
    name: "Generators", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		power: new Decimal(0),
    }},
    color: "#E63244",
	
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Generators", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
	tabFormat: [
        "main-display",
        "prestige-button",
        ["blank", "25px"],
        ["display-text", () => "<h5 style='opacity:0.5'>Beginner tip: Press the button to turn Points into Generators</h5>"],
        ["blank", "15px"],
        ["microtabs", "stuff"],
        ["blank", "35px"],
    ],
	microtabs: {
        stuff: {
            "Upgrades": {
                content: [
                    ["blank", "15px"],
                    "upgrades"
                ]
            },
			"Power": {
				unlocked: () => hasUpgrade("1", 11),
				content: [
					
					["blank", "15px"],
					["display-text",
					function() { return 'You have ' + format(player["1.1"].points) + ' Power.' },
					{ "color": "gray", "font-size": "15px", /*"font-family": "Comic Sans MS"*/ }],
					"Buyables"
				]
			}
        },
	},
	
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        //if (hasUpgrade('1', 11)) mult = mult.times(upgradeEffect('1', 11))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    /*hotkeys: [
        {key: "g", description: "G: Generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],*/
	upgrades: {
		11: {
				title: "Start the Generators",
				description: "Unlocks the Power Tab",
				cost: new Decimal(5),
			},
		/*12: {
				title: "ALU",
				description: "Unlocks the Addition Tab",
				cost: new Decimal(25),
        },
		13: {
				title: "Feeding the Generators Points",
				description: "Increased Generator gain by Points",
				cost: new Decimal(5),
				effect() {
					return player.points.add(1).pow(0.15)
				},
        },*/
    },
    layerShown(){return true}
	
})
addLayer("1.1", {
    name: "Power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		power: new Decimal(0),
    }},
    color: "#E63244",
	
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Power", // Name of prestige currency
    baseResource: "Generators", // Name of resource prestige is based on
    baseAmount() {return player["1"].points}, // Get the current amount of baseResource
	passiveGeneration() { return 0.01 },
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.01, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        //if (hasUpgrade('1', 11)) mult = mult.times(upgradeEffect('1', 11))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    /*hotkeys: [
        {key: "g", description: "G: Generators", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],*/
	upgrades: {
		11: {
				title: "Start the Generators",
				description: "Unlocks the Power Tab",
				cost: new Decimal(5),
			},
		/*12: {
				title: "ALU",
				description: "Unlocks the Addition Tab",
				cost: new Decimal(25),
        },
		13: {
				title: "Feeding the Generators Points",
				description: "Increased Generator gain by Points",
				cost: new Decimal(5),
				effect() {
					return player.points.add(1).pow(0.15)
				},
        },*/
    },
    layerShown(){return false}
	
})
