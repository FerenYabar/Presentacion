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
  borrar(){
    console.log(this.usuario[0])
    this.usuario.splice(0,1)
    console.log(this.usuario[0])
    console.log('hola');
  }


 
  
  

}

