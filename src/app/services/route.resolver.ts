import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RouteService } from './route.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteResolver implements Resolve<any[]> {
  constructor(private routeService: RouteService) {}

  resolve(): Observable<any[]> {
    return this.routeService.obtenerRutas();
  }
}
