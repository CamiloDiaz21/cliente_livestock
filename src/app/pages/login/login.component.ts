import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  CorreoElectronico: string = '';
  Contrasena: string = '';
  hidePassword: boolean = true;
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    if (!this.CorreoElectronico || !this.Contrasena) {
      this.error = 'Por favor ingrese correo y contraseña.';
      return;
    }

    this.http.post<any>('http://localhost:8087/v1/registro_usuario', {
      correo: this.CorreoElectronico,
      contrasena: this.Contrasena
    }).subscribe({
      next: (res) => {
        // Puedes guardar un token si el backend lo genera
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        this.error = err.error?.error || 'Correo o contraseña incorrectos';
        console.error('Error de login:', err);
      }

    });
  }

  goToRegister(): void {
    this.router.navigate(['/registro']);
  }

  recoverPassword(): void {
    alert('Función de recuperación aún no implementada.');
    this.router.navigate(['/recover-password']);
  }
}
