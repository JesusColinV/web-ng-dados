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
    this.number1=Math.round(Math.random()*5)+1; 
    this.number2=Math.round(Math.random()*5)+1;
    this.diceLeft="../assets/img/dice"+this.number1+".png"
    this.diceRight="../assets/img/dice"+this.number2+".png"
  }

  throwDice(): void{
    this.number1=Math.round(Math.random()*5)+1; 
    this.number2=Math.round(Math.random()*5)+1; 
    //console.log(this.number1);
    //console.log(this.number2);

    this.diceLeft="../assets/img/dice"+this.number1+".png"
    this.diceRight="../assets/img/dice"+this.number2+".png"
  }

}
