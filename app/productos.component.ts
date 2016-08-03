import { Component , Injectable } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_DIRECTIVES ,ActivatedRoute } from '@angular/router'
import { ProductoServices } from './newService'
import { Producto } from './producto'
import { Router } from '@angular/router';

@Component({
	selector: 'productos-card',
	templateUrl: 'app/productos.component.html',
	directives:[ROUTER_DIRECTIVES],
	providers: [ProductoServices],
	precompile: [ProductosComponent]
})

@Injectable()
export class ProductosComponent {
	custom :boolean;
	productos: Producto[];
	selectProducto: Producto;

	toggle (producto) {
		producto.custom=!producto.custom;
	}
	onSelect(producto: Producto) { 
		let link = ['/detail',producto.id]; 
		this.router.navigate(link); 
		return producto.id;
	}

	constructor(private router: Router, private nuevoServicio: ProductoServices){
		this.nuevoServicio.getProductos()
		.subscribe(productos => {
			this.productos = productos
			console.log(typeof this.productos)
		})
	}

}
