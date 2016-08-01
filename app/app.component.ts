import { Component } from '@angular/core';

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
    <div class="ed-item movil-50 abcenter tablet-1-3" *ngFor="let producto of productos">
      <div class="cards">
        <div ngClass="on" estado="online"></div>
        <h3>{{producto.titulo}}</h3>
        <i>{{producto.padre}}</i>
        <div class="banda" ngClass="original" clon="original"></div>
        <figure>
          <img src="{{producto.imagenSrc}}" alt="">
          <figcaption last="3">★</figcaption>
        </figure>
        <a href={{producto.enlace}} target="blank">{{producto.enlace}}</a>
        <div class="desplegable">
          <p ngClass="positivo" (click)="toggle=!toggle">Subdominios disponibles</p>
          <ul *ngIf="toggle" ngClass="open" >
            <li   *ngFor="let dominio of producto.subdominios">
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
    imagenSrc:"img/11plantas.jpg"
  },
  {
    id:29,
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

 
}
