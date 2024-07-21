interface Card {
    type: string;
}

interface PlayerHand {
    playerName: string;
    cards: Array<Card>;
}

export interface ArchivedGame {
    playerOne: PlayerHand;
    playerTwo: PlayerHand;
}