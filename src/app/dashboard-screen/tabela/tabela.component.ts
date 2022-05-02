import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VeiculoDataService } from '../veiculo/veiculo-data.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
  tabelaInput = new FormControl();
  veiculosData$ = this.tabelaInput.valueChanges.pipe(
    tap(console.log),
    filter(
      (valorDigitado) => valorDigitado.length >= 20 && valorDigitado.length < 21
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado) =>
      this.veiculoDataService.buscaVeiculosData(valorDigitado)
    )
  );

  constructor(private veiculoDataService: VeiculoDataService) {}
}
