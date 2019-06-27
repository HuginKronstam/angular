import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Skitter' },
      { id: 12, name: 'The Simurgh' },
      { id: 13, name: 'Scion' },
      { id: 14, name: 'Nilbog' },
      { id: 15, name: 'Armsmaster' },
      { id: 16, name: 'Tattletale' },
      { id: 17, name: 'Parian' },
      { id: 18, name: 'Imp' },
      { id: 19, name: 'Regent' },
      { id: 20, name: 'Hellhound' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
