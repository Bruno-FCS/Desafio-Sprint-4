import { Veiculos } from './../veiculo/veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo/veiculo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  veiculos!: Veiculos;
  veiculoId!: string

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.veiculoService.buscaVeiculos().subscribe((retornoApi) => {
      this.veiculos = retornoApi.vehicles;
      console.log(this.veiculos);
    });
  }

  enviaVeiculoId(id: string) {
    console.log(id);
  }
}
