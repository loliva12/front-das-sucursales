import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private routesUrl = 'assets/mocks/routes.json'; // URL del mock

  constructor(private http: HttpClient) {}

  obtenerRutas(): Observable<any[]> {
    return this.http.get<any[]>(this.routesUrl); // Devuelve las rutas desde el mock
  }
}
