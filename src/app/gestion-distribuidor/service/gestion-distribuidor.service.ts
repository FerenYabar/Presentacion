import { Injectable } from '@angular/core';
import { productoslocal, ProductoLocal } from '../../modelo/productolocal.class';
import { productos, Producto } from '../../modelo/producto.class';
import { localactivo } from '../../login/login-main/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GestionDistribuidorService {

  constructor() { }
  

  get getproductofaltantes(){
    const productoslocalfaltante:Producto[]=productos
    const productosenlocal:ProductoLocal[]=productoslocal.filter(element=>element.getlocalProductoLocal==localactivo[0])
    const productosfaltantes:Producto[]=[]
    let result:Producto[]=[]
    productosenlocal.forEach(element => {
      productosfaltantes.push(element.getproducto)
    });
    console.log(productoslocalfaltante)
    console.log(productosfaltantes)
    result = productoslocalfaltante.filter(el => !productosfaltantes.includes(el))
    console.log(result)
    return result
  }
  
  
  precio:number=0
 
  

  agregar(producto:Producto){
    const nuevoproductolocal:ProductoLocal=new ProductoLocal("PL001",this.precio,localactivo[0],producto)
    productoslocal.push(nuevoproductolocal)
  }

}
