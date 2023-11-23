import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContenidoService } from '../contenido/services/contenido.service'

@Component({
  selector: 'app-banner-superior-unr',
  templateUrl: './banner-superior-unr.component.html',
  styleUrls: ['./banner-superior-unr.component.css']
})
export class BannerSuperiorUnrComponent {
  isMenuOpen: boolean = false;
  //Hacer la solicitud al servidor
  constructor(private http: HttpClient, private contenidoService: ContenidoService) {}
 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  seleccionarCategoria(categoriaId: number): void {
    this.contenidoService.setCategoriaSeleccionada(categoriaId);
    // Puedes agregar más lógica aquí si es necesario
  }



 
}
