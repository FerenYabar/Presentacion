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
    this.productolocalservice.listarProductoLocal();
   }

  ngOnInit(): void {   
  }
  get lista(){
    return this.productolocalservice.lista;
  }

  codProductoLocal:number=0;
  precioProductoLocal:number=0;
  localProductoLocal:Local[]=[];
  producto:Producto[]=[]

  public NuevoProductoLocal = new ProductoLocal(0,this.precioProductoLocal,this.localProductoLocal[0],this.producto[0])

  crearProductoLocal(){
    this.productolocalservice.agregarProductoLocal(this.NuevoProductoLocal).then(value=>{this.productolocalservice.listarProductoLocal();});
  }
  eliminarPL(id:any){
    this.productolocalservice.eliminarProductoLocal(id).then(value=>{this.productolocalservice.listarProductoLocal();});
  }


  actualizarProductoLocal = new ProductoLocal(0,this.precioProductoLocal,this.localProductoLocal[0],this.producto[0])
  ProductoLocalActu(ProductoLocalAActualizar:ProductoLocal){
    this.actualizarProductoLocal=ProductoLocalAActualizar;
    this.codProductoLocal=ProductoLocalAActualizar.codProductoLocal;
    this.precioProductoLocal=ProductoLocalAActualizar.precioProductoLocal;
    this.localProductoLocal[0]=ProductoLocalAActualizar.localProductoLocal;
    this.producto[0]=ProductoLocalAActualizar.producto;
  }
  ActualizarPL(){
    this.NuevoProductoLocal= new ProductoLocal(this.codProductoLocal,this.precioProductoLocal,this.localProductoLocal[0],this.producto[0])
    this.productolocalservice.updateProductoLocal(this.NuevoProductoLocal,this.NuevoProductoLocal.codProductoLocal).then(value=>{this.productolocalservice.listarProductoLocal();});
  }
   get getproductolocalservice(){
     return this.productolocalservice
   }
 precio=0
}