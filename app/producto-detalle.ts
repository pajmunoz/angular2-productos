import { Component, Input , OnInit, OnDestroy } from '@angular/core';
import { Producto } from './producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosComponent } from './productos.component'


@Component({
  selector: 'producto-detalle',
  template: `
				<div class="ed-container" *ngIf="selectedProducto">
					<div class="ed-item">
						{{selectedProducto.titulo}} -- id: {{selectedProducto.id}}
					</div>
					<div class="ed-item">
						<figure>
							<img src="{{selectedProducto.imagenSrc}}" alt="" />
						</figure>
					</div>
					<button (click)="goBack();"></button>
				</div>
  `,
  directives:[ProductosComponent]
})
export class ProductoDetalle {
	@Input()
	selectedProducto: Producto;
  	constructor(
    	 private route: ActivatedRoute) {}



	goBack() {
		window.history.back();
	}
}