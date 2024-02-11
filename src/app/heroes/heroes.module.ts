import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './pages/main/main.pages';
import { HeroDetailComponent } from './components/detail-hero/detail-hero.component';
import { ListComponent } from './components/list-hero/list-hero.component';
import { FormHeroComponent } from './components/form-hero/form-hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    ListComponent,
    FormHeroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
