import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenidoService } from '../contenido/services/contenido.service';
import { editarArticulo } from './interfaces/formulario-edicion.interface';


@Component({
  selector: 'app-formulario-edicion',
  templateUrl: './formulario-edicion.component.html',
  styleUrls: ['./formulario-edicion.component.css']
})

export class FormularioEdicionComponent {
  tituloE: string = '';
  cuerpo_articuloE: string = '';
  imageE: string = '';

  constructor(
    private contenidoService: ContenidoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Obtener los detalles del artículo
    const id = this.route.snapshot.params['id'] as number;

    this.contenidoService.getArticleById(id).subscribe(
      (articulo) => {
        this.tituloE = articulo.titulo;
        this.cuerpo_articuloE = articulo.cuerpo_articulo;
        this.imageE = articulo.image;
      },
      (error) => {
        console.error('Error al obtener detalles del artículo:', error);
      }
    );
  }

  editarPublicacion(): void {
    const id = this.route.snapshot.params['id'] as number;
    const articleData: editarArticulo = {
      titulo: this.tituloE,
      cuerpo_articulo: this.cuerpo_articuloE,
      image: this.imageE,
    };

    this.contenidoService.updateArticle(id, articleData).subscribe(
      () => {
        // Manejar la redirección o mostrar un mensaje de éxito
        this.router.navigate(['/detalles-articulo', id]);
      },
      (error) => {
        console.error('Error al actualizar el artículo:', error);
      }
    );
  }
}