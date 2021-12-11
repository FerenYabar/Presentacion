import { Injectable } from '@angular/core';
import { ProductoLocal } from '../../modelo/productolocal.class';
import { productos, Producto } from '../../modelo/producto.class';
import { localactivo } from '../../login/login-main/services/login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionDistribuidorService {

  constructor(private http:HttpClient) {
   }

   public lista:ProductoLocal[]=[]
   
   listarProductoLocal(){
     this.http.get<ProductoLocal>('http://127.0.0.1:8080/api/productolocal')
     .subscribe((resp:any)=>{
       console.log(resp);
       this.lista=resp;
     });
   }

   async agregarProductoLocal(productolocal:ProductoLocal){
    const promesa= this.http.post<any>('http://127.0.0.1:8080/api/productolocal',productolocal).toPromise();
    return promesa.then(value=>{return true});
   }

   async eliminarProductoLocal(id:number){
     const promesa= this.http.delete<any>('http://127.0.0.1:8080/api/productolocal' + '/' + id).toPromise();
     return promesa.then(value=>{return true});
   }

   async updateProductoLocal(productolocal:ProductoLocal,id:number){
     const promesa=this.http.put<any>('http://127.0.0.1:8080/api/productolocal' + '/' + id,productolocal).toPromise();
     return promesa.then(value =>{return true});
   }
  

  // get getproductofaltantes(){
  //   const productoslocalfaltante:Producto[]=productos
  //   const productosenlocal:ProductoLocal[]=productoslocal.filter(element=>element.getlocalProductoLocal==localactivo[0])
  //   const productosfaltantes:Producto[]=[]
  //   let result:Producto[]=[]
  //   productosenlocal.forEach(element => {
  //     productosfaltantes.push(element.getproducto)
  //   });
  //   console.log(productoslocalfaltante)
  //   console.log(productosfaltantes)
  //   result = productoslocalfaltante.filter(el => !productosfaltantes.includes(el))
  //   console.log(result)
  //   return result
  // }
  
  
  // precio:number=0
 
  

  // agregar(producto:Producto){
  //   const nuevoproductolocal:ProductoLocal=new ProductoLocal("PL001",this.precio,localactivo[0],producto)
  //   productoslocal.push(nuevoproductolocal)
  // }

}
