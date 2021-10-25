import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { cuenta, usuarioactivo } from '../../login/login-main/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
  ) { 

  }
  cuentaactiva=cuenta
  usuario=usuarioactivo


  ngOnInit(): void {
  }

  ingresar(){
    
  }

  borrar(){
    console.log(this.cuentaactiva)
    console.log(cuenta)
    cuenta.splice(0,3)
    usuarioactivo.splice(0,1)
    // this.cuentaactiva.splice(2,1,'0')
    
  }


}


