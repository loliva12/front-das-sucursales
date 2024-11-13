// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalesComponent } from './sucursales/sucursales.component';
import {SidebarComponent} from './compartido/sidebar/sidebar.component';
import { HeaderComponent } from './compartido/header/header.component';
import { FooterComponent } from './compartido/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SucursalesComponent, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sucursales-app';
}
