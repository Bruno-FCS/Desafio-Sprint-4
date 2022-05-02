import { pluck } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Veiculo, VeiculosAPI } from './veiculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  buscaVeiculos() {
    const token = this.tokenService.retornarToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient
      .get<VeiculosAPI>(`${API}/vehicle`, {
        headers,
      })
      .pipe(pluck('vehicles'));
  }

  buscaVeiculoId(id: string) {
    const token = this.tokenService.retornarToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Veiculo>(`${API}/vehicle/${id}`, {
      headers,
    });
  }
}
