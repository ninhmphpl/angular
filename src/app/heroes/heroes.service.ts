import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Hero, HEROES } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  messageService: any;

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}
