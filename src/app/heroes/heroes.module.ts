import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { FormHeroComponent } from './form-hero/form-hero.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    ListComponent,
    FormHeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
