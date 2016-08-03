import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core'
import {Producto} from './producto'

@Injectable()
export class ProductoServices {
	private _resource = 'app/productos.json'
	productos: Producto[];
	producto: Producto;
	constructor (private _http: Http) {
		
	}
	
	getProductos () {
		return this._http.get(this._resource)
			.map(res => res.json());
	}


	getProducto(id:string){
		return this.getProductos()
				.map(productos => productos.find(producto => producto.id === id));
	}
	
}