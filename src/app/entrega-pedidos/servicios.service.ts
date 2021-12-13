import { Injectable } from '@angular/core';
import { Reserva, reservas } from '../modelo/reserva.class';
import { usuarioactivo, localactivo } from '../login/login-main/services/login.service';
import { usuarios, Usuario } from '../modelo/usuario.class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {


  constructor(private route:Router,
  private http:HttpClient) { 
    this.http.get<Reserva[]>('http://127.0.0.1:8080/api/reserva').subscribe((resp:any)=>{console.log(resp);this.reservass=resp;});
  }
  reservass:Reserva[]=[]

  get getlistareservas(){
    if(usuarioactivo.length!=0){
      this.reservass = this.reservass.filter(element => element.getusuarioreserva ==  usuarioactivo[0] );
     
   }else{
      this.reservass = this.reservass.filter(element => element.getlocalReserva ==  localactivo[0]);
    }
    return this.reservass;
  }

  eliminar(reserva:Reserva){
    const promesa= this.http.delete<any>('http://127.0.0.1:8080/api/reserva' + '/' + reserva.codReserva).toPromise();
    }
  
  // }
  usuarioactivo=usuarioactivo
   localactivo=localactivo

   vista(reserva:Reserva){
    reservaactiva.splice(0,1)
    reservaactiva.push(reserva)
    this.route.navigate(['descripcion-boleta'])

 }
}
 export const reservaactiva:Reserva[]=[]
