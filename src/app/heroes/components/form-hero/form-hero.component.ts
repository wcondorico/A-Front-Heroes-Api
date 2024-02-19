import { Component, inject } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';
import { ApiService } from '../../services/apiService.service';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './form-hero.component.html',
  styleUrl: './form-hero.component.css'
})
export class FormHeroComponent {
  private readonly apiServ: ApiService = inject(ApiService)

  public newHero: HeroInterface = {
    name: '',
    age: null,
    img: '',
    description: '',
  };

  onSendHero() {
    this.apiServ.addNewHero(this.newHero)
    this.apiServ.showList()
    
    const voidHero: HeroInterface = {
      name: '',
      age: '',
      img: '',
      description: '',
    };
    this.newHero = voidHero;
  }
}
