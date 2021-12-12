import { Component, OnInit } from '@angular/core';
import { DetalleReserva,detallesreservas } from 'src/app/modelo/detallereserva.class';
import { Producto } from 'src/app/modelo/producto.class';
import { ReservaService } from '../services/reserva.service';
import { ProductoLocal } from 'src/app/modelo/productolocal.class';
import { Reserva } from 'src/app/modelo/reserva.class';
@Component({
  selector: 'app-reversa-main',
  templateUrl: './reversa-main.component.html',
  styleUrls: ['./reversa-main.component.css']
})
export class ReversaMainComponent implements OnInit {

  constructor(public reservaService:ReservaService) { 
    this.reservaService.listarDetalleReserva();
  }

  ngOnInit(): void {
  }
  get lista(){
    return this.reservaService.lista;
  }

  codDetalleReserva:number=0;
  cantidadDetalleReserva:number=0;
  productolocalDetalleReserva:ProductoLocal[]=[];
  reservaDetalleReserva:Reserva[]=[]
  public NuevoDetalleReserva = new DetalleReserva(0,this.cantidadDetalleReserva,this.productolocalDetalleReserva[0],this.reservaDetalleReserva[0])

  crearDetalleReserva(){
    this.reservaService.agregarDetalleReserva(this.NuevoDetalleReserva).then(value=>{this.reservaService.listarDetalleReserva();});
  }
  eliminarDR(id:any){
    this.reservaService.eliminarDetalleReserva(id).then(value=>{this.reservaService.listarDetalleReserva();});
  }

  actualizarDetalleReserva=new DetalleReserva(0,this.cantidadDetalleReserva,this.productolocalDetalleReserva[0],this.reservaDetalleReserva[0])
  DetalleReservaActu(DetalleReservaAActualizar:DetalleReserva){
    this.actualizarDetalleReserva=DetalleReservaAActualizar;
    this.codDetalleReserva=DetalleReservaAActualizar.codDetalleReserva;
    this.cantidadDetalleReserva=DetalleReservaAActualizar.cantidadDetalleReserva;
    this.productolocalDetalleReserva[0]=DetalleReservaAActualizar.productolocalDetalleReserva;
    this.reservaDetalleReserva[0]=DetalleReservaAActualizar.reservaDetalleReserva;
  }

  ActualizarDR(){
    this.NuevoDetalleReserva= new DetalleReserva(this.codDetalleReserva,this.cantidadDetalleReserva,this.productolocalDetalleReserva[0],this.reservaDetalleReserva[0])
    this.reservaService.updateDetalleReserva(this.NuevoDetalleReserva,this.NuevoDetalleReserva.codDetalleReserva).then(value=>{this.reservaService.listarDetalleReserva();});
  }
  

}
