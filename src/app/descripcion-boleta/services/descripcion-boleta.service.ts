import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { DetalleReserva, detallesreservas } from 'src/app/modelo/detallereserva.class';
import { reservaactiva } from '../../entrega-pedidos/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class descripcionboletaService{

  constructor(private http:HttpClient) {
    this.http.get<DetalleReserva>('http://127.0.0.1:8080/api/detallereserva').subscribe((resp:any)=>{this.detallereserva=resp;}); 
  }

  detallereserva: DetalleReserva[]=[];

  get detallereservalista(){
    this.detallereserva= this.detallereserva.filter(elemen => elemen.getReservas.getcodReserva==reservaactiva[0].getcodReserva);
    return this.detallereserva;
  }

   total(detallereserva:DetalleReserva[]):number{
     let cant:number=0
     detallereserva.forEach(element => {
     cant = cant+(element.getproductoDetalleReserva.getprecioproductolocal*element.getcantiaddDEtalleReserva) 
     }); 
     console.log(this.detallereserva)
     console.log(reservaactiva[0])
     return cant
}  
}