import { Component, OnInit, OnDestroy , Input  } from '@angular/core';
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
  directives:[ROUTER_DIRECTIVES],
  providers: [ProductoServices]
})


export class ProductoDetalle implements OnInit, OnDestroy{
	@Input() producto: Producto;
	
	private sub:any;

  	constructor(private route: ActivatedRoute , 
  				private nuevoServicio: ProductoServices ) {

       
  	}
  	ngOnInit(){

	    this.sub = this.route.params.subscribe(params => {
	      let id = params['id'];

	        
	    });
	      let objetico = this.nuevoServicio.getProductos();
	      Object.keys(objetico).map(function(value, index){
	      	objetico[value] *= 2;
	      });
	      console.log(objetico);

  	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}


	goBack() {
		window.history.back();
	}
}