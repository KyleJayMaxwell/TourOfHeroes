import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero.model';
import { Heroes } from './proxies/mock-heroes.proxy';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tutorial App';
  ngOnInit(): void {}
}
