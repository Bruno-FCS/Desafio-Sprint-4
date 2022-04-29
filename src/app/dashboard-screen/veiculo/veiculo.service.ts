import { environment } from './../../../environments/environment';
import { Veiculos } from './veiculo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  buscaVeiculos(): Observable<Veiculos> {
    const token = this.tokenService.retornarToken()
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.httpClient.get<Veiculos>(`${API}/vehicle`, {
      headers
    });
  }
}
