import { VeiculosDataAPI } from './veiculo-data';
import { pluck } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoDataService {
  constructor(
    private httpClient: HttpClient
  ) {}

  buscaVeiculosData(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<VeiculosDataAPI>(`${API}/vehicleData`, {
        params,
      })
      .pipe(pluck('vehicleData'));
  }
}
