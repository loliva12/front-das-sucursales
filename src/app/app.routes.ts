import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ProductListComponent } from './product/product.component'; // Si tienes este componente

export const routes: Routes = [
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'productos', component: ProductListComponent },
  { path: '', redirectTo: '/sucursales', pathMatch: 'full' },  // Redirige por defecto al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
