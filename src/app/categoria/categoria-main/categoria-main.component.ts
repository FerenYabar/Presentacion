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
  }

  get categoriaservices(){
    return this.categoriaServices
  }

  ngOnInit(): void {
  }
  
}