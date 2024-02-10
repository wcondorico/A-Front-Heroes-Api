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

    //-------------CORREGIR TRAS LA MODIFICACION-----------------

    id: 1,
    name: 'empty',
    age: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
  };


  newMethod(heroReceived : HeroInterface){
    this.heroSend=heroReceived
    this.showData = true;
  }

  hideData(){
    this.showData=false
  }
}
