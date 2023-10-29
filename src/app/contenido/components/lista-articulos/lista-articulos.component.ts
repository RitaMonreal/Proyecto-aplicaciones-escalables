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
  constructor(private contenidoService: ContenidoService, private router: Router) {}

  public get articulos(): articulo[] {
    return this.contenidoService.articulos;
  }

  verDetalles(id: number) {
    this.router.navigate(['/detalles-articulo', id]);
  }
}