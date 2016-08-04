import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductoServices {
	private _resource = 'app/productos.json'

	constructor (private _http: Http) {}
	
	getProductos () {
		return this._http.get(this._resource)
			.map((res:Response) => res.json());
	}

}

//.then(productos => productos.find(producto => producto.id === id));