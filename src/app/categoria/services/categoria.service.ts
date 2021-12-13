import { Injectable } from '@angular/core';
import { Categoria, categorias } from '../../modelo/categoria.class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private route:Router,private http:HttpClient) { 
    this.http.get<Categoria[]>('http://127.0.0.1:8080/api/categoria').subscribe((resp:any)=>{this.categoriass=resp;
    });
  }
  categoriass:Categoria[]=[]

  get categorias(){
    return this.categoriass
  }

  

  ingresar(categoria:Categoria){
    
    categoriaActiva.splice(0,1)
    categoriaActiva.push(categoria)
  }
}
export const categoriaActiva:Categoria[]=[]