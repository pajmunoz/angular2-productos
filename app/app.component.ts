import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <div class="ed-container">
    <div class="ed-item abcenter">
      <h1>{{title}}</h1>
    </div>
    <div class="ed-item abcenter">
      <a [routerLink]="['/productos']">Todos los Productos</a>
    </div>
  </div>
  <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Productos tve Mart';

}
