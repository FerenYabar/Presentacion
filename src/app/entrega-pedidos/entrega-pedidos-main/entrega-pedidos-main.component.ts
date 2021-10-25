import { Component, OnInit } from '@angular/core';
import { reservas, Reserva } from '../../modelo/reserva.class';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-entrega-pedidos-main',
  templateUrl: './entrega-pedidos-main.component.html',
  styleUrls: ['./entrega-pedidos-main.component.css']
})
export class EntregaPedidosMainComponent implements OnInit {

  constructor(public entregaService: ServiciosService) { 
    
  }

  ngOnInit(): void {

  }

  
}
