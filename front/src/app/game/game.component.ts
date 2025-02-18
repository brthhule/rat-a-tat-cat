import { Component } from '@angular/core';
import { Player } from '../Player'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent {
  player: Player = {
    name: "Brennen",
    gamesWon: 0,
    games: [],
  }
}
