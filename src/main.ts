// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { SucursalesComponent } from './app/sucursales/sucursales.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';

bootstrapApplication(SucursalesComponent, {
  providers: [provideAnimationsAsync(), provideHttpClient()]
}).catch((err) => console.error(err));
