import { Injectable } from '@angular/core';
import { Categoria, categorias } from '../../modelo/categoria.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private route:Router) { }
  categoriass:Categoria[]=categorias
  

  ingresar(categoria:Categoria){
    
    categoriaActiva.splice(0,1)
    categoriaActiva.push(categoria)
  }
}
export const categoriaActiva:Categoria[]=[]