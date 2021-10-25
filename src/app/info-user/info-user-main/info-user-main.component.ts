import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario.class';
import { usuarioactivo, localactivo } from '../../login/login-main/services/login.service';
import { Local } from '../../modelo/local.class';
import { InfoUserService } from '../services/info-user.service';


@Component({
  selector: 'app-info-user-main',
  templateUrl: './info-user-main.component.html',
  styleUrls: ['./info-user-main.component.css']
})
export class InfoUserMainComponent implements OnInit {

  constructor(private infouserServices: InfoUserService) {
   }

  ngOnInit(): void {
  }

  get serviceUsuario(){
    return this.infouserServices
  }
  

  
}
