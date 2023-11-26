import { Component } from '@angular/core';
import { ContenidoService } from '../contenido/services/contenido.service';

@Component({
  selector: 'app-formulario-nueva-publicacion',
  templateUrl: './formulario-nueva-publicacion.component.html',
  styleUrls: ['./formulario-nueva-publicacion.component.css']
})
export class FormularioNuevaPublicacionComponent {
  public nuevoArticulo: any = {};

  constructor(private contenidoService: ContenidoService) {}

  public agregarPublicacion(){
    this.contenidoService.agregarPublicacion(this.nuevoArticulo).subscribe(
      {
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )
  }


}
