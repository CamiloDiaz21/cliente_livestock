import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    //MatButtonModule,
    MatIconModule,
    MatButton,
    FormsModule,
    FormsModule,
    MatCheckboxModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = ''; // ✅ Agregado para resolver el error
  error: string | null = null;
  hidePassword = true;

  constructor(private router: Router) {}

  goToRegister() {
    alert('creando cuenta...');
    this.router.navigate(['/registro']);
  }

  login() {
    if (this.correo === '' || this.contrasena === '') {
      this.error = 'Correo y contraseña son obligatorios.';
    } else {
      this.error = null;
      alert('Iniciando sesión...');
      this.router.navigate(['/inicio']);
    }
  }

  recoverPassword() {
    alert('Recuperando contraseña...');
    this.router.navigate(['/recover-password']);
  }

  createAccount() {
    alert('Creando cuenta...');
  }
}

