// app.js
const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

const Game = require('./game');
// const Player = require('./player');

const game = new Game();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.post('/add-player', (req, res) => {
    const queryParams = req.query;
    console.log(queryParams);
    const playerName = queryParams.playerName
    game.addPlayer(playerName);
    res.send(playerName + " added!");
})

app.get('/get-player-cards', (req, res) => {
    const queryParams = req.query;
    console.log(queryParams);
    const playerName = queryParams.playerName;
    const playerCards = game.getPlayerCards(playerName);
    res.send(playerCards);
})

app.get('/test', (req, res) => {
    res.send(JSON.stringify(["10_of_spades", "7_of_clubs"]));
})