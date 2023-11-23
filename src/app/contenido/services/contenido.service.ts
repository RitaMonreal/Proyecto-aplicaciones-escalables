import { Injectable } from "@angular/core";
import { articulo } from "../interfaces/contenido.interface";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ContenidoService {
  public listaArticulos: articulo[] = [];
  private apiUrl = "http://localhost:7777/api";
  public categoriaSeleccionada: number | null = null; // Agregué la propiedad categoriaSeleccionada

  constructor(private http: HttpClient) {}

  fetchArticuloFromApi(): Observable<any> {
    return this.http.get("http://localhost:7777/api/articulos");
  }

  obtenerArticuloPorId(id: number): Observable<articulo | undefined> {
    const articuloEncontrado = this.listaArticulos.find(
      (articulo) => articulo.id_articulo === id
    );
    return of(articuloEncontrado);
  }

  fetchArticulosPorCategoria(categoriaId: number): Observable<articulo[]> {
    this.categoriaSeleccionada = categoriaId; // Actualizo la categoría seleccionada
    return this.http.get<articulo[]>(`${this.apiUrl}/articulos/categoria/${categoriaId}`);
  }
  

  public get articulos(): articulo[] {
    return this.listaArticulos;
  }

  public setCategoriaSeleccionada(categoriaId: number | null): void {
    this.categoriaSeleccionada = categoriaId;
  }
  
}
