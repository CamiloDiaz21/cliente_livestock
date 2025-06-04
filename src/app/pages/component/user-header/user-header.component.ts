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
  const header = document.querySelector('.main-header') as HTMLElement;

  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
}

  

  perfil() {
    this.router.navigate(['/perfil']);
  }

  menuAbierto = false;

toggleMenu() {
  this.menuAbierto = !this.menuAbierto;
}

verPerfil() {
  // Redirigir al perfil u otra lógica
  this.menuAbierto = false;
  this.router.navigate(['/perfil']);
}

//cerrarSesion() {
  // Lógica de cierre de sesión
  //this.menuAbierto = false;
  // Por ejemplo:
  //this.authService.logout();
  //this.router.navigate(['/login']);
//}
}
