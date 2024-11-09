// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { SucursalesComponent } from './app/sucursales/sucursales.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(SucursalesComponent, {
  providers: [provideAnimationsAsync()]
}).catch((err) => console.error(err));
