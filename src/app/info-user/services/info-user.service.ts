import { Injectable } from '@angular/core';
import { cuenta, usuarioactivo, localactivo } from '../../login/login-main/services/login.service';
import { Local } from '../../modelo/local.class';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor() { }

  cuentaactiva=cuenta;
  usuario=usuarioactivo[0];
  local:Local=localactivo[0];
}
