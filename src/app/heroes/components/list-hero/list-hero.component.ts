import { Component, inject } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';
import { showDetailHero } from '../../services/showDetailHero.service';
import { ApiService } from '../../services/apiService.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list-hero.component.html',
  styleUrl: './list-hero.component.css'
})
export class ListComponent{
  
  private readonly apiService: ApiService = inject(ApiService)
  private readonly showServ = inject(showDetailHero)

  get Heroes() {
    return this.apiService.heroesList
  }

  showData(hero: HeroInterface){
    this.showServ.showHero=hero
    this.showServ.showData=true
  }

  deleteHero(id: number){
    this.apiService.deleteHero(id);
    this.showServ.showHero.id!==id ? this.showServ.showData=false:null;
  }
}
