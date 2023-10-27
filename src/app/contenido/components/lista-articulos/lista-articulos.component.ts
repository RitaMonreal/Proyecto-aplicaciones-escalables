import { Component } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { articulo } from '../../interfaces/contenido.interface';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent {

  constructor(private contenidoService: ContenidoService){
    
  }

  public get articulos(): articulo[]{
    return this.contenidoService.articulos;
  }
  
}
