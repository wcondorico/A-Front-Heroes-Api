import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interfaces';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './detail-hero.component.html',
  styleUrl: './detail-hero.component.css'
})
export class HeroDetailComponent {
  @Input() showData = false
  @Input() hero! : HeroInterface;

  get capitalizedName() : string {
    return this.hero.name.toUpperCase();
  }

  @Output() HideData = new EventEmitter();

  limpiarDatos(){
    this.showData=false;
    this.HideData.emit(this.showData)
  }
}
