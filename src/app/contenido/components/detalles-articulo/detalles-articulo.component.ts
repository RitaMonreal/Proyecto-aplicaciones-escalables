import { Component, Input } from "@angular/core";
import { ContenidoService } from '../../services/contenido.service';
import { articulo } from '../../interfaces/contenido.interface';
import { ActivatedRoute, Router } from "@angular/router";


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
    private route: ActivatedRoute
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

}




  
