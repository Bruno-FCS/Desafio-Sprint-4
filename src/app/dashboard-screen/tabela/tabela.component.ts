import { Component, OnInit } from '@angular/core';
import { VeiculoDataService } from '../veiculo/veiculo-data.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private veiculoDataService: VeiculoDataService) { }

  ngOnInit(): void {
  }

}
