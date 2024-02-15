import { Component, inject } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';
import { ListHeroService } from '../../services/list-hero.service';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './form-hero.component.html',
  styleUrl: './form-hero.component.css'
})
export class FormHeroComponent {
  private readonly listServ: ListHeroService = inject(ListHeroService)
  

  public newHero: HeroInterface = {
    id: '',
    name: '',
    age: null,
    img: '',
    description: '',
  };

  onSendHero() {
    this.listServ.addNewHero(this.newHero)
    
    const voidHero: HeroInterface = {
      id: '',
      name: '',
      age: null,
      img: '',
      description: '',
    };
    this.newHero = voidHero;
  }
}
