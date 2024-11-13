import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockData = [
    {
      product: 'Leche Entera 1L',
      supermarket: 'Supermercado A',
      price: 150,
      location: 'Córdoba'
    },
    {
      product: 'Leche Entera 1L',
      supermarket: 'Supermercado B',
      price: 155,
      location: 'Córdoba'
    },
    {
      product: 'Pan Lacteado 500g',
      supermarket: 'Supermercado A',
      price: 200,
      location: 'Buenos Aires'
    },
    {
      product: 'Pan Lacteado 500g',
      supermarket: 'Supermercado C',
      price: 180,
      location: 'Buenos Aires'
    },
    {
      product: 'Aceite de Girasol 1L',
      supermarket: 'Supermercado B',
      price: 350,
      location: 'Mendoza'
    },
    {
      product: 'Aceite de Girasol 1L',
      supermarket: 'Supermercado C',
      price: 340,
      location: 'Mendoza'
    }
  ];

  private apiUrl = 'http://localhost:8080/api/products'; // Ajusta según el backend

  constructor(private http: HttpClient) {}

  /**
   * Simula la obtención de datos de comparación de precios
   * @returns Observable con los datos simulados
   */
  getComparisonData(): Observable<any[]> {
    return of(this.mockData);
  }

  getComparisonData1(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/compare`);
  }
}
