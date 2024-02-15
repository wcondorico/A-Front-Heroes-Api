import { Component, inject } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';
import { showDetailHero } from '../../services/showDetailHero.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './detail-hero.component.html',
  styleUrl: './detail-hero.component.css'
})
export class HeroDetailComponent {
  private readonly dataService:showDetailHero = inject(showDetailHero)

  get hero(): HeroInterface{
    return this.dataService.showHero;
  }
  get showData(): boolean{
    return this.dataService.showData
  }

  get capitalizedName(): string {
    return this.hero.name.toUpperCase();
  }

  limpiarDatos(): void{
    this.dataService.showData=false;
  }
}
