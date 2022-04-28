import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {}

  logar() {
    console.log(this.usuario);
    console.log(this.senha);
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(()=>{
      console.log('Usuário logado!')
    }, (error)=>{
      alert("Usuário ou senha inválido")
      console.log(error);
    })
  }
}
