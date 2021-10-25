import { Injectable } from '@angular/core';
import { usuarios, Usuario } from 'src/app/modelo/usuario.class';
import { Router } from '@angular/router';
import { locales, Local } from '../../../modelo/local.class';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router) { }
  Usuario:string=''
  Contrasena:string=''

  

  Validacion(usuario:string,contrasena:string):Boolean{
    const usuarioexistente:Usuario[]=usuarios.filter(elemen => (elemen.getusuariousuario==usuario && elemen.getconstraseñaUsuario==contrasena))
    
    if(usuarioexistente.length!=0){
      usuarioactivo.push(usuarioexistente[0])
      return true
    }
    const localexistente:Local[]=locales.filter(elemen => (elemen.getrucLocal==usuario && elemen.getcontraseña==contrasena))
    if (localexistente.length!=0 ) {
      localactivo.push(localexistente[0])
      return true
    
    } 
    if(usuario=='admin' && contrasena=='123') {
      adminactivo.push("admin","123")
      return true
    }
    else{
      return false
    }
}

  ingresar():void{   
    if(this.Validacion(this.Usuario,this.Contrasena)){
      this.route.navigate(['categorias'])
    }
    else{
      alert('Invalido el usuario y contraseña')
    }
  }
}
export const adminactivo:String[]=[]
export const usuarioactivo:Usuario[]=[]
export const localactivo:Local[]=[]

