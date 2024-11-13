import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SucursalesService {

  constructor(private http: HttpClient) {
  }

  getSucursales(codPais: string, codProvincia: number, nroLocalidad: number): any {
    return this.http.get<any[]>(
      `http://localhost:8090/api/v1/ubicaciones/supermercadossucursales?codPais=${codPais}&codProvincia=${codProvincia}&nroLocalidad=${nroLocalidad}`
    );
  }

  getPaises(): any {
    return this.http.get<any[]>(
      'http://localhost:8090/api/v1/ubicaciones/paises'
    );
  }

  getProvincia(): any {
    return this.http.get<any[]>(
      'http://localhost:8090/api/v1/ubicaciones/supermercadossucursales?codPais=AR&codProvincia=2&nroLocalidad=1'
    );
  }

  getLocalidad(): any {
    return this.http.get<any[]>(
      'http://localhost:8090/api/v1/ubicaciones/supermercadossucursales?codPais=AR&codProvincia=2&nroLocalidad=1'
    );
  }
}
