import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { HeroInterface } from "../interfaces/hero-interfaces";

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly http: HttpClient = inject(HttpClient)
  private serviceUrl = 'http://localhost:3000'

  heroesList!: HeroInterface[]

  showList(){
    this.http.get<HeroInterface[]>(`${this.serviceUrl}/heroes`).subscribe(resp => {this.heroesList = resp})
  }

  addNewHero(hero: HeroInterface) {
    
  }

  deleteHero(id: number) {
    
  }
}
