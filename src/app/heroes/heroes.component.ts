import { Component } from '@angular/core';
import { HeroInterface } from './hero/hero-interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  showData = false;

  heroSend : HeroInterface = {
    id: 0,
    name: 'empty',
    age: 0
  };


  newMethod(heroReceived : HeroInterface){
    this.heroSend=heroReceived
    this.showData = true;
  }

  hideData(){
    this.showData=false
  }
}
