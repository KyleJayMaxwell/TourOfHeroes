import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Heroes } from '../proxies/mock-heroes.proxy';

@Injectable()
export class HeroService {

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
              .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 5 second delay
      setTimeout(() => resolve(this.getHeroes()), 5000);
    });
  }

  constructor() { }

}
