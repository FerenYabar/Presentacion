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
    private  descripcionboletaService: descripcionboletaService) 
    {
      this.descripcionboletaService.listarDetalleReserva();
   }

  ngOnInit(): void {
  }
  get lista(){
    return this.descripcionboletaService.lista;
  }

  codDetalleReserva:number=0;
  cantidadDetalleReserva:number=0;
  productolocalDetalleReserva:ProductoLocal[]=[];
  reservaDetalleReserva:Reserva[]=[]

  public NuevoDetalleReserva = new DetalleReserva(0,this.cantidadDetalleReserva,this.productolocalDetalleReserva[0],this.reservaDetalleReserva[0])

  crearDetalleReserva(){
    this.descripcionboletaService.agregarDetalleReserva(this.NuevoDetalleReserva).then(value=>{this.descripcionboletaService.listarDetalleReserva();});
  }

  eliminarDR(id:any){
    this.descripcionboletaService.eliminarDetalleReserva(id).then(value=>{this.descripcionboletaService.listarDetalleReserva();});
  }

  ActualizarDR(){
    this.NuevoDetalleReserva= new DetalleReserva(this.codDetalleReserva,this.cantidadDetalleReserva,this.productolocalDetalleReserva[0],this.reservaDetalleReserva[0])
    this.descripcionboletaService.updateDetalleReserva(this.NuevoDetalleReserva,this.NuevoDetalleReserva.codDetalleReserva).then(value=>{this.descripcionboletaService.listarDetalleReserva();});
  }
  

  

}



