import { Injectable } from "@angular/core";
import { articulo } from "../interfaces/contenido.interface";
import { Observable, map} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { editarArticulo } from "src/app/formulario-edicion/interfaces/formulario-edicion.interface";

@Injectable({ providedIn: "root" })
export class ContenidoService {

  public listaArticulos: articulo[] = [];
  searchTerm: string = '';

 
  
  private apiUrl = "http://localhost:7777/api";
  public categoriaSeleccionada: number | null = null; // Agregué la propiedad categoriaSeleccionada

  constructor(private http: HttpClient) {}
  
  fetchArticuloFromApi(searchTerm: string) : Observable <any> {
    //interpolacion de cadenas utilizando las comillas invertidas, cadenas con objetos
     return this.http.get(`http://localhost:7777/api/articulos?searchTerm=${searchTerm}`);
  }
  
  agregarPublicacion(articulo: articulo): Observable<any>{
    return this.http.post("http://localhost:7777/api/articulos",articulo);
  }
  
 

  getArticleById(id: number): Observable<any> {
    return this.http.get(`http://localhost:7777/api/articulos/${id}`);
  }

  obtenerDetallesArticulo(id: number): Observable<articulo> {
    return this.http.get<articulo>(`${this.apiUrl}/articulos/${id}`);
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

  deleteArticle(articleId: number): Observable<any> {
    const url = `http://localhost:7777/api/articulos/${articleId}`;
    return this.http.delete(url);
  }

 /* updateArticle(id: number, article: articulo): Observable<articulo> {
    return this.http.put<articulo>(`http://localhost:7777/api/articulos/${id}`, article);
  }*/

  updateArticle(id: number, articleData: editarArticulo): Observable<articulo> {
    return this.http.put<articulo>(`http://localhost:7777/api/articulos/${id}`, articleData);
  }
  
  
}
