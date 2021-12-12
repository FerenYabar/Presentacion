import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { reservaactiva } from '../../entrega-pedidos/servicios.service';


@Injectable({
  providedIn:'root'
})
export class ReservaService{
  constructor(private http:HttpClient){
  }
detallesreservas:DetalleReserva[]=detallesreservas

public lista:DetalleReserva[]=[]

listarDetalleReserva(){
  this.http.get<DetalleReserva>('http://127.0.0.1:8080/api/detallereserva')
  .subscribe((resp:any)=>{
    console.log(resp);
    this.lista=resp;
  });
}

async agregarDetalleReserva(detallereserva:DetalleReserva){
  const promesa=this.http.post<any>('http://127.0.0.1:8080/api/detallereserva',detallereserva).toPromise();
  return promesa.then(value=>{return true});
}

async eliminarDetalleReserva(id:number){
  const promesa= this.http.delete('http://127.0.0.1:8080/api/detallereserva' + '/' + id).toPromise();
  return promesa.then(value=>{return true});
}

async updateDetalleReserva(detallereserva:DetalleReserva,id:number){
  const promesa=this.http.put<any>('http://127.0.0.1:8080/api/detallereserva' + '/'+ id,detallereserva).toPromise();
  return promesa.then(value=>{return true});
}
  
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