import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-superior-unr',
  templateUrl: './banner-superior-unr.component.html',
  styleUrls: ['./banner-superior-unr.component.css']
})
export class BannerSuperiorUnrComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
