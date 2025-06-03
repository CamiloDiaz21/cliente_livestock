import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  imports: [
    RouterModule,

  ],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
  constructor(private router: Router) {}

nombre: string = '';

ngOnInit() {
  const nombre = localStorage.getItem('usuarioNombre') || '';
  const apellido = localStorage.getItem('usuarioApellido') || '';
  this.nombre = `${nombre} ${apellido}`.trim();
}
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

  perfil() {
    this.router.navigate(['/perfil']);
  }
}
