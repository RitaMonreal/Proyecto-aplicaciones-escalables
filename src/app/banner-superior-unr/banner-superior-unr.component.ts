import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContenidoService } from '../contenido/services/contenido.service';
import { Router } from '@angular/router';
import { articulo } from '../contenido/interfaces/contenido.interface';

@Component({
  selector: 'app-banner-superior-unr',
  templateUrl: './banner-superior-unr.component.html',
  styleUrls: ['./banner-superior-unr.component.css']
})
export class BannerSuperiorUnrComponent {
  public searchTerm: string = "";
  isMenuOpen: boolean = false;
  
  constructor(private http: HttpClient, private contenidoService: ContenidoService, private router: Router) {
    
  }

  get estaAutenticado(): boolean {
    return this.contenidoService.isLoggedIn;
  }

  esAdmin(): boolean {

    return this.contenidoService.userRol === 'admin';
  }

  cerrarSesion(): void {
    this.contenidoService.logout();
    this.router.navigate(['/pagina_bienvenida']);
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
    this.router.navigate(['/pagina_principal']); // Navegar a la página principal
  }

  public searchByTerm(): void{
    this.searchArticles(this.searchTerm);
  }

  public get articulos(): articulo[] {
    return this.contenidoService.articulos;
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

  public articuloAleatorio(): void {
    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * this.contenidoService.articulos.length);

    // Obtener el artículo aleatorio
    const articuloAleatorio = this.contenidoService.articulos[indiceAleatorio];

    // Navegar a la página de detalles con el ID del artículo aleatorio
    this.router.navigate(['/detalles-articulo', articuloAleatorio.id]);
  }

}


