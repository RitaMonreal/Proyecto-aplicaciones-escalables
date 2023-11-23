import { Component } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { articulo } from '../../interfaces/contenido.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})

export class ListaArticulosComponent {
  constructor(private contenidoService: ContenidoService, private router: Router) {
    this.contenidoService.fetchArticuloFromApi().subscribe(
      {
        next: (response: any) =>{
          //console.log(response);
          this.contenidoService.listaArticulos = response.articulosList;
        },
        error: (error: any) =>{
          console.log(error);
        }
      }
    )
  }

  public get articulos(): articulo[] {
    return this.contenidoService.articulos;
  }

  verDetalles(id: number) {
    this.router.navigate(['/detalles-articulo', id]);
  }

  public get articulosPorCategoria(): articulo[] {
    const categoriaSeleccionada = this.contenidoService.categoriaSeleccionada;
    if (categoriaSeleccionada !== null) {
      return this.articulos.filter(articulo => articulo.categoria === categoriaSeleccionada);
    } else {
      return this.articulos; // Si no hay categoría seleccionada, mostrar todos los artículos
    }
  }

  private fetchArticulos() {
    const categoriaSeleccionada = this.contenidoService.categoriaSeleccionada;
    if (categoriaSeleccionada !== null) {
      // Cargar artículos por categoría
      this.contenidoService.fetchArticulosPorCategoria(categoriaSeleccionada).subscribe(
        {
          next: (response: any) => {
            this.contenidoService.listaArticulos = response; // Actualiza la lista de artículos
          },
          error: (error: any) => {
            console.log(error);
          }
        }
      );
    } else {
      // Si no hay categoría seleccionada, obtén todos los artículos
      this.contenidoService.fetchArticuloFromApi().subscribe(
        {
          next: (response: any) => {
            this.contenidoService.listaArticulos = response.articulosList;
          },
          error: (error: any) => {
            console.log(error);
          }
        }
      );
    }
  }

  seleccionarCategoria(categoriaId: number): void {
    this.contenidoService.setCategoriaSeleccionada(categoriaId);
    this.fetchArticulos(); // Llama al método para actualizar la lista de artículos
  }

}