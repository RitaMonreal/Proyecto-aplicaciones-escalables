import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContenidoPage } from './contenido/contenido.pages';
import { DetallesArticuloComponent } from './contenido/components/detalles-articulo/detalles-articulo.component';

const routes: Routes = [
  {path: "iniciar_sesion", component: IniciarSesionComponent},
  {path: "crear_cuenta", component: CrearCuentaComponent},
  { path: "pagina_principal", component: ContenidoPage },
  /*{path: "", component: Caricaturas2Page},*/
  {path: "", redirectTo: "pagina_principal", pathMatch: "full"},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "not-found", pathMatch: "full"},
  {path: 'detalles-articulo/:id', component: DetallesArticuloComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
