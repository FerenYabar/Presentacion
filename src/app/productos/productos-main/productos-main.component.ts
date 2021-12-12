import { Component, OnInit } from '@angular/core';
import { productoslocal, ProductoLocal } from '../../modelo/productolocal.class';
import { ProductoService } from '../services/producto.service';
import { categorias, Categoria } from '../../modelo/categoria.class';
import { Marca } from 'src/app/modelo/marca.class';
import { Producto } from 'src/app/modelo/producto.class';
import { Local } from 'src/app/modelo/local.class';
@Component({
  selector: 'app-productos-main',
  templateUrl: './productos-main.component.html',
  styleUrls: ['./productos-main.component.css']
})
export class ProductosMainComponent implements OnInit {

  constructor(public productoService:ProductoService) { 
    this.productoService.listarProducto();  
  }


  ngOnInit(): void {
  }
  categorias:Categoria[]=categorias


  get lista(){
    return this.productoService.lista;
  }
  codProducto:number=0;
  nombreProducto:String='';
  mililitrosProducto:number=0;
  descripcionProducto:String='';
  volalcoholProducto:number=0;
  imagenProducto:String='';
  marcaProducto:Marca[]=[];
  categoriaProducto:Categoria[]=[]

  public NuevoProducto = new Producto(0,this.nombreProducto,this.mililitrosProducto,this.descripcionProducto,this.volalcoholProducto,this.imagenProducto,this.marcaProducto[0],this.categoriaProducto[0])

  crearProducto(){
    this.productoService.agregarProducto(this.NuevoProducto).then(value=>{this.productoService.listarProducto();});
  }
  eliminarP(id:any){
    this.productoService.eliminarProducto(id).then(value=>{this.productoService.listarProducto();});
  }

  actualizarProducto= new Producto(0,this.nombreProducto,this.mililitrosProducto,this.descripcionProducto,this.volalcoholProducto,this.imagenProducto,this.marcaProducto[0],this.categoriaProducto[0])
  ProductoActu(ProductoAActulizar:Producto){
    this.actualizarProducto=ProductoAActulizar
    this.codProducto=ProductoAActulizar.codProducto;
    this.mililitrosProducto=ProductoAActulizar.mililitrosProducto;
    this.descripcionProducto=ProductoAActulizar.descripcionProducto;
    this.volalcoholProducto=ProductoAActulizar.volalcoholProducto;
    this.imagenProducto=ProductoAActulizar.imagenProducto;
    this.marcaProducto[0]=ProductoAActulizar.marcaProducto;
    this.categoriaProducto[0]=ProductoAActulizar.categoriaProducto

  }

  ActualizarP(){
    this.NuevoProducto= new Producto(this.codProducto,this.nombreProducto,this.mililitrosProducto,this.descripcionProducto,this.volalcoholProducto,this.imagenProducto,this.marcaProducto[0],this.categoriaProducto[0])
    this.productoService.updateProducto(this.NuevoProducto,this.NuevoProducto.codProducto).then(value=>{this.productoService.listarProducto();});
  }
  
  get lista1(){
    return this.productoService.lista1;
  }
  codProductoLocal:number=0;
  precioProductoLocal:number=0;
  localProductoLocal:Local[]=[]
  producto:Producto[]=[]

  public NuevoProductoLocal=new ProductoLocal(0,this.precioProductoLocal,this.localProductoLocal[0],this.producto[0])
  
  crearProductoLocal(){
    this.productoService.agregarProductoLocal(this.NuevoProductoLocal).then(value=>{this.productoService.listarProductoLocal();});
  }

  eliminarPL(id:any){
    this.productoService.eliminarProductoLocal(id).then(value=>{this.productoService.listarProductoLocal();});
  }

  actualizarProductoLocal = new ProductoLocal(0,this.precioProductoLocal,this.localProductoLocal[0],this.producto[0])
  ProductoLocalActu(ProductoLocalAActualizar:ProductoLocal){
    this.actualizarProductoLocal=ProductoLocalAActualizar
    this.codProductoLocal=ProductoLocalAActualizar.codProductoLocal;
    this.precioProductoLocal=ProductoLocalAActualizar.precioProductoLocal;
    this.localProductoLocal[0]=ProductoLocalAActualizar.localProductoLocal;
    this.producto[0]=ProductoLocalAActualizar.producto;
  }

  ActualizarPL(){
    this.NuevoProductoLocal= new ProductoLocal(this.codProductoLocal,this.precioProductoLocal,this.localProductoLocal[0],this.producto[0])
    this.productoService.updateProductoLocal(this.NuevoProductoLocal,this.NuevoProductoLocal.codProductoLocal).then(value=>{this.productoService.listarProductoLocal();});
  }
  





    
}
