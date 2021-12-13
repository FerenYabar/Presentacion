import { Component, OnInit } from '@angular/core';
import { ProductoLocal} from 'src/app/modelo/productolocal.class';
import { Reserva } from 'src/app/modelo/reserva.class';

import { DetalleReserva, detallesreservas } from '../../modelo/detallereserva.class';
import { descripcionboletaService } from '../services/descripcion-boleta.service';


@Component({
  selector: 'app-descripcion-boleta-main',
  templateUrl: './descripcion-boleta-main.component.html',
  styleUrls: ['./descripcion-boleta-main.component.css']
})
export class DescripcionBoletaMainComponent implements OnInit {

  constructor(
    public  descripcionboletaService: descripcionboletaService) 
    {
   }

  ngOnInit(): void {
  }

  

}



