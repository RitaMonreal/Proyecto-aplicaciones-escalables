import { Component } from '@angular/core';
import { ContenidoService } from '../contenido/services/contenido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-nueva-publicacion',
  templateUrl: './formulario-nueva-publicacion.component.html',
  styleUrls: ['./formulario-nueva-publicacion.component.css']
})
export class FormularioNuevaPublicacionComponent {
  public nuevoArticulo: any = {};

  constructor(private contenidoService: ContenidoService, private router: Router) {}

  public agregarPublicacion(){
    this.contenidoService.agregarPublicacion(this.nuevoArticulo).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/pagina_principal']);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )
  }


}
