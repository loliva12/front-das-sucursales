// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { SucursalesComponent } from './app/sucursales/sucursales.component';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';

bootstrapApplication(SucursalesComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
}).catch((err) => console.error(err));
