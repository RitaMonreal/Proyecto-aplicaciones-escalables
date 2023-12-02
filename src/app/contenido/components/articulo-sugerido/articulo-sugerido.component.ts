import { Component, Input } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { Router } from '@angular/router';
import { articulo } from '../../interfaces/contenido.interface';

@Component({
  selector: 'app-articulo-sugerido',
  templateUrl: './articulo-sugerido.component.html',
  styleUrls: ['./articulo-sugerido.component.css']
})
export class ArticuloSugeridoComponent {
  constructor(private contenidoService: ContenidoService, private router: Router) { }


  @Input()
  public articulo : articulo = {
    "id": 1,
    "titulo": "Taylor Swift ¿Cantante o satanista?",
    "image": "https://media.vogue.mx/photos/647a2ff04e69e24a33fe1eb0/master/w_1600%2Cc_limit/taylor-swift-en-mexico.jpg",
    "cuerpo_articulo": " Taylor Swift Desmiente Rumores Sobre Su Supuesta Afiliación Satánica Los rumores sobre una supuesta afiliación de Taylor Swift con el satanismo se han estado extendiendo en las redes sociales durante los últimos días, lo que llevó a la cantante a emitir un comunicado desmintiendo las acusaciones. Quiero dejar en claro que no tengo ninguna afiliación con el satanismo ni con ninguna otra religión que no sea la mía propia, dijo Swift en su comunicado. Los rumores comenzaron a circular después de que algunos fanáticos notaron simbolismos que parecían tener referencias a la iconografía satánica en los videos musicales de la cantante. Swift negó estas acusaciones y dijo que la interpretación de las imágenes es subjetiva y depende del ojo del espectador. La cantante también afirmó que la libertad de religión es un derecho fundamental y que no está de acuerdo con aquellos que juzgan a las personas por sus creencias religiosas. Respeto a todas las religiones y espero que los demás respeten la mía también, dijo Swift. Soy una cantante, no una satanista. Mis canciones hablan de amor, desamor y experiencias personales, no de satanismo. La cantante concluyó su comunicado agradeciendo a sus fans por su apoyo continuo y por ser una fuente de inspiración para ella.",
    "categoria": 1,
    "autor": "Harry Styles"
  }

  public verDetalles(id: number): void{
    // Aquí puedes navegar a la página de detalles y pasar el ID
    this.router.navigate(['/detalles-articulo', id]);    
}

}
