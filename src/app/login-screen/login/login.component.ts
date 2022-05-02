import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  erro = 0;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logar() {
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      () => {
        this.erro = 1;
      }
    );
  }
}
