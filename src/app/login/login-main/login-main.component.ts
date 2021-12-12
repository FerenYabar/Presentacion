import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, usuarios } from '../../modelo/usuario.class';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {

  constructor(private LoginService:LoginService) {
    this.LoginService.listarUsuario();
  }
  ngOnInit(): void {
  }

  get lista(){
    return this.LoginService.lista;
  }
  codUsuario:number=0;
  dniUsuario:String='';
  NombreUsuario:String='';
  ApellidoUsuario:String='';
  Usuario:String='';
  Contrasena:String='';
  Celular:String='';
  Correo:String='';
  Direccion:String='';

  public NuevoUsuario = new Usuario(0,this.dniUsuario,this.NombreUsuario,this.ApellidoUsuario,this.Usuario,this.Contrasena,this.Celular,this.Correo,this.Direccion)
  
  crearUsuario(){
    this.LoginService.agregarUsuarios(this.NuevoUsuario).then(value=>{this.LoginService.listarUsuario();});
  }
  eliminarU(id:any){
    this.LoginService.eliminarUsuario(id).then(value=>{this.LoginService.listarUsuario();});
  }

  actualizarUsuario=new Usuario(0,this.dniUsuario,this.NombreUsuario,this.ApellidoUsuario,this.Usuario,this.Contrasena,this.Celular,this.Correo,this.Direccion)
  UsuarioActu(UsuarioAActulizar:Usuario){
    this.actualizarUsuario=UsuarioAActulizar
    this.codUsuario=UsuarioAActulizar.codUsuario;
    this.dniUsuario=UsuarioAActulizar.dniUsuario;
    this.NombreUsuario=UsuarioAActulizar.NombreUsuario;
    this.ApellidoUsuario=UsuarioAActulizar.ApellidoUsuario;
    this.Usuario=UsuarioAActulizar.Usuario;
    this.Contrasena=UsuarioAActulizar.Contrasena;
    this.Celular=UsuarioAActulizar.Celular;
    this.Correo=UsuarioAActulizar.Correo;
    this.Direccion=UsuarioAActulizar.Direccion;
  }


  ActualizarU(){
    this.NuevoUsuario= new Usuario(this.codUsuario,this.dniUsuario,this.NombreUsuario,this.ApellidoUsuario,this.Usuario,this.Contrasena,this.Celular,this.Correo,this.Direccion)
    this.LoginService.updateUsuario(this.NuevoUsuario,this.NuevoUsuario.codUsuario).then(value=>{this.LoginService.listarUsuario();});
  }





  get loginserices(){
    return this.LoginService
  }

  
}




