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
  @Input() currentArticleId: number | undefined;
  constructor(private contenidoService: ContenidoService, private router: Router) {}

  get articulos(): articulo[] {
    // Obtén todos los artículos sugeridos desde el servicio
    console.log('Current Article ID:', this.currentArticleId);
    const todosLosArticulos = this.contenidoService.articulos;

    // Filtra para excluir el artículo actual y toma solo los primeros 4
    return todosLosArticulos
      .filter(articulo => articulo.id !== this.currentArticleId)
      .slice(0, 5);
  }
  

}
