import { Component, OnInit } from '@angular/core';
import { Gestionproductoservice } from './services/gestion-producto.service';
import { productos, Producto } from '../../modelo/producto.class';
import { Categoria, categorias } from '../../modelo/categoria.class';
import { Marca, marcas } from '../../modelo/marca.class';

@Component({
  selector: 'app-gestion-producto-main',
  templateUrl: './gestion-producto-main.component.html',
  styleUrls: ['./gestion-producto-main.component.css']
})
export class GestionProductoMainComponent implements OnInit {

  constructor(
    private gestionproductoservice:Gestionproductoservice
  ) { }
  eliminacion:number[]=[]
  nombreProducto:string=""
  mililitrosProducto:number=0
  descripcionProducto:String=""
  volalcoholProducto:number=0
  imagenProducto:String=""
  marcaProducto:Marca=marcas[0]
  categoriaProducto:Categoria=categorias[0]

  marcas:Marca[]=marcas
  categorias:Categoria[]=categorias
  productos:Producto[]=productos
  ngOnInit(): void {
  }
  agregar(){
    this.gestionproductoservice.agregarproducto(this.nombreProducto,this.mililitrosProducto,this.descripcionProducto,this.volalcoholProducto,this.imagenProducto,this.marcaProducto,this.categoriaProducto)
  }
  eliminar(){
    this.gestionproductoservice.eliminarproducto(this.eliminacion)
    this.eliminacion=[]

  }
}
