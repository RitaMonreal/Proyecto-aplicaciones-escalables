import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ContenidoPage } from './contenido.pages';
import { DetallesArticuloComponent } from './components/detalles-articulo/detalles-articulo.component'; // Importa el componente DetallesArticuloComponent

@NgModule({
  declarations: [
    ListaArticulosComponent,
    ArticuloComponent,
    ContenidoPage,
    DetallesArticuloComponent, // Asegúrate de declarar el componente DetallesArticuloComponent aquí
  ],
  exports: [
    ListaArticulosComponent,
  ],
  imports: [
    CommonModule, // Asegúrate de importar CommonModule aquí
  ],
})
export class ContenidoModule {}
