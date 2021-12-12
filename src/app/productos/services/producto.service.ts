import { Injectable } from "@angular/core";
import { Categoria } from "src/app/modelo/categoria.class";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { ProductoLocal, productoslocal } from "src/app/modelo/productolocal.class";
import { reservas } from "src/app/modelo/reserva.class";
import { categoriaActiva } from '../../categoria/services/categoria.service';
import { categorias } from '../../modelo/categoria.class';
import { Producto, productos } from '../../modelo/producto.class';
import { usuarioactivo, localactivo, adminactivo } from '../../login/login-main/services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class ProductoService{
constructor(private route:Router, private http:HttpClient) { }

public lista:Producto[]=[]
public lista1:ProductoLocal[]=[]
public lista2:Categoria[]=[]

listarProducto(){
    this.http.get<Producto>('http://127.0.0.1:8080/api/producto')
    .subscribe((resp:any)=>{
      console.log(resp);
      this.lista=resp;
    });
  }

  async agregarProducto(producto:Producto){
    const promesa=this.http.post<any>('http://127.0.0.1:8080/api/producto',producto).toPromise();
    return promesa.then(value=>{return true});
  }

  async eliminarProducto(id:number){
    const promesa= this.http.delete('http://127.0.0.1:8080/api/producto' + '/' + id).toPromise();
    return promesa.then(value=>{return true});
  }
  async updateProducto(producto:Producto,id:number){
    const promesa=this.http.put<any>('http://127.0.0.1:8080/api/producto' + '/'+ id,producto).toPromise();
    return promesa.then(value=>{return true});
  }
  

  listarProductoLocal(){
    this.http.get<ProductoLocal>('http://127.0.0.1:8080/api/productolocal')
    .subscribe((resp:any)=>{
      console.log(resp);
      this.lista1=resp;
    });
  }

  async agregarProductoLocal(productolocal:ProductoLocal){
    const promesa=this.http.post<any>('http://127.0.0.1:8080/api/productolocal',productolocal).toPromise();
    return promesa.then(value=>{return true});
  }
  async eliminarProductoLocal(id:number){
    const promesa= this.http.delete('http://127.0.0.1:8080/api/productolocal' + '/' + id).toPromise();
    return promesa.then(value=>{return true});
  }
  async updateProductoLocal(productolocal:ProductoLocal,id:number){
    const promesa=this.http.put<any>('http://127.0.0.1:8080/api/productolocal' + '/'+ id,productolocal).toPromise();
    return promesa.then(value=>{return true});
  }

  listarCategoria(){
    this.http.get<Categoria>('http://127.0.0.1:8080/api/categoria')
    .subscribe((resp:any)=>{
      console.log(resp);
      this.lista2=resp;
    });
  }
  async agregarCategoria(categoria:Categoria){
    const promesa= this.http.post<any>('http://127.0.0.1:8080/api/categoria',categoria).toPromise();
    return promesa.then(value=>{return true});
   }
   async eliminarCategoria(id:number){
    const promesa= this.http.delete<any>('http://127.0.0.1:8080/api/categoria' + '/' + id).toPromise();
    return promesa.then(value=>{return true});
  }

  async updateCategoria(categoria:Categoria,id:number){
    const promesa=this.http.put<any>('http://127.0.0.1:8080/api/categoria' + '/' + id,categoria).toPromise();
    return promesa.then(value =>{return true});
  }


  



productoslocal:ProductoLocal[]=productoslocal;
productocategoria:Producto[]=productos

agregar(productolocal:ProductoLocal){
let nuevodetallereserva = new DetalleReserva(1,1,productolocal,reservas[0])   
detallesreservas.push(nuevodetallereserva)
}
usuarioactivo=usuarioactivo
localactivo=localactivo
adminactivo=adminactivo
categoria=categoriaActiva
login(){
    this.route.navigate(['login'])
}
filtrar(){
    if(this.categoria.length==0){
        return productoslocal
    }
    else{
        const categoriaproducto:ProductoLocal[]=productoslocal.filter(elemen => (elemen.getproducto.getcategoriaproducto == this.categoria[0]))
        return categoriaproducto
    }
    
}

}

const productocategoria:Categoria[]=[]
