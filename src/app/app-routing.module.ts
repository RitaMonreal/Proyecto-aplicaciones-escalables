import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContenidoPage } from './contenido/contenido.pages';
import { DetallesArticuloComponent } from './contenido/components/detalles-articulo/detalles-articulo.component';
import { FormularioNuevaPublicacionComponent } from './formulario-nueva-publicacion/formulario-nueva-publicacion.component';

const routes: Routes = [
  {path: "iniciar_sesion", component: IniciarSesionComponent},
  {path: "crear_cuenta", component: CrearCuentaComponent},
  { path: "pagina_principal", component: ContenidoPage },
  {path: "detalles-articulo/:id", component: DetallesArticuloComponent},
  {path: "", redirectTo: "pagina_principal", pathMatch: "full"},
  {path: "nueva_publicacion", component: FormularioNuevaPublicacionComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "not-found", pathMatch: "full"},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
