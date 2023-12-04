import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pagina-bienvenida',
  templateUrl: './pagina-bienvenida.component.html',
  styleUrls: ['./pagina-bienvenida.component.css'],
  animations: [
    trigger('wordAnimation', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden <=> visible', [
        animate('0.6s')
      ]),
    ]),
  ],
})
export class PaginaBienvenidaComponent implements OnInit{
  words: string[] = ["PURGATORIO", "CIELO", "INFIERNO", "LIMBO", "LIBRE ALBEDRÍO"];
  currentWord: string = this.words[0];
  animationState: 'hidden' | 'visible' = 'visible';

  ngOnInit(): void {
    let i = 0;
    setInterval(() => {
      this.animationState = 'hidden';
      setTimeout(() => {
        this.currentWord = this.words[i];
        this.animationState = 'visible';
        i = (i + 1) % this.words.length;
      }, 500);
    }, 1500);
  }

}





