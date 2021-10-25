import { Injectable } from "@angular/core";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { reservaactiva } from '../../entrega-pedidos/servicios.service';


@Injectable()
export class ReservaService{
  detallesreservas:DetalleReserva[]=detallesreservas
  
  get getproductos():DetalleReserva[]{
      const detallesreservas= this.detallesreservas.filter(elemen => elemen.getReservas==reservaactiva[0]); 
      return detallesreservas

          
  }
  total(detallereserva:DetalleReserva[]):number{
    let cant:number=0
    detallereserva.forEach(element => {
    cant = cant+(element.getproductoDetalleReserva.getprecioproductolocal*element.getcantiaddDEtalleReserva) 
    }); 
    return cant
  }
    
}