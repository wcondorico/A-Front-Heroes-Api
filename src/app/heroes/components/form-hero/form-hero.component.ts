import { Component, EventEmitter, Output } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './form-hero.component.html',
  styleUrl: './form-hero.component.css',
})
export class FormHeroComponent {
  public newHero: HeroInterface = {
    name: '',
    age: null,
    img: '',
    description: '',
  };

  @Output()
  sendHero = new EventEmitter();

  onSendHero() {
    this.sendHero.emit(this.newHero);
    const voidHero: HeroInterface = {
      name: '',
      age: null,
      img: '',
      description: '',
    };
    this.newHero = voidHero;
  }
}
