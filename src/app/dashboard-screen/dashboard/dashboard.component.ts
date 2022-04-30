import { Veiculo } from './../veiculo/veiculo';
import { Component } from '@angular/core';
import { VeiculoService } from '../veiculo/veiculo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  veiculos$ = this.veiculoService.buscaVeiculos();
  veiculoId!: string;
  veiculoEscolhido!: Veiculo;

  constructor(private veiculoService: VeiculoService) {}

  enviaVeiculoId(id: string) {
    this.veiculoService.buscaVeiculoId(id).subscribe((veiculoEscolhido) => {
      this.veiculoEscolhido = veiculoEscolhido;
    });
  }
}
