// src/app/sucursales/sucursales.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SucursalesService } from '../sucursales.service';
import { Sucursal } from '../sucursal.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css'],
})
export class SucursalesComponent implements OnInit {
  sucursales: Sucursal[] = [];
  filteredSucursales: Sucursal[] = [];

  paises: string[] = [];
  provincias: string[] = [];
  localidades: string[] = [];
  supermercados: string[] = [];

  selectedPais: string = '';
  selectedProvincia: string = '';
  selectedLocalidad: string = '';
  selectedSupermercado: string = '';
  showTable: boolean = false;  // Variable para controlar si mostrar la tabla

  constructor(private sucursalesService: SucursalesService) {}

  ngOnInit(): void {
    this.sucursales = this.sucursalesService.getSucursales();
    this.paises = this.sucursalesService.getPaises();
    this.supermercados = this.sucursalesService.getSupermercados();
    this.filteredSucursales = [...this.sucursales];
  }

  onSupermercadoChange(): void {
    // Filtrar sucursales basadas en el supermercado seleccionado
    if (this.selectedSupermercado) {
      this.filteredSucursales = this.sucursales.filter(
        (sucursal) => sucursal.supermercado === this.selectedSupermercado
      );
    } else {
      // Si no hay supermercado seleccionado, mostrar todas las sucursales
      this.filteredSucursales = [...this.sucursales];
    }

    // Resetear los filtros de país, provincia y localidad al cambiar de supermercado
    this.selectedPais = '';
    this.provincias = [];
    this.selectedProvincia = '';
    this.localidades = [];
    this.selectedLocalidad = '';
    this.showTable = false; // Ocultar la tabla hasta que se haga clic en "Buscar"
  }

  onPaisChange(): void {
    if (this.selectedPais === 'Argentina') {
      this.provincias = this.sucursalesService.getProvincias();
    } else {
      this.provincias = [];
    }
    this.selectedProvincia = '';
    this.localidades = [];
    this.selectedLocalidad = '';
    this.filteredSucursales = [];
  }

  onProvinciaChange(): void {
    this.localidades = this.sucursalesService.getLocalidades(this.selectedProvincia);
    this.selectedLocalidad = '';
  }

  buscarSucursales(): void {
    this.filteredSucursales = this.sucursales.filter(
      (sucursal) =>
        (!this.selectedPais || this.selectedPais === 'Argentina') &&
        (!this.selectedProvincia || sucursal.nomProvincia === this.selectedProvincia) &&
        (!this.selectedLocalidad || sucursal.nomLocalidad === this.selectedLocalidad)
    );
    this.showTable = true; // Hacer visible la tabla al hacer clic en "Buscar"
  }
}
