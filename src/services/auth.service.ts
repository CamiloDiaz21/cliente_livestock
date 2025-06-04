// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  logout() {
    // Aquí limpia el token, sesión, etc.
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
