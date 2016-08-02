import { Component , trigger , state } from '@angular/core';

export class Producto {
    id:                   number;
    all:                  string;
    tipo:                 string;
    padre:                string;
    version:              string;
    titulo:               string;
    enlace:               string;
    subdominios:          string[];
    responsive:           string;
    subdominioResponsive: string;
    subdominioNewEra:     string;
    online:               string;
    imagenSrc:            string;
}


@Component({
  selector: 'my-app',
  template: `
  <div class="ed-container">
    <div class="ed-item movil-50 abcenter tablet-1-3" *ngFor="let producto of productos; let i=index">
      <div class="cards">
        <div [ngClass]="producto.online === 'online' ? 'on': 'off'" attr.estado="{{producto.online}}"></div>
        <h3>{{producto.titulo}}</h3>
        <i>{{producto.padre}}</i>
        <div class="banda" [ngClass]="producto.tipo === 'original' ? 'original' : 'clon'" attr.clon="{{producto.tipo}}"></div>
        <figure>
          <img src="{{producto.imagenSrc}}" alt="">
          <figcaption attr.last="{{ i + 1 | number : '2.0'}}">★</figcaption>
        </figure>
        <a href={{producto.enlace}} target="blank">{{producto.enlace}}</a>
        <div class="desplegable">
          <p [ngClass]="producto.subdominios.length === 0 ? 'negativo':'positivo'"  (click)="toggle();">Subdominios disponibles</p>
          <ul *ngIf="custom" [ngClass]="custom === custom ? 'open' : 'close'" >
            <li *ngFor="let dominio of producto.subdominios">
              <a href="{{dominio}}" target="blank">{{dominio}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      
    `
})
export class AppComponent {
  title = 'Productos tve Mart';
  custom :boolean;
  productos: Producto[] = [{
    id: 20,
    all:"all",
    tipo:"clon",
    padre:"clon de redumas",
    version:"old-era",
    titulo:"11plantas",
    enlace:"http://www.11plantas.com/",
    subdominios:["http://www.11plantas.com/11plahfb/","http://www.11plantas.com/landing_1/","http://www.11plantas.com/landing_2/"],
    responsive: "noResponsive",
    subdominioResponsive: "noResponsive",
    subdominioNewEra:"old-era",
    online: "online",
    imagenSrc:"http://worldshopmart.com/img/11plantas.jpg"
  },
  {
    id:29,
    all:"all",
    tipo:"original",
    padre:"",
    version:"old-era",
    titulo:"Sueño Reparador",
    enlace:"http://dormirmejor.net/",
    subdominios:[],
    responsive: "responsiveSi",
    subdominioResponsive: "subResponsive",
    subdominioNewEra:"old-era",
    online: "offline",
    imagenSrc:"http://dormirmejor.net/images/camb1.png"
  },
  {
    id:35,
    all:"all",
    tipo:"original",
    padre:"",
    version:"old-era",
    titulo:"Sueño Reparador",
    enlace:"http://dormirmejor.net/",
    subdominios:["http://dormirmejor.net/f/"],
    responsive: "responsiveSi",
    subdominioResponsive: "subResponsive",
    subdominioNewEra:"old-era",
    online: "online",
    imagenSrc:"http://www.prosta-pro.com/img/img-05.png"
  }];

  toggle () {
    this.custom=!this.custom;
  }
 
}
