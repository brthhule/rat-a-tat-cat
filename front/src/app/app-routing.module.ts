import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from "./rules/rules.component";
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: "rules", component: RulesComponent},
  { path: "board", component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
