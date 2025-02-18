class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.cards=  ["", "", "", ""];
    }

    get name() {
        return this.name;
    }

    setHand(cards) {
        this.cards = cards;
    }

    get cards() {
        return this.cards;
    }
}

module.exports = Player;