import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ContenidoPage } from './contenido.pages';
import { DetallesArticuloComponent } from './components/detalles-articulo/detalles-articulo.component'; // Importa el componente DetallesArticuloComponent
import { ArticulosSugeridosComponent } from './components/articulos-sugeridos/articulos-sugeridos.component';
import { ArticuloSugeridoComponent } from './components/articulo-sugerido/articulo-sugerido.component';
import { HttpClientModule } from '@angular/common/http';
import { ContenidoService } from './services/contenido.service';

@NgModule({
  declarations: [
    ListaArticulosComponent,
    ArticuloComponent,
    ContenidoPage,
    DetallesArticuloComponent, 
    ArticulosSugeridosComponent,
    ArticuloSugeridoComponent
  ],
  exports: [
    ListaArticulosComponent,
  ],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  providers: [ContenidoService]
})
export class ContenidoModule {}
