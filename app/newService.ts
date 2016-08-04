import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import  { Producto } from './producto';

@Injectable()
export class ProductoServices {
	private _resource = 'app/productos.json'

	constructor (private _http: Http) {}
	
	getProductos () {
		return this._http.get(this._resource)
			.map((res:Response) => res.json());
	}
	getProductox() {
		return this._http.get(this._resource)
					.toPromise()
					.then(response => response.json().data as Producto[])
					.catch(this.handleError);
	}
	getProducto (id: string){
		return this.getProductox()
					.then(productos => productos.find(producto => producto.id === id))
					
	}
	  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

//.then(productos => productos.find(producto => producto.id === id));