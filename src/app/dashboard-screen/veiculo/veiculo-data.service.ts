import { VeiculosDataAPI, VeiculoData } from './veiculo-data';
import { tap, pluck } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/autenticacao/token.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoDataService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  buscaVeiculosData() {
    const token = this.tokenService.retornarToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient
      .get<VeiculosDataAPI>(`${API}/vehicleData`, {
        headers,
      })
      .pipe(
        tap((valor) => console.log(valor)),
        pluck('vehicleData')
      );
  }

  buscaVeiculoDataId(id: string) {
    const token = this.tokenService.retornarToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient
      .get<VeiculoData>(`${API}/vehicleData/${id}`, {
        headers,
      })
      .pipe(tap((valor) => console.log(valor)));
  }
}
