import { Component, ViewChild } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';
import { ListComponent } from '../../components/list-hero/list-hero.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './main.pages.html',
  styleUrl: './main.pages.css'
})
export class HeroesComponent {
  showData = false;
  @ViewChild(ListComponent)
  list!: ListComponent;

  heroDetailSend : HeroInterface = {
    id: 0,
    name: 'empty',
    age: 0,
    description: ''
  };

  onShowDetailHero(heroReceived : HeroInterface){
    this.heroDetailSend = heroReceived
    this.showData = true;
  }

  hideData(){
    this.showData=false
  }

  receiveNewHero(newHeroReceived : HeroInterface){
    const heroListSend : HeroInterface = newHeroReceived
    this.list.addNewHero(heroListSend)
  }
}
