const Player = require('./player')


function detCardAbility(number, color) {
    switch (number) {
        case 7:
        case 8:
            return "look-at-own";        
        case 9:
        case 10: 
            return "look-at-other";
        case 11:
        case 12: 
            return "switch-no-looking";
        case 13: 
            return (color == "BLACK") ? "switch-yes-looking" : "";
        default:
            return "";
    }
}

function detCardValue(number, color) {
    if (number >= 1 && number <= 13 ) {
        return number;
    }
    // Jokers
    else if (number == 0) {
        return -1;
    }
    // Black king
    else if (color == "BLACK") {
        return 13;
    }
    // Red kings
    return 0;
}

function detCardName(number, suite) {
    if (number >= 1 && number <= 10) {
        return number + "_of_"
    }
}


class Card {
    constructor(number, suite) {
        this.number = number;
        this.suite = suite;
        this.color = (suite == "SPADES" || suite == "CLUBS") ? "BLACK" : "RED";
        this.ability = detCardAbility(this.number, this.color)
        this.value = detCardValue(this.number, this.color);
        this.name = detCardName(number, suite)
    }

    

    
}


class Game {
    constructor () {
        this.players = [];
    }
    
    addPlayer (playerName) {
        this.players.push(new Player(playerName));
    }

    getPlayer(playerName) {
        for (var i = 0; i < this.players.length(); i++) {
            if (this.players[i].name == playerName) {
                return this.players[i];
            }
        }
    }

    getPlayerCards(playerName) {
        return this.getPlayer(playerName)
    }
}

module.exports = Game;