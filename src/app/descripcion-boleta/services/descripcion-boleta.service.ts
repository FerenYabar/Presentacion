import { Injectable } from '@angular/core';
import { DetalleReserva, detallesreservas } from 'src/app/modelo/detallereserva.class';
import { reservaactiva } from '../../entrega-pedidos/servicios.service';

@Injectable({
  providedIn: 'root'
})
export class descripcionboletaService {

  constructor() { 
    console.log(this.detallereserva)
  }

  detallereserva= detallesreservas.filter(elemen => elemen.getReservas.getcodReserva==reservaactiva[0].getcodReserva);

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
