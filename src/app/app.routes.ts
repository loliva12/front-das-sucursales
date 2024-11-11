import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sucursales', pathMatch: 'full' }, // Ruta por defecto
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'productos', component: ProductListComponent },
];
