import { Injectable } from '@angular/core';
import { usuarios, Usuario } from 'src/app/modelo/usuario.class';
import { Router } from '@angular/router';
import { locales, Local } from '../../../modelo/local.class';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route:Router,
    private http:HttpClient) { }
    public lista:Usuario[]=[]

    listarUsuario(){
      this.http.get<Usuario>('http://127.0.0.1:8080/api/usuarios')
    .subscribe((resp:any)=>{
      console.log(resp);
      this.lista=resp;
    });
    }

    async agregarUsuarios(usuario:Usuario){
      const promesa=this.http.post<any>('http://127.0.0.1:8080/api/usuarios',usuario).toPromise();
      return promesa.then(value=>{return true});
    }
    async eliminarUsuario(id:number){
      const promesa= this.http.delete('http://127.0.0.1:8080/api/usuarios' + '/' + id).toPromise();
      return promesa.then(value=>{return true});
    }

    async updateUsuario(usuario:Usuario,id:number){
      const promesa=this.http.put<any>('http://127.0.0.1:8080/api/usuarios' + '/'+ id,usuario).toPromise();
      return promesa.then(value=>{return true});
    }



  Usuario:string=''
  Contrasena:string=''

  

  Validacion(usuario:string,contrasena:string):Boolean{
    const usuarioexistente:Usuario[]=usuarios.filter(elemen => (elemen.getusuariousuario==usuario && elemen.getconstrasenaUsuario==contrasena))    
    if(usuarioexistente.length!=0){
      usuarioactivo.push(usuarioexistente[0])
      return true
    }
    const localexistente:Local[]=locales.filter(elemen => (elemen.getrucLocal==usuario && elemen.getcontrasena==contrasena))
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

