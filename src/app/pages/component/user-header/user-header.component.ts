import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-header',
  imports: [
    RouterModule,

  ],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    const header = document.querySelector('.main-header') as HTMLElement;

    if (!header) return;

    if (this.prevScrollPos > currentScrollPos) {
      header.style.top = '0'; // Mostrar
    } else {
      header.style.top = '-100px'; // Ocultar
    }

    this.prevScrollPos = currentScrollPos;
  }
}
