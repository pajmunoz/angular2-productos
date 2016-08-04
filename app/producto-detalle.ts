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
					<div class="ed-item">
						{{producto.titulo}} -- id: {{producto.id}}
					</div>
					<div class="ed-item">
						<figure>
							<img src="{{producto.imagenSrc}}" alt="" />
						</figure>
					</div>
					<button (click)="goBack();">volver</button>
				</div>
  `,
  providers:[ ProductoServices ]
})


export class ProductoDetalle implements OnInit, OnDestroy{
	producto: Producto;
	productos: Producto[];
	sub:any;
	@Output() close = new EventEmitter();
	navigated = false;
  	constructor(private route: ActivatedRoute , 
  				private nuevoServicio: ProductoServices ) {

       
  	}
  	ngOnInit(){

		this.sub = this.route.params.subscribe(params => {
			if (params['id'] !== undefined) {
				let id = params['id'];
				this.navigated = true;
				this.nuevoServicio.getProducto(id)
        			.then(producto => this.producto = producto);
    		}else{
    			this.navigated = false;
    			this.producto = new Producto();
    		}
    	});
  	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}


	goBack() {
		window.history.back();
	}
}