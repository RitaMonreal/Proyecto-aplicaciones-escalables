import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerSuperiorUnrComponent } from './banner-superior-unr/banner-superior-unr.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContenidoModule } from './contenido/contenido.module';
import { RouterModule } from '@angular/router';
import { FormularioNuevaPublicacionComponent } from './formulario-nueva-publicacion/formulario-nueva-publicacion.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSuperiorUnrComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    NotFoundComponent,
    FormularioNuevaPublicacionComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContenidoModule, 
    RouterModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
