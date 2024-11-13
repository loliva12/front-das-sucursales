// src/app/sucursales/sucursales.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sucursal } from '../sucursal.model';
import {RouterLink} from '@angular/router';
import {SucursalesResourceService} from '../main/api/resources/sucursales-resource.service';
import {SucursalesService} from '../main/api/resources/sucursales-service.service';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  providers: [
    SucursalesResourceService,
    SucursalesService
  ],
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css'],
})
export class SucursalesComponent implements OnInit {
  sucursales: Sucursal[] = [];
  filteredSucursales: Sucursal[] = [];

  paises: any[] = [];
  provincias: any[] = [];
  localidades: any[] = [];
  supermercados: any[] = [];

  selectedPais: string = '';
  selectedProvincia: string = '';
  selectedLocalidad: string = '';
  selectedSupermercado: string = '';
  showTable: boolean = false;  // Variable para controlar si mostrar la tabla

  constructor(private sucursalesResourceService: SucursalesService) {}

  ngOnInit(): void {

    this.sucursalesResourceService.getPaises().subscribe((paises:any)=>{
      console.log(paises);
      this.paises = paises;
    })
    this.sucursalesResourceService.getSucursales("AR",2,1).subscribe((sucursales:any) => {
      this.sucursales = sucursales;
      this.showTable = true;
    })


    //this.sucursales = this.sucursalesService.getSucursales();
   /* this.sucursalesResourceService.getPaises().subscribe(paises =>
    {
      this.paises = paises;
    });

    */
    //this.supermercados = this.sucursalesService.getSupermercados();
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
      /*this.sucursalesResourceService.getProvincias(this.selectedPais).subscribe((provincias) => {
        this.provincias = provincias;
      });*/
    } else {
      this.provincias = [];
    }
    this.selectedProvincia = '';
    this.localidades = [];
    this.selectedLocalidad = '';
    this.filteredSucursales = [];
  }


  onProvinciaChange(): void {
    if (this.selectedProvincia) {
     /* this.sucursalesResourceService.getLocalidades(this.selectedProvincia).subscribe((localidades) => {
        this.localidades = localidades;
        this.selectedLocalidad = '';
        this.sucursales = [];
        this.showTable = false;
      });*/
    } else {
      this.localidades = [];
    }
  }

  buscarSucursales(): void {
    this.filteredSucursales = this.sucursales.filter(
      (sucursal) =>
        (!this.selectedPais || this.selectedPais === 'Argentina') &&
        (!this.selectedProvincia || sucursal.nomProvincia === this.selectedProvincia) &&
        (!this.selectedLocalidad || sucursal.nomLocalidad === this.selectedLocalidad)
    );
    this.showTable = this.filteredSucursales.length > 0;
  }
}
