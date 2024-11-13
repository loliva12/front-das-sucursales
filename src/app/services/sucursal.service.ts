import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  private mockUrl = 'assets/mocks/sucursales.json'; // URL del JSON mock

  constructor(private http: HttpClient) {}

  obtenerSucursales(filtros: any): Observable<any[]> {
    return this.http.get<any[]>(this.mockUrl);
  }
}
