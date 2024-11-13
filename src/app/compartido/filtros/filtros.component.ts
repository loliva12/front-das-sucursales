import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
  @Input() paises: string[] = [];
  @Input() provincias: string[] = [];
  @Input() localidades: string[] = [];
  @Output() onBuscar = new EventEmitter<{ pais: string; provincia?: string; localidad?: string }>();

  selectedPais = '';
  selectedProvincia = '';
  selectedLocalidad = '';

  // Definir las funciones faltantes
  onPaisChange() {
    this.selectedProvincia = '';
    this.selectedLocalidad = '';
  }

  onProvinciaChange() {
    this.selectedLocalidad = '';
  }

  buscar() {
    if (!this.selectedPais) {
      alert('Por favor, seleccione un país antes de buscar.');
      return;
    }

    this.onBuscar.emit({
      pais: this.selectedPais,
      provincia: this.selectedProvincia || undefined,
      localidad: this.selectedLocalidad || undefined
    });
  }
}
