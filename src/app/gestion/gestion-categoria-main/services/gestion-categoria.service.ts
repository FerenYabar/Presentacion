import { Injectable } from "@angular/core";
import { Categoria, categorias } from '../../../modelo/categoria.class';

@Injectable()
export class GestionCategoriaservice{
    agregarcategoria(nombreCategoria:String){
        const nuevoCategoria:Categoria=new Categoria(0+(categorias.length+1),nombreCategoria)
        categorias.push(nuevoCategoria);
    }
    eliminarcategoria(eliminacion:number[]){
        eliminacion.sort(function(a, b){return b - a});
        for(let i:number=0;eliminacion.length>i;i++){
            categorias.splice(eliminacion[i],1)
            
          }
    }
}