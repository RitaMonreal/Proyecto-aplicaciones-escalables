import { Component } from '@angular/core';
import { ContenidoService } from '../contenido/services/contenido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../contenido/interfaces/usuario.interface';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  public nuevoUsuario: string = "";
  public nuevoPassword: string = "";


  constructor(private contenidoService: ContenidoService, private router: Router) {}

  public crearCuenta(){
    const newUser: usuario = { usuario: this.nuevoUsuario, password: this.nuevoPassword };
    this.contenidoService.crearCuenta(newUser).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/iniciar_sesion']);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    )
  }
}
