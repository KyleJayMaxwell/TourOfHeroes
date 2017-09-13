import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Heroes } from '../proxies/mock-heroes.proxy';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(Heroes);
  }

  constructor() { }

}
