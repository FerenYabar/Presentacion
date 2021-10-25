import { Injectable } from "@angular/core";
import { Categoria } from "src/app/modelo/categoria.class";
import { DetalleReserva, detallesreservas } from "src/app/modelo/detallereserva.class";
import { ProductoLocal, productoslocal } from "src/app/modelo/productolocal.class";
import { reservas } from "src/app/modelo/reserva.class";
import { categoriaActiva } from '../../categoria/services/categoria.service';
import { categorias } from '../../modelo/categoria.class';
import { Producto, productos } from '../../modelo/producto.class';

@Injectable()
export class ProductoService{
productoslocal:ProductoLocal[]=productoslocal;
productocategoria:Producto[]=productos

agregar(productolocal:ProductoLocal){
let nuevodetallereserva = new DetalleReserva('R0001',1,productolocal,reservas[0])   
detallesreservas.push(nuevodetallereserva)
}

categoria=categoriaActiva

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

// const productocategoria:Categoria[]=[]
