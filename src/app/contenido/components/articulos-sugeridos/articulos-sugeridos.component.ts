import { Component, Input, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';

@Component({
  selector: 'app-articulos-sugeridos',
  templateUrl: './articulos-sugeridos.component.html',
  styleUrls: ['./articulos-sugeridos.component.css']
})
export class ArticulosSugeridosComponent implements OnInit {
  @Input() articuloId?: number;
  articulosSugeridos: any[] = [];

  constructor(private contenidoService: ContenidoService) {}

  

  ngOnInit(): void {
    if (this.articuloId) {
      this.articulosSugeridos = this.contenidoService.getSugerencias(this.articuloId);
    }
  }


}
