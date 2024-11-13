// src/app/sucursales.service.ts
import { Injectable } from '@angular/core';
import { Sucursal } from './sucursal.model';

@Injectable({
  providedIn: 'root',
})
export class SucursalesService {
  private sucursales: Sucursal[] = [
    {
      nroSucursal: 1,
      calle: 'Av. Colón',
      nroCalle: 1234,
      telefonos: '351-456-7890',
      coordLatitud: '-31.4201',
      coordLongitud: '-64.1888',
      habilitada: true,
      nomLocalidad: 'Córdoba Capital',
      nomProvincia: 'Córdoba',
      horarios: '9:00 AM - 6:00 PM',
      tipos_servicios: 'Supermercado, Comestibles',
      productos: 'Fideos, Harina, Aceite',
      supermercado: 'Supermercado B',
    },
    {
      nroSucursal: 2,
      calle: 'Calle Falsa',
      nroCalle: 456,
      telefonos: '11-1234-5678',
      coordLatitud: '-34.6037',
      coordLongitud: '-58.3816',
      habilitada: true,
      nomLocalidad: 'Buenos Aires',
      nomProvincia: 'Buenos Aires',
      horarios: '8:00 AM - 8:00 PM',
      tipos_servicios: 'Electrónica, Hogar',
      productos: 'Celulares, Televisores',
      supermercado: 'Supermercado A',

    },
  ];

  private paises: string[] = ['Argentina'];
  private provincias: string[] = ['Córdoba', 'Buenos Aires', 'Santa Fe'];
  private localidades: Record<string, string[]> = {
    Córdoba: ['Córdoba Capital', 'Villa Carlos Paz', 'Río Cuarto'],
    BuenosAires: ['Buenos Aires', 'Mar del Plata', 'La Plata'],
    SantaFe: ['Rosario', 'Santa Fe', 'Rafaela'],
  };


  getSucursales(): Sucursal[] {
    return this.sucursales;
  }

  getPaises(): string[] {
    return this.paises;
  }

  getProvincias(): string[] {
    return this.provincias;
  }

  getLocalidades(provincia: string): string[] {
    return this.localidades[provincia] || [];
  }

  getSupermercados(): string[] {
    return ['Supermercado A', 'Supermercado B', 'Supermercado C'];
  }

}
