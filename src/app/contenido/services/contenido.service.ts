import { Injectable } from "@angular/core";
import { articulo } from "../interfaces/contenido.interface";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";


//categoria 1: musica
//          2: cine
//          3: varios
@Injectable({providedIn: "root"})
export class ContenidoService{
    public articulos: articulo[] = [];

    constructor(private http: HttpClient){

    }

    fetchArticuloFromApi() : Observable <any> {
      return this.http.get("http://localhost:7777/api/articulos");
   }
      
      obtenerArticuloPorId(id: number): Observable<articulo | undefined> {
        const articuloEncontrado = this.articulos.find(
          (articulo) => articulo.id_articulo === id
        );
        return of(articuloEncontrado);
      }
     
}

      
