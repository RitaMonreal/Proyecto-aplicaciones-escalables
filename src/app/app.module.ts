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

@NgModule({
  declarations: [
    AppComponent,
    BannerSuperiorUnrComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContenidoModule, 
    RouterModule,
    CommonModule // Asegúrate de importar CommonModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
