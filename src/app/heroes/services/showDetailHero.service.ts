import { Injectable } from '@angular/core';
import { HeroInterface } from '../interfaces/hero-interfaces';

@Injectable({
  providedIn: 'root',
})
export class showDetailHero {
  public showData: boolean = false;
  public showHero!: HeroInterface;
}
