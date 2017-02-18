import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {};

  ngOnInit(): void {
    this.initHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public isSelected(hero: Hero): boolean {
    return this.selectedHero === hero;
  }

  public goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  private initHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}
