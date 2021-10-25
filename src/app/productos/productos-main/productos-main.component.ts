import { Component, OnInit } from '@angular/core';
import { productoslocal, ProductoLocal } from '../../modelo/productolocal.class';
import { ProductoService } from '../services/producto.service';
import { categorias, Categoria } from '../../modelo/categoria.class';

@Component({
  selector: 'app-productos-main',
  templateUrl: './productos-main.component.html',
  styleUrls: ['./productos-main.component.css']
})
export class ProductosMainComponent implements OnInit {

  constructor(public productoService:ProductoService) {   
  }


  ngOnInit(): void {
  }

  categorias:Categoria[]=categorias

    
}
