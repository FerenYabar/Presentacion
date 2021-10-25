import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoDistribuidorMainComponent } from './producto-distribuidor-main/producto-distribuidor-main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductoDistribuidorMainComponent
  ],
  exports:[
    ProductoDistribuidorMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  
})
export class GestionDistribuidorModule { }
