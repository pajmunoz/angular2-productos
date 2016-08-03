import { Component, Input , OnInit, OnDestroy } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES , ActivatedRoute } from '@angular/router';
import { ProductosComponent } from './productos.component'
// import { ProductosServices} from './productos.services';

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
					<button (click)="goBack();"></button>
				</div>
  `,
  directives:[ROUTER_DIRECTIVES]
  // providers: [ProductoServices]
})
export class ProductoDetalle implements OnInit{
	@Input()
	producto: Producto;
	private sub:any;
  	constructor(
    	 private route: ActivatedRoute) {}

  // Load data ones componet is ready
  	ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {

        let id = params['id'];

       // Retrieve Pet with Id route param
        //this.petService.findPetById(id).subscribe(producto => this.producto = producto);
    	});
  	}

	goBack() {
		window.history.back();
	}
}