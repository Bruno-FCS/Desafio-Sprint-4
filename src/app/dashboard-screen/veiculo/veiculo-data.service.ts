import { VeiculosDataAPI } from './veiculo-data';
import { tap, pluck } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  buscaVeiculosData(valor?: string) {
    const token = this.tokenService.retornarToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<VeiculosDataAPI>(`${API}/vehicleData`, {
        params,
        headers,
      })
      .pipe(
        tap((valor) => console.log(valor)),
        pluck('vehicleData')
      );
  }
}
