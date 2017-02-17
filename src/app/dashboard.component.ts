import {Component, OnInit} from '@angular/core';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroService: HeroService) {};

  ngOnInit(): void {
    this.initTopHeroes();
  }

  private initTopHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }
}