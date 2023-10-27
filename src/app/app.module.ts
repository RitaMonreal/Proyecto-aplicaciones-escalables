import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerSuperiorUnrComponent } from './banner-superior-unr/banner-superior-unr.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContenidoModule } from './contenido/contenido.module';


@NgModule({
  declarations: [
    AppComponent,
    BannerSuperiorUnrComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContenidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
