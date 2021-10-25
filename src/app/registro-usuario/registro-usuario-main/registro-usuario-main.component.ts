import { Component, OnInit } from '@angular/core';
import { Usuario, usuarios } from '../../modelo/usuario.class';
import { ResgistroUsuarioService } from '../service/resgistro-usuario.service';

@Component({
  selector: 'app-registro-usuario-main',
  templateUrl: './registro-usuario-main.component.html',
  styleUrls: ['./registro-usuario-main.component.css']
})
export class RegistroUsuarioMainComponent implements OnInit {

  constructor(private resgistroUsuarioService:ResgistroUsuarioService) { }

  ngOnInit(): void {}
  
  
  get getresgistrousuarioService(){
    return this.resgistroUsuarioService
  }
}
