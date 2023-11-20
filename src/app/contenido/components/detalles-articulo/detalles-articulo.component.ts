import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContenidoService } from "../../services/contenido.service";
import { Observable, map, switchMap } from "rxjs";

@Component({
  selector: "app-detalles-articulo",
  templateUrl: "./detalles-articulo.component.html",
  styleUrls: ["./detalles-articulo.component.css"],
})
export class DetallesArticuloComponent {
  articuloId?: number;
  articulo$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private contenidoService: ContenidoService
  ) {
    this.articulo$ = this.route.params.pipe(
      map((params) => +params["id"]),
      switchMap((id) =>
        this.contenidoService.obtenerArticuloPorId(id)
      )
    );
  }
}


  
