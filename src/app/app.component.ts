// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalesComponent } from './sucursales/sucursales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SucursalesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sucursales-app';
}
