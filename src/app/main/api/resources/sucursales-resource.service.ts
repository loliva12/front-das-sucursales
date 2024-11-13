import {environment} from '../../../enviroments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Sucursal} from '../../../sucursal.model';

@Injectable({
  providedIn: 'root',
})
export class SucursalesResourceService {
/*private apiUrl = `${environment.apiUrl}/ubicaciones`;

constructor(private _http: HttpClient) {}

getPaises(): Observable<string[]> {
  return this._http.get<string[]>(`${this.apiUrl}/paises`);
}

getProvincias(pais: string): Observable<string[]> {
  return this._http.get<string[]>(`${this.apiUrl}/provincias/${pais}`);
}

getLocalidades(provincia: string): Observable<string[]> {
  return this._http.get<string[]>(`${this.apiUrl}/localidades/${provincia}`);
}

getSucursales(): Observable<Sucursal[]> {
  return this._http.get<Sucursal[]>(`${this.apiUrl}/sucursales`);
}*/
}
