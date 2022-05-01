import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css']
})
export class ConsultaSaldoComponent implements OnInit {

  public cliente: Cliente = new Cliente(
    new Date(),
    'Maria das Couves',
    800.00
  )

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  public classNamePorValor(saldo: number): ('negativo' | 'positivo' | 'zero') {
    // return saldo < 0 ? 'negativo' : 'positivo';

    if (saldo < 0.01) {
      return 'negativo';
    } else if (saldo > 0) {
      return 'positivo';
    } else {
      return 'zero'
    }
  }

}
