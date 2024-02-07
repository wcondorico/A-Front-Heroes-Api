import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroInterface } from './hero-interface';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() showData = false

  @Input() hero : HeroInterface = {
    id: 0,
    name: '',
    age: 0,
  }
  
  protected getHeroDescription() : string {
    return `${this.hero.name} - ${this.hero.age}`
  }

  get capitalizedName() : string {
    return this.hero.name.toUpperCase();
  }

  @Output() HideData = new EventEmitter();

  limpiarDatos(){
    this.showData=false;
    this.HideData.emit(this.showData)
  }
}
