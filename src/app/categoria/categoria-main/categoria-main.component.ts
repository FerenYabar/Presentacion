import { Component, OnInit } from '@angular/core';
import { categorias, Categoria } from '../../modelo/categoria.class';
import { Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';


@Component({
  selector: 'app-categoria-main',
  templateUrl: './categoria-main.component.html',
  styleUrls: ['./categoria-main.component.css']
})
export class CategoriaMainComponent implements OnInit {

  constructor(private categoriaServices:CategoriaService) { 
    this.categoriaServices.listarCategoria();
  }

  get categoriaservices(){
    return this.categoriaServices
  }

  ngOnInit(): void {
  }
  get lista(){
    return this.categoriaServices.lista;
  }
  codCategoria:number=0;
  nombreCategoria:String='';

  public NuevaCategoria = new Categoria(0,this.nombreCategoria)

  crearCategoria(){
    this.categoriaServices.agregarCategoria(this.NuevaCategoria).then(value=>{this.categoriaServices.listarCategoria();});
  }
  eliminarC(id:any){
    this.categoriaServices.eliminarCategoria(id).then(value=>{this.categoriaServices.listarCategoria();});
  }

  actulizarCategoria=new Categoria(0,this.nombreCategoria)
  CategoriaActu(CategoriaAActulizar:Categoria){
    this.actulizarCategoria=CategoriaAActulizar;
    this.codCategoria=CategoriaAActulizar.codCategoria;
    this.nombreCategoria=CategoriaAActulizar.nombreCategoria;
  }

  ActualizarC(){
    this.NuevaCategoria= new Categoria(this.codCategoria,this.nombreCategoria)
    this.categoriaServices.updateCategoria(this.NuevaCategoria,this.NuevaCategoria.codCategoria).then(value=>{this.categoriaServices.listarCategoria();});
  }

  
}