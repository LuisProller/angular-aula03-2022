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

}
