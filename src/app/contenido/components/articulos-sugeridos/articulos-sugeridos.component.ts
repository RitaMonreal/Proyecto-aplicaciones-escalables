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
    const todosLosArticulos = this.contenidoService.articulos;

    // Verifica que currentArticleId no sea undefined
    if (this.currentArticleId !== undefined) {
      // Filtra para excluir el artículo actual
      const articulosExcluyendoActual = todosLosArticulos.filter(articulo => articulo.id !== this.currentArticleId);

      // Baraja aleatoriamente el array de artículos
      const articulosAleatorios = this.shuffleArray(articulosExcluyendoActual);

      // Toma solo los primeros 4 artículos aleatorios
      return articulosAleatorios.slice(0, 5);
    } else {
      // Si currentArticleId es undefined, devuelve una lista vacía
      return [];
    }
  }

  // Función para barajar aleatoriamente un array
  private shuffleArray(array: any[]): any[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
  


