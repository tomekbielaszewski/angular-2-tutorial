import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    console.log('getting heroes...');
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.http.get(this.heroesUrl + '/' + id)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<void> {
    const url = this.heroesUrl + '/' + hero.id;
    return this.http.put(url, JSON.stringify(hero), this.headers)
      .toPromise()
      .catch(this.handleError);
  }

  create(heroName: string): Promise<Hero> {
    const hero: Hero = new Hero();
    hero.name = heroName;
    return this.http.post(this.heroesUrl, JSON.stringify(hero), this.headers)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  delete(hero: Hero): Promise<void> {
    const url = this.heroesUrl + '/' + hero.id;
    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
