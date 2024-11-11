// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importar Routes
import { SucursalesComponent } from './sucursales/sucursales.component';
import { ProductListComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: SucursalesComponent },
  { path: 'productos', component: ProductListComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SucursalesComponent,
    ProductListComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mi-app';
}
