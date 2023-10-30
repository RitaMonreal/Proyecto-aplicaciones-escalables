import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from '../../services/contenido.service';

@Component({
  selector: 'app-detalles-articulo',
  templateUrl: './detalles-articulo.component.html',
  styleUrls: ['./detalles-articulo.component.css']
})
export class DetallesArticuloComponent implements OnInit {
  articuloId?: number;
  articulo: any; // Debes tener una definición de artículo

  constructor(private route: ActivatedRoute, private contenidoService: ContenidoService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articuloId = +params['id'];
      console.log('ID del artículo:', this.articuloId);
      this.articulo = this.contenidoService.articulos.find(articulo => articulo.id_articulo === this.articuloId);
      console.log('Artículo encontrado:', this.articulo);
    });
  }
}




  
