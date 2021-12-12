import { Injectable } from '@angular/core';
import { Categoria, categorias } from '../../modelo/categoria.class';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private route:Router,private http:HttpClient) { }
  categoriass:Categoria[]=categorias
  public lista:Categoria[]=[]

  listarCategoria(){
    this.http.get<Categoria>('http://127.0.0.1:8080/api/categoria')
    .subscribe((resp:any)=>{
      console.log(resp);
      this.lista=resp;
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

  ingresar(categoria:Categoria){
    
    categoriaActiva.splice(0,1)
    categoriaActiva.push(categoria)
  }
}
export const categoriaActiva:Categoria[]=[]