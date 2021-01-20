import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { state, transition, animate, style, trigger } from "@angular/animations";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  randomNumber: number | null;
  savedRandomNumber: number;
  userAnswer: string;
  showRandomNumber: boolean;
  status: string;
  totalCorrect: number = 0;
  totalWrong: number = 0;

  constructor(private route: Router) { 
  }

  ngOnInit() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    this.showRandomNumber = false;
    this.randomNumber = Math.floor(1000000 + Math.random() * 1000000) + 1;
    this.savedRandomNumber = this.randomNumber;
    console.log(this.randomNumber);
    this.showRandomNumber = true;
    setTimeout(() => {
      this.toggle();
    }, 1000);
  }

  toggle() {
    this.randomNumber = null;
    this.showRandomNumber = true;
  }

  checkAnswer(){
    
    if(this.savedRandomNumber == +this.userAnswer) {
      this.status = "Correct Answer";
      this.totalCorrect += 1;
    } 
    else {
      this.status = "Wrong Answer";
      this.totalWrong += 1;
    }

    this.generateRandomNumber();
  }
}
