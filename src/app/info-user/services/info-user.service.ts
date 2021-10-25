import { Injectable } from '@angular/core';
import { usuarioactivo, localactivo } from '../../login/login-main/services/login.service';
import { Local } from '../../modelo/local.class';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor() { }

  
  usuario=usuarioactivo;
  local=localactivo;

}
