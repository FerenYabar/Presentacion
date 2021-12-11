import { Injectable } from '@angular/core';
import { Reserva } from '../modelo/reserva.class';
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
  }
  public lista:Reserva[]=[]
  listarReserva(){
    this.http.get<Reserva>('http://127.0.0.1:8080/api/reserva')
    .subscribe((resp:any)=>{
      console.log(resp);
      this.lista=resp;
    });
  }

  async agregarReserva(reserva:Reserva){
    const promesa= this.http.post<any>('http://127.0.0.1:8080/api/reserva',reserva).toPromise();
    return promesa.then(value=>{return true});
  }

  async eliminarReserva(id:number){
    const promesa= this.http.delete<any>('http://127.0.0.1:8080/api/reserva' + '/' + id).toPromise();
    return promesa.then(value=>{return true});
  }

  async updateReserva(reserva:Reserva,id:number){
    const promesa=this.http.put<any>('http://127.0.0.1:8080/api/reserva' + '/' + id,reserva).toPromise();
    return promesa.then(value =>{return true});
  }

  // }
  // usuarioactivo=usuarioactivo
  // localactivo=localactivo
  // listareservas:Reserva[]=[]
  
  // get getlistareservas(){
  //   if(usuarioactivo.length!=0){
  //     this.listareservas = reservas.filter(element => element.getusuarioreserva ==  usuarioactivo[0] );
      
  //   }else{
  //     this.listareservas = reservas.filter(element => element.getlocalReserva ==  localactivo[0]);
  //   }
  //   return this.listareservas;

  // }
  
  
  // eliminar(numero:number){
  //   this.listareservas.splice(numero,1);
  // }

  // vista(reserva:Reserva){
  //   reservaactiva.splice(0,1)
  //   reservaactiva.push(reserva)
  //   this.route.navigate(['descripcion-boleta'])

  // }
}
 export const reservaactiva:Reserva[]=[]
