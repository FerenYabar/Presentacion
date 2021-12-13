import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { reservaactiva } from '../../entrega-pedidos/servicios.service';


@Injectable({
  providedIn:'root'
})
export class ReservaService{
  constructor(private http:HttpClient){
    this.http.get<DetalleReserva>('http://127.0.0.1:8080/api/detallereserva').subscribe((resp:any)=>{this.detallesreserva=resp;});
  }
detallesreserva:DetalleReserva[]=[]
  
   get getproductos():DetalleReserva[]{
    this.detallesreserva= this.detallesreserva.filter(elemen => elemen.getReservas==reservaactiva[0]); 
    return this.detallesreserva

          
  }
   total(detallereserva:DetalleReserva[]):number{
   let cant:number=0
    detallereserva.forEach(element => {
   cant = cant+(element.getproductoDetalleReserva.getprecioproductolocal*element.getcantiaddDEtalleReserva) 
   }); 
   return cant
  }
    
}