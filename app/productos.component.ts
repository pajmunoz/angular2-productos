import { Component ,Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES ,ActivatedRoute , Router } from '@angular/router';
import { ProductoServices } from './newService';
import { Producto } from './producto';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Component({
	selector: 'productos-card',
	templateUrl: 'app/productos.component.html',
	directives:[ROUTER_DIRECTIVES],
	providers: [ProductoServices]
})


export class ProductosComponent {
	custom :boolean;
	productos: Producto[];
	producto: Producto;

	toggle (producto) {
		producto.custom=!producto.custom;
	}
	onSelect(producto) { 
		let link = ['/detail',producto.id]; 
		this.router.navigate(link);
	}

	constructor(private router: Router, private nuevoServicio: ProductoServices){
		
	}
	ngOnInit(){
		this.nuevoServicio.getProductos()
		.subscribe(productos => this.productos = productos);
	}

}
