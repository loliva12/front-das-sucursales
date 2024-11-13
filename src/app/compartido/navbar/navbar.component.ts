import {Component, Input} from '@angular/core';
import {RouteService} from '../../services/route.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menus: any[] = [];

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    this.routeService.obtenerRutas().subscribe((routes) => {
      this.menus = routes;
    });
  }
}
