import { Injectable } from "@angular/core";
import { articulo } from "../interfaces/contenido.interface";
import { usuario } from "../interfaces/usuario.interface";
import { Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { editarArticulo } from "src/app/formulario-edicion/interfaces/formulario-edicion.interface";

@Injectable({ providedIn: "root" })
export class ContenidoService {

  public listaArticulos: articulo[] = [];
  searchTerm: string = '';  
  private apiUrl = "http://localhost:7777/api";
  public categoriaSeleccionada: number | null = null; // Agregué la propiedad categoriaSeleccionada

  constructor(private http: HttpClient) {}

  setAuthToken(token: string): void {
    localStorage.setItem("token", token);
  }

  
  userRol: string | null = null;

  setUserRol(rol: string): void {
      this.userRol = rol;
      console.log('Rol establecido en el servicio:', this.userRol);
  }


  
  fetchArticuloFromApi(searchTerm: string) : Observable <any> {
    //interpolacion de cadenas utilizando las comillas invertidas, cadenas con objetos
     return this.http.get(`http://localhost:7777/api/articulos?searchTerm=${searchTerm}`);
  }
  
  agregarPublicacion(articulo: articulo): Observable<any>{
    return this.http.post("http://localhost:7777/api/articulos",articulo,
    {
      headers:{
        "Authorization": window.localStorage.getItem("token") ?? "",
      }
    });
  }

  updateArticle(id: number, articleData: editarArticulo): Observable<articulo> {
    return this.http.put<articulo>(`http://localhost:7777/api/articulos/${id}`, articleData,
    {
      headers:{
        "Authorization": window.localStorage.getItem("token") ?? "",
      }
    });
  }

  crearUsuario(usuario: usuario): Observable<any>{
    return this.http.post("http://localhost:7777/api/auth/login",usuario);
  }
 

  getArticleById(id: number): Observable<any> {
    return this.http.get(`http://localhost:7777/api/articulos/${id}`,
    {
      headers:{
        "Authorization": window.localStorage.getItem("token") ?? "",
      }
    }
    );
  }

 /* deleteArticle(articleId: number): Observable<any> {
    const url = `http://localhost:7777/api/articulos/${articleId}`;
    return this.http.delete(url);
  }*/

  deleteArticle(articleId: number): Observable<any> {
    const url = `http://localhost:7777/api/articulos/${articleId}`;
    const headers = {
      'Authorization': localStorage.getItem('token') ?? ''
    };
    return this.http.delete(url, { headers });
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

 

  
  
 /* updateArticle(id: number, articleData: editarArticulo): Observable<articulo> {
    const url = `http://localhost:7777/api/articulos/${id}`;
  
    // Agrega el encabezado "Authorization" con el token almacenado en localStorage
    const headers = {
      'Authorization': localStorage.getItem('token') ?? ''
    };
  
    return this.http.put<articulo>(url, articleData, { headers });
  }*/
  
  
}
