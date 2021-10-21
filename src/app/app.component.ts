import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-ng-dados';
  diceLeft="../assets/img/dice1.png"
  diceRight="../assets/img/dice2.png"
  number1: number;
  number2: number;

  constructor(){
    this.number1=Math.random();
    this.number2=Math.random();
  }

  throwDice(): void{
    this.number1=Math.round(Math.random()*5)+1; 
    this.number2=Math.round(Math.random()*5)+1; 
    console.log(this.number1);
    console.log(this.number2);
  }
}
