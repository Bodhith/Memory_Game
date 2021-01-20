import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [

  { path: "game", component: GameComponent, pathMatch: "prefix" },

  { path: "home", component: HomeComponentComponent, pathMatch: "prefix" },

  { path: "answer", component: AnswerComponent, pathMatch: "prefix" },

  { path: "**", redirectTo: "home" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
