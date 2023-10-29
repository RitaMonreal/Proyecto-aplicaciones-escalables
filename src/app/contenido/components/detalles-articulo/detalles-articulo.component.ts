import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from '../../services/contenido.service'; // Ajusta la ruta

@Component({
  selector: 'app-detalles-articulo',
  templateUrl: './detalles-articulo.component.html',
  styleUrls: ['./detalles-articulo.component.css']
})
export class DetallesArticuloComponent {
  articulo: any; // Declaración del objeto articulo

  constructor(
    private contenidoService: ContenidoService,
    private route: ActivatedRoute
  ) {}

  
}
