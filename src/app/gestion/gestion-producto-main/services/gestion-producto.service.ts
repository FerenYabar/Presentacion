import { Injectable } from "@angular/core";
import { Categoria, categorias } from '../../../modelo/categoria.class';
import { Producto, productos } from '../../../modelo/producto.class';
import { Marca } from '../../../modelo/marca.class';

@Injectable()
export class Gestionproductoservice{
    agregarproducto(nombreProducto:String,mililitrosProducto:number,descripcionProducto:String,volalcoholProducto:number,imagenPRoducto:String,marcaProducto:Marca,categoriaproducto:Categoria){
        const nuevoProducto:Producto=new Producto(0+(productos.length+1),nombreProducto,mililitrosProducto,descripcionProducto,volalcoholProducto,imagenPRoducto,marcaProducto,categoriaproducto)
        productos.push(nuevoProducto);
    }
    eliminarproducto(eliminacion:number[]){
        eliminacion.sort(function(a, b){return b - a});
        for(let i:number=0;eliminacion.length>i;i++){
            productos.splice(eliminacion[i],1)
            
          }
    }
}
