import { Injectable }    from '@angular/core';
import { ProductoTotal } from './producto';

@Injectable() 

export class ProductoServices {
  getProductos() {
    return Promise.resolve(ProductoTotal);
  }
}