import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent{
  mostraSettings = false
  usuario$ = this.usuarioService.retornarUsuario()

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  abrirSettings(){
    this.mostraSettings = !this.mostraSettings
  }

  logout(){
    this.usuarioService.logout()
    this.router.navigate([''])
  }
}
