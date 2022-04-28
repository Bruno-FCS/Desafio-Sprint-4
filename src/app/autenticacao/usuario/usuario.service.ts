import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TokenService } from '../token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({
    id: '',
    nome: '',
    senha: '',
    email: '',
  });

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  private decodificarJWT() {
    const token = this.tokenService.retornarToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornarUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.usuarioSubject.next({ id: '', nome: '', senha: '', email: '' });
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
