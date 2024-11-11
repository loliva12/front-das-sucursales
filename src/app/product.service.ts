// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Leche Entera 1L',
      description: 'Leche entera en envase de 1 litro',
      price: 150,
      seller: 'Supermercado A',
      imageUrl: 'https://alberdisa.vteximg.com.br/arquivos/ids/165669-1000-1000/Leche-LS-UAT-Entera-3--Fort-c-Vit-pet-1L.jpg?v=637538264560500000', // Imagen de ejemplo
      type: 'Lácteos',
    },
    {
      id: 2,
      name: 'Pan Integral 500g',
      description: 'Pan de harina integral en paquete de 500g',
      price: 250,
      seller: 'Supermercado B',
      imageUrl: 'https://masonlineprod.vtexassets.com/arquivos/ids/294220-800-auto?v=638277429765130000&width=800&height=auto&aspect=true', // Imagen de ejemplo
      type: 'Panadería',
    },
    {
      id: 3,
      name: 'Manteca 200g',
      description: 'Manteca de 200 gramos',
      price: 450,
      seller: 'Supermercado A',
      imageUrl: 'https://arjosimarprod.vteximg.com.br/arquivos/ids/168282-1000-1000/Manteca-Clasica-La-Serenisima-200-Gr-1-14271.jpg?v=638361777647700000', // Imagen de ejemplo
      type: 'Lácteos',
    },
    {
      id: 4,
      name: 'Huevos 12 unidades',
      description: 'Caja de 12 huevos frescos',
      price: 350,
      seller: 'Supermercado B',
      imageUrl: 'https://arcordiezb2c.vteximg.com.br/arquivos/ids/182703/Huevos-Frescos-Medianos-De-Color-Corave-12-Un-1-18080.jpg?v=638458761694730000', // Imagen de ejemplo
      type: 'Huevos',
    },
    // Agrega más productos aquí si es necesario...
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
