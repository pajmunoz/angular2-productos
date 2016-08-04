import { Component, OnInit, OnDestroy , Output , EventEmitter } from '@angular/core';
import { Producto } from './producto';
import 'rxjs/add/operator/map'
import { ROUTER_DIRECTIVES , ActivatedRoute } from '@angular/router';
import { ProductosComponent } from './productos.component'
import { ProductoServices } from './newService'

@Component({
  selector: 'producto-detalle',
  template: `
				<div class="ed-container" *ngIf="producto">
					<div class="ed-item tablet-50">
						<h2>{{producto.titulo | uppercase}}</h2>
						<figure>
							<img src="{{producto.imagenSrc}}" alt="" />
						</figure>
						
					</div>
					<div class="ed-item tablet-50">
						<a href="{{producto.enlace}}" target="blank"><p>{{producto.enlace}}</p></a>
						<p>tipo : {{producto.tipo}}</p>
						<p>{{producto.padre}}</p>
						<ul *ngIf="producto.subdominios">
							<li *ngFor="let dominio of producto.subdominios">
								<a href="{{dominio}}" target="blank">{{dominio}}</a>
							</li>
						</ul>
						<button (click)="goBack();">volver</button>
					</div>
					
				</div>
  `,
  	directives:[ROUTER_DIRECTIVES],
  	providers:[ ProductoServices ]
})


export class ProductoDetalle implements OnInit, OnDestroy{
	producto: Producto;
	productos: Producto[];
	sub:any;
  	constructor(private route: ActivatedRoute , 
  				private nuevoServicio: ProductoServices ) {

       
  	}
  	ngOnInit(){

		this.sub = this.route.params.subscribe(params => {

				let id = params['id'];
				this.nuevoServicio.getProductos()
        			.subscribe(productos => {
        				this.productos = productos
        				for(let productoOk in productos){
        					if(this.productos[productoOk].id === id){
        						this.producto = this.productos[productoOk]; 
        					}
        				}
        			});
    	});
  	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}


	goBack() {
		window.history.back();
	}
}