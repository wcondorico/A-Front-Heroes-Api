import { Component, EventEmitter, Output, inject } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';
import { ListHeroService } from '../../services/list-hero.service'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list-hero.component.html',
  styleUrl: './list-hero.component.css'
})
export class ListComponent{

  protected readonly serv = inject(ListHeroService)

  @Output() showDetailHero = new EventEmitter()

  addNewHero(hero : HeroInterface){
    this.serv.addNewHero(hero)
  }

  showData(hero:HeroInterface){
    this.showDetailHero.emit(hero)
  }

  deleteHero(id:string){
    this.serv.deleteHero(id);
    
  }
}
