import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ContenidoPage } from './contenido.pages';

@NgModule({
  declarations: [
    ListaArticulosComponent,
    ArticuloComponent,
    ContenidoPage
  ],
  exports:[
    ListaArticulosComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ContenidoModule { }
