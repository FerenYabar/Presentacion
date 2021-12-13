import { Component, OnInit } from '@angular/core';
import { GestionDistribuidorService } from '../service/gestion-distribuidor.service';
import { Local } from 'src/app/modelo/local.class';
import { Producto } from 'src/app/modelo/producto.class';
import { ProductoLocal } from 'src/app/modelo/productolocal.class';
@Component({
  selector: 'app-producto-distribuidor-main',
  templateUrl: './producto-distribuidor-main.component.html',
  styleUrls: ['./producto-distribuidor-main.component.css']
})
export class ProductoDistribuidorMainComponent implements OnInit {

  constructor(private productolocalservice:GestionDistribuidorService) {
   }

  ngOnInit(): void {   
  }
   get getproductolocalservice(){
     return this.productolocalservice
   }
 precio=0
}