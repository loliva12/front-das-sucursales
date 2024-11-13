// src/app/sucursales/sucursales.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SucursalService} from '../services/sucursal.service';
import {TablaSucursalesComponent} from '../compartido/tabla-sucursales/tabla-sucursales.component';
import {FiltrosComponent} from '../compartido/filtros/filtros.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [CommonModule, FiltrosComponent, TablaSucursalesComponent, RouterOutlet],
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  paises = ['Argentina', 'Chile', 'Uruguay'];
  provincias = ['Buenos Aires', 'Córdoba', 'Santa Fe'];
  localidades = ['Capital', 'Villa María', 'Rosario'];

  filteredSucursales: any[] = [];
  showTable = false;

  constructor(private sucursalService: SucursalService) {}

  ngOnInit(): void {
    // Al inicializar, podrías cargar datos generales si fuera necesario.
  }

  buscarSucursales(filtros: { pais: string; provincia?: string; localidad?: string }) {
    console.log('Filtros seleccionados:', filtros);

    // Consumir datos desde el servicio
    this.sucursalService.obtenerSucursales(filtros).subscribe((sucursales) => {
      console.log(sucursales);
     this.filteredSucursales = sucursales; 
      this.showTable = this.filteredSucursales.length > 0;
    });
  }
}
