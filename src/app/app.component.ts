import {Component} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    
    <nav>
      <a routerLinkActive="active" routerLink="/dashboard">Dashboard</a>
      <a routerLinkActive="active" routerLink="/heroes">Heroes</a>
    </nav>
    
    <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Tour of Heroes';
}