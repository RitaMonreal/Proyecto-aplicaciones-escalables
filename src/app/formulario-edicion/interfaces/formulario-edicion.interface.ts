import { articulo } from "src/app/contenido/interfaces/contenido.interface";

export interface editarArticulo extends articulo{
    id: number;
    titulo: string;
    cuerpo_articulo: string;
    image: string;
  }
  