import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { rutasProviders } from './rutas';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  rutasProviders
]);
