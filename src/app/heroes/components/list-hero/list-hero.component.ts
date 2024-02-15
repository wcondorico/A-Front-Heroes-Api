import { Component, inject } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';
import { ListHeroService } from '../../services/list-hero.service'
import { showDetailHero } from '../../services/showDetailHero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list-hero.component.html',
  styleUrl: './list-hero.component.css'
})
export class ListComponent{
  private readonly listServ = inject(ListHeroService)
  private readonly showServ = inject(showDetailHero)

  get Heroes() {
    return this.listServ.Heroes
  }


  showData(hero: HeroInterface){
    this.showServ.showHero=hero
    this.showServ.showData=true
  }

  deleteHero(id: string){
    this.listServ.deleteHero(id);
    this.showServ.showHero.id==id ? this.showServ.showData=false:null;
  }
}
