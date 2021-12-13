import { Injectable } from '@angular/core';
import { ProductoLocal } from '../../modelo/productolocal.class';
import { productos, Producto } from '../../modelo/producto.class';
import { localactivo } from '../../login/login-main/services/login.service';
import { HttpClient } from '@angular/common/http';
import { productoslocal } from '../../modelo/productolocal.class';

@Injectable({
  providedIn: 'root'
})
export class GestionDistribuidorService {

  constructor(private http:HttpClient) {
    this.http.get<ProductoLocal>('http://127.0.0.1:8080/api/productolocal').subscribe((resp:any)=>{console.log(resp);this.productolocales=resp;});
   }

   public productolocales:ProductoLocal[]=[]

   get getproductofaltantes(){
    const productoslocalfaltante:Producto[]=productos
    const productosenlocal:ProductoLocal[]=this.productolocales.filter(element=>element.getlocalProductoLocal==localactivo[0])
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
 
   async agregar(producto:Producto){
    const promesa= this.http.post<any>('http://127.0.0.1:8080/api/producto',producto).toPromise();
    return promesa.then(value=>{return true});
  }

}
