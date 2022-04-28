import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000',
        {
          nome: usuario,
          senha: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const autenticacaoToken =
            response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvarToken(autenticacaoToken);
        })
      );
  }
}
