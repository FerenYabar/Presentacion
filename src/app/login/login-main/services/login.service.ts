import { Injectable } from '@angular/core';
import { usuarios, Usuario } from 'src/app/modelo/usuario.class';
import { Router } from '@angular/router';
import { locales, Local } from '../../../modelo/local.class';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router) { }
  Usuario:string=''
  Contrasena:string=''
  pisicion:number=0
  

  Validacion(usuario:string,contrasena:string):Boolean{
    const usuarioexistente:Usuario[]=usuarios.filter(elemen => (elemen.getusuariousuario==usuario && elemen.getconstraseñaUsuario==contrasena))
    
    if(usuarioexistente.length!=0){
      cuenta.push(usuario,contrasena,"0" )
      usuarioactivo.push(usuarioexistente[0])
      return true
    }
    const localexistente:Local[]=locales.filter(elemen => (elemen.getrucLocal==usuario && elemen.getcontraseña==contrasena))
    if (localexistente.length!=0 ) {
      cuenta.push(usuario,contrasena,"1")
      localactivo.push(localexistente[0])
      return true
    } 
    if(usuario=='admin' && contrasena=='123') {
      cuenta.push(usuario,contrasena,"2")
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
export const cuenta:String[]=[]
export const usuarioactivo:Usuario[]=[]
export const localactivo:Local[]=[]

