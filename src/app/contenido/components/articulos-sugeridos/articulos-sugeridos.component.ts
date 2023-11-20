import { Component, Input } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { articulo } from '../../interfaces/contenido.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulos-sugeridos',
  templateUrl: './articulos-sugeridos.component.html',
  styleUrls: ['./articulos-sugeridos.component.css']
})
export class ArticulosSugeridosComponent {
  constructor(private contenidoService: ContenidoService, private router: Router) {}

  public get articulos(): articulo[] {
    return this.contenidoService.articulos;
  }
}
