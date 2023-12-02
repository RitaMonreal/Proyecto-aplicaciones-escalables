import { Component, Input } from "@angular/core";
import { ContenidoService } from '../../services/contenido.service';
import { articulo } from '../../interfaces/contenido.interface';
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: "app-detalles-articulo",
  templateUrl: "./detalles-articulo.component.html",
  styleUrls: ["./detalles-articulo.component.css"],
})
export class DetallesArticuloComponent {
  public articulo: articulo | undefined;
  public currentArticleId: number | undefined;

  constructor(
    private contenidoService: ContenidoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.currentArticleId = undefined; 
    // Obtener el ID del artículo de los parámetros de la URL
    this.route.params.subscribe(params => {
      const id = +params['id']; // El '+' convierte el parámetro a número
      this.currentArticleId = id;
      // Llamar al servicio para obtener el artículo por ID
      this.contenidoService.getArticleById(id).subscribe(
        response => {
          this.articulo = response.articulo;
        },
        error => {
          console.error('Error al obtener el artículo por ID:', error);
        }
      );
    });
  }

  // Agrega esta función en tu componente TypeScript
getCategoryName(category: number): string {
  switch (category) {
    case 1:
      return 'Música';
    case 2:
      return 'Cine';
    case 3:
      return 'Varios';
    default:
      return 'Desconocido';
  }
}
starCounter: number = 0;

isStarActive: boolean = false;

toggleStar() {
  this.isStarActive = !this.isStarActive;
  this.starCounter += this.isStarActive ? 1 : -1;
}

  incrementCounter() {
    this.starCounter++;
  }


}




