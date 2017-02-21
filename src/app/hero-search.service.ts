import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Hero} from "./hero";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {};

  public search(term: string): Observable<Hero[]> {
    const url = `api/heroes/?name=${term}`;
    return this.http.get(url)
      .map(response => response.json().data as Hero[]);
  }
}
