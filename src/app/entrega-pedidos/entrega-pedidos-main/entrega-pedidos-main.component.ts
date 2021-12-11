import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { time } from 'console';
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
  fechaReserva:Date[] = [];
  estadoReserva:boolean=true;
  usuarioReserva:Usuario[]=[]
  localReserva:Local[]=[]
  public NuevaReserva = new Reserva(0,this.fechaReserva[0],this.estadoReserva,this.usuarioReserva[0],this.localReserva[0])

  crearReserva(){
    this.entregaService.agregarReserva(this.NuevaReserva).then(value=>{
      this.entregaService.listarReserva();
    });
  }
  eliminarR(id:any){
    this.entregaService.eliminarReserva(id).then(value=>{this.entregaService.listarReserva();});
  }
  ActulizarR(){
    this.NuevaReserva=new Reserva(this.codReserva,this.fechaReserva[0],this.estadoReserva,this.usuarioReserva[0],this.localReserva[0])
    this.entregaService.updateReserva(this.NuevaReserva,this.NuevaReserva.codReserva).then(value=>{this.entregaService.listarReserva();});
  }

  
}
