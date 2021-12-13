import { Injectable } from "@angular/core";
import { Categoria } from "src/app/modelo/categoria.class";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { ProductoLocal} from "src/app/modelo/productolocal.class";
import { Reserva, reservas } from "src/app/modelo/reserva.class";
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
constructor(private route:Router, private http:HttpClient) {
    this.http.get<ProductoLocal[]>('http://127.0.0.1:8080/api/productolocal').subscribe((resp:any)=>{console.log(resp);this.productoslocal=resp;});
 }

public lista:Producto[]=[]
public lista1:ProductoLocal[]=[]
public lista2:Categoria[]=[]

productoslocal:ProductoLocal[]=[];
productocategoria:Producto[]=[]

async agregar(productolocal:ProductoLocal){
   let nuevodetallereserva = new DetalleReserva(1,1,productolocal,reservas[0])    
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
       
        return this.productoslocal
    }
    else{      
        const categoriaproducto:ProductoLocal[]=this.productoslocal.filter(elemen => (elemen.getproducto.getcategoriaproducto == this.categoria[0]))
        return categoriaproducto
    }
    
}

}

const productocategoria:Categoria[]=[]
