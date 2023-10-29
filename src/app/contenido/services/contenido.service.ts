import { Injectable } from "@angular/core";
import { articulo } from "../interfaces/contenido.interface";

@Injectable({providedIn: "root"})
export class ContenidoService{
    public articulos: articulo[] = [
        {
          "id_articulo": 1,
          "titulo": "Taylor Swift ¿Cantante o satanista?",
          "image": "https://media.vogue.mx/photos/647a2ff04e69e24a33fe1eb0/master/w_1600%2Cc_limit/taylor-swift-en-mexico.jpg",
          "cuerpo_articulo": " Taylor Swift Desmiente Rumores Sobre Su Supuesta Afiliación Satánica Los rumores sobre una supuesta afiliación de Taylor Swift con el satanismo se han estado extendiendo en las redes sociales durante los últimos días, lo que llevó a la cantante a emitir un comunicado desmintiendo las acusaciones. Quiero dejar en claro que no tengo ninguna afiliación con el satanismo ni con ninguna otra religión que no sea la mía propia, dijo Swift en su comunicado. Los rumores comenzaron a circular después de que algunos fanáticos notaron simbolismos que parecían tener referencias a la iconografía satánica en los videos musicales de la cantante. Swift negó estas acusaciones y dijo que la interpretación de las imágenes es subjetiva y depende del ojo del espectador. La cantante también afirmó que la libertad de religión es un derecho fundamental y que no está de acuerdo con aquellos que juzgan a las personas por sus creencias religiosas. Respeto a todas las religiones y espero que los demás respeten la mía también, dijo Swift. Soy una cantante, no una satanista. Mis canciones hablan de amor, desamor y experiencias personales, no de satanismo. La cantante concluyó su comunicado agradeciendo a sus fans por su apoyo continuo y por ser una fuente de inspiración para ella.",
          "categoria": 1,
          "autor": "Jorge Sanchéz"
        },
        {
          "id_articulo": 2,
          "titulo": "Las Kardashian y sus repentinos cambios de fisionomia",
          "image": "https://media.vogue.es/photos/6230bd6b773b60a59b27852a/2:3/w_2560%2Cc_limit/DL_u403214_457.jpg",
          "cuerpo_articulo": "Las Kardashian, una famosa familia de celebridades, han sido objeto de especulación y debate en cuanto a sus cambios de fisionomía a lo largo de los años. Se ha observado que algunas de las hermanas, como Kim Kardashian, Khloé Kardashian y Kylie Jenner, han experimentado transformaciones en su apariencia física que han generado mucha atención y discusión en los medios y en el público en general. Estos cambios incluyen rumores y especulaciones sobre cirugías plásticas, retoques estéticos y el uso de procedimientos cosméticos para alterar su apariencia. Algunas de las hermanas han hablado abiertamente sobre su uso de maquillaje, técnicas de contorneado y prendas de vestir que pueden crear ilusiones ópticas, lo que también puede contribuir a sus cambios de apariencia. Es importante tener en cuenta que la decisión de someterse a procedimientos cosméticos o cambios en la apariencia física es personal y queda en manos de cada individuo. Cada persona tiene derecho a tomar decisiones sobre su propio cuerpo y apariencia. Sin embargo, es relevante recordar que la presión social y los estándares de belleza pueden influir en la percepción de la apariencia física y en las decisiones que las personas toman en relación con su cuerpo. Es esencial promover la aceptación y el respeto por la diversidad de cuerpos y apariencias, así como mantener un enfoque en el valor de las personas más allá de su aspecto físico. En resumen, los cambios de fisionomía de las Kardashian han generado interés y debate en la sociedad, pero es importante recordar que cada persona tiene el derecho de tomar decisiones sobre su apariencia física y que el valor de una persona va más allá de su aspecto externo.",
          "categoria": 3,
          "autor": "Edson Ibarra"
        },
        {
          "id_articulo": 3,
          "titulo": "Los amores de Julia Roberts",
          "image": "https://assets.vogue.com/photos/5be0961b3d62f84b2e384f7b/1:1/w_2000,h_2000,c_limit/00-promo-julia-roberts-unshaved-armpits.jpg",
          "cuerpo_articulo": "Julia Roberts, una de las actrices más queridas y reconocidas de Hollywood, ha cautivado a audiencias de todo el mundo con su talento, carisma y belleza innegable. Sin embargo, también ha sido objeto de un constante interés por parte de los medios y fanáticos en lo que respecta a su vida amorosa. A lo largo de los años, Roberts ha protagonizado diversos romances que han capturado la imaginación del público. Desde su participación en películas románticas icónicas hasta sus relaciones en la vida real, la actriz ha dejado una huella imborrable en el mundo del amor y la pasión. Desde su papel en Pretty Woman junto a Richard Gere, donde el romance en la pantalla trascendió a la vida real, hasta su matrimonio con el actor y cantante Lyle Lovett, Roberts ha experimentado amores tumultuosos y apasionados. Uno de los romances más notables de Roberts fue su relación con el actor Benjamin Bratt, con quien compartió pantalla en la película La pareja del año. Su relación capturó la atención de los medios y los fans, y su química en la pantalla se tradujo en una relación fuera de ella. Sin embargo, uno de los amores más duraderos de Julia Roberts ha sido su matrimonio con el cineasta Daniel Moder. Juntos, han formado una familia y han demostrado que el amor puede resistir los desafíos de la fama y la industria del entretenimiento. A pesar de los altibajos y la atención mediática, Julia Roberts ha demostrado ser una mujer fuerte y talentosa tanto en su carrera como en su vida personal. Su legado va más allá de los romances, dejando un impacto duradero en la industria cinematográfica y en el corazón de sus fans. Mientras continúa cautivando al público en la pantalla grande, seguiremos siguiendo los amores y las historias de Julia Roberts con admiración y fascinación, sabiendo que su capacidad para transmitir emociones genuinas es lo que la convierte en una de las actrices más queridas de todos los tiempos",
          "categoria": 2,
          "autor": "Julián Flores"
        },
        {
          "id_articulo": 4,
          "titulo": "Anne Hathaway un icono de la moda",
          "image": "https://aws-modapedia.vogue.es/prod/designs/v1/assets/640x929/1127.jpg",
          "cuerpo_articulo": " Anne Hathaway, la actriz ganadora del premio de la Academia, ha demostrado a lo largo de los años su talento y versatilidad en la industria del cine. Sin embargo, también ha dejado una marca significativa en el mundo de la moda. Con su elegancia, estilo único y capacidad para lucir cualquier atuendo con gracia y sofisticación, Hathaway se ha convertido en un verdadero icono de la moda. Ya sea en alfombras rojas, eventos de moda o simplemente en su día a día, Anne Hathaway siempre logra cautivar con su impecable sentido del estilo. Su elección de prendas y accesorios refleja su personalidad creativa y audaz, demostrando su capacidad para arriesgarse y experimentar con diferentes tendencias y estilos. Además, Hathaway es reconocida por su apoyo a diseñadores emergentes y su compromiso con la sostenibilidad en la moda. Ha utilizado su influencia para promover marcas éticas y eco-friendly, destacando la importancia de la moda responsable. En resumen, Anne Hathaway se ha ganado su lugar como un verdadero ícono de la moda, no solo por su talento actoral, sino también por su estilo distintivo y su compromiso con la industria de la moda sostenible. Su impacto perdurará como una referencia para futuras generaciones de amantes de la moda.",
          "categoria": 2,
          "autor": "Rita Monreal"
        },
        
      ];
      
      obtenerArticuloPorId(id: number): articulo | undefined {
        // Utiliza el método find para buscar el artículo por su ID
        return this.articulos.find(articulo => articulo.id_articulo === id);
      }

      
}