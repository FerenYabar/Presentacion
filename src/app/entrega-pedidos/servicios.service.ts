import { Injectable } from '@angular/core';
import { Reserva, reservas } from '../modelo/reserva.class';
import { usuarioactivo } from '../login/login-main/services/login.service';
import { usuarios, Usuario } from '../modelo/usuario.class';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { 
    
  }

  usuaris:Usuario[] = usuarios;
  reservas:Reserva[] = reservas;
  listareservas = this.reservas.filter(element => element.getusuarioreserva ==  usuarioactivo[0]);

  eliminar(numero:number){
    this.listareservas.splice(numero,1);
  }
  revisarlista(){
    
    for (let i= 0; i< reservas.length; i++) {
      if(this.listareservas[i].getestadoreserva){
          this.listareservas.unshift(reservas[i]);
      }else{
        this.listareservas.unshift(reservas[i])

      }
      
    }
  }
}
