import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  Reserva } from '../../modelo/reserva.class';
import { ServiciosService } from '../servicios.service';
import { Usuario } from 'src/app/modelo/usuario.class';
import { Local } from 'src/app/modelo/local.class';
@Component({
  selector: 'app-entrega-pedidos-main',
  templateUrl: './entrega-pedidos-main.component.html',
  styleUrls: ['./entrega-pedidos-main.component.css']
})
export class EntregaPedidosMainComponent implements OnInit {

  constructor(public entregaService: ServiciosService) { 
    this.entregaService.listarReserva();
  }

  ngOnInit(): void {

  }
  get lista(){
    return this.entregaService.lista;
  }
  codReserva:number=0;
  fechaReserva:Date= new Date;
  estadoReserva:boolean=true;
  usuarioReserva:Usuario[]=[]
  localReserva:Local[]=[]
  public NuevaReserva = new Reserva(0,this.fechaReserva,this.estadoReserva,this.usuarioReserva[0],this.localReserva[0])

  crearReserva(){
    this.entregaService.agregarReserva(this.NuevaReserva).then(value=>{
      this.entregaService.listarReserva();
    });
  }
  eliminarR(id:any){
    this.entregaService.eliminarReserva(id).then(value=>{this.entregaService.listarReserva();});
  }


  actualizarReserva = new Reserva(0,this.fechaReserva,this.estadoReserva,this.usuarioReserva[0],this.localReserva[0])
  ReservaActu(ReservaAActualizar:Reserva){
    this.actualizarReserva=ReservaAActualizar;
    this.codReserva=ReservaAActualizar.codReserva;
    this.fechaReserva=ReservaAActualizar.fechaReserva;
    this.estadoReserva=ReservaAActualizar.estadoReserva;
    this.usuarioReserva[0]=ReservaAActualizar.usuarioReserva;
    this.localReserva[0]=ReservaAActualizar.localReserva;
  }

  ActulizarR(){
    this.NuevaReserva=new Reserva(this.codReserva,this.fechaReserva,this.estadoReserva,this.usuarioReserva[0],this.localReserva[0])
    this.entregaService.updateReserva(this.NuevaReserva,this.NuevaReserva.codReserva).then(value=>{this.entregaService.listarReserva();});
  }

  
}
