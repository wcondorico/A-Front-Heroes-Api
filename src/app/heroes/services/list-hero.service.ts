import { Injectable } from "@angular/core";
import { HeroInterface } from "../interfaces/hero-interfaces";
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})

export class ListHeroService {

  Heroes : HeroInterface[] = [
    {
      id: uuid(),
      name: 'SpiderMan',
      age: 25,
      img: 'https://hips.hearstapps.com/hmg-prod/images/spider-man-memes-no-way-home-1647684597.jpg?resize=980:*',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },
    {
      id: uuid(),
      name: 'Hulk',
      age: 43,
      img: 'https://i.pinimg.com/564x/26/d9/04/26d904f92edc39e830b7252301462361.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },
    {
      id: uuid(),
      name: 'Thor',
      age: 207,
      img: 'https://lumiere-a.akamaihd.net/v1/images/thor_amor_y_trueno_3cc74888.jpeg?region=420,0,1080,1080',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },
    {
      id: uuid(),
      name: 'Loky',
      age: 205,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICKllOvSUDQkAwgXodwooV0XE5bXGvwTBPDD8UoHlclFKMXyGIYeKg2qjv69kmuBBICw&usqp=CAU',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    }
  ]

  addNewHero(hero:  HeroInterface){
    this.Heroes.push(hero)
  }

  deleteHero(id:string) {
    this.Heroes = this.Heroes.filter(h => h.id!==id)
    console.log(this.Heroes);
  }
}