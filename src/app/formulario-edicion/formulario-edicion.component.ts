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
  editarArticulo: editarArticulo = {
    id: 0, titulo: '', cuerpo_articulo: '', image: '',
    categoria: 0,
    autor: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contenidoService: ContenidoService
  ) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.cargarArticuloParaEdicion(id);
    });
  }

  cargarArticuloParaEdicion(id: number): void {
    this.contenidoService.obtenerArticuloParaEdicion(id).subscribe(
      (articulo: editarArticulo | undefined) => {
        if (articulo) {
          this.editarArticulo = articulo;
        } else {
          console.error('El artículo para edición no se pudo cargar correctamente.');
        }
      },
      error => {
        console.error('Error al cargar el artículo para edición', error);
      }
    );
  }

  editarPublicacion(): void {
    this.contenidoService.updateArticle(this.editarArticulo.id, this.editarArticulo).subscribe(
      () => {
        console.log('Artículo editado con éxito');
        // Puedes redirigir a la página de detalles u otra página después de la edición
        this.router.navigate(['/detalles', this.editarArticulo.id]);
      },
      error => {
        console.error('Error al editar el artículo', error);
      }
    );
  }
}
