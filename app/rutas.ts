import { provideRouter, RouterConfig }  from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ProductoDetalle } from './producto-detalle';

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{
		path: 'productos',
		component: ProductosComponent,
	},
	{
		path: 'detail/:id',
		component: ProductoDetalle
	}
];

export const rutasProviders = [
  provideRouter(routes)
];