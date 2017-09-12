import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11,name: 'Firestorm'},
  {id: 12,name: 'Icestorm'},
  {id: 13,name: 'Sandstorm'},
  {id: 14,name: 'Earthstorm'},
  {id: 15,name: 'Stormstorm'},
  {id: 16,name: 'Brimstorm'},
  {id: 17,name: 'Waterstorm'},
  {id: 18,name: 'Airstorm'},
  {id: 19,name: 'Pebblestorm'},
  {id: 20,name: 'Fiststorm'},
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroe!';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
