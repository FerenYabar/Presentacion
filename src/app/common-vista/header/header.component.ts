import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { usuarioactivo, localactivo, adminactivo } from '../../login/login-main/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
  ) { 

  }
  localactivo=localactivo
  usuarioactivo=usuarioactivo
  adminactivo=adminactivo

  ngOnInit(): void {
  }
  borrar(){
    localactivo.splice(0,1)
    usuarioactivo.splice(0,1)
    adminactivo.splice(0,2)
  }
 
  
  

}

