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

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {}

  ngOnInit(): void {}

  logar() {
    console.log(this.usuario);
    console.log(this.senha);
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(()=>{
      this.router.navigate(['home'])
    }, (error)=>{
      alert("Usuário ou senha inválido")
      this.router.navigate(['home'])
    })
  }
}
