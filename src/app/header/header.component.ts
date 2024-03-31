import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isMenuItemOpen: boolean = false;

  toggleMenu() {
    if (this.isMenuOpen && this.isMenuItemOpen) {
      // Si tanto el menú principal como un submenú están abiertos, cierra primero el submenú
      this.isMenuItemOpen = false;
    } else {
      // Si solo el menú principal está abierto o ambos están cerrados, cambia el estado del menú principal
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  toggleMenuItem() {
    this.isMenuItemOpen = !this.isMenuItemOpen;
  }
}