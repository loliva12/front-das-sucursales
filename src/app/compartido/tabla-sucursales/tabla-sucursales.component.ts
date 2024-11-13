import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tabla-sucursales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-sucursales.component.html',
  styleUrls: ['./tabla-sucursales.component.css']
})
export class TablaSucursalesComponent {
   @Input() sucursales: any[] = [];

   ngOnChanges() {
    console.log(this.sucursales);
    
   }
}
