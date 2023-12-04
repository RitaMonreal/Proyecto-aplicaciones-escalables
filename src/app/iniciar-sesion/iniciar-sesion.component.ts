import { Component } from '@angular/core';
import { ContenidoService } from '../contenido/services/contenido.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  public newUser: any = {};
  public errorMessage: string = '';
  constructor(private contenidoService: ContenidoService, private router: Router) {}

  public iniciarSesion(){
    this.contenidoService.crearUsuario(this.newUser).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.contenidoService.setAuthToken(response.token);
          this.contenidoService.setUserRol(response.rol);
          this.router.navigate(['/pagina_principal']);
        },
        error: (error: any) => {
          console.log(error);
          this.errorMessage = 'Hubo un error durante el inicio de sesión. Por favor, verifica tus credenciales.';
          
        }
      }
    )
  }
}

