import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContenidoService } from '../contenido/services/contenido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-superior-unr',
  templateUrl: './banner-superior-unr.component.html',
  styleUrls: ['./banner-superior-unr.component.css']
})
export class BannerSuperiorUnrComponent {
  public searchTerm: string = "";
  isMenuOpen: boolean = false;
  //Hacer la solicitud al servidor
  constructor(private http: HttpClient, private contenidoService: ContenidoService, private router: Router) {
    this.searchArticles();
  }
 

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  seleccionarCategoria(categoriaId: number): void {
    this.contenidoService.setCategoriaSeleccionada(categoriaId);
  }

  restablecerFiltros() {
    this.contenidoService.setCategoriaSeleccionada(null); // Restablecer la categoría seleccionada a null
    this.router.navigate(['/']); // Navegar a la página principal
  }

  public searchByTerm(): void{
    this.searchArticles(this.searchTerm);
  }


  private searchArticles(searchTerm: string = ""): void{
    this.contenidoService.fetchArticuloFromApi(searchTerm).subscribe(
      {
        next: (response: any) =>{
          //console.log(response);
          this.contenidoService.listaArticulos = response.articulosList;
        },
        error: (error: any) =>{
          console.log(error);
        }
      }
    )
  }

}
