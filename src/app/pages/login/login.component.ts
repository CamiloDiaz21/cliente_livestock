import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
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

  constructor(private http: HttpClient, private router: Router) {}
  hidePassword = true;

  correo_electronico: string = '';
  Contrasena: string = '';
  error: string = '';
// hidePassword = true;

login() {
  if (!this.correo_electronico || !this.Contrasena) {
    this.error = 'Por favor ingrese correo y contraseña.';
    return;
  }

  this.http.post<any>('http://localhost:8082/v1/registro_usuario', {
    email: this.correo_electronico,
    password: this.Contrasena
  }).subscribe({
    next: (res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/inicio']); // o donde quieras redirigir
    },
    error: (err) => {
      this.error = err.error.message || 'Correo o contraseña incorrectos';
      console.log(err);
    }
  });
    }    goToRegister(){
      console.log('Boton de registro clickeado');
      alert('creando cuenta...');
      this.router.navigate(['/registro']);
    }
    recoverPassword(){
      console.log('Boton de recuperar clickeado');
      alert('recuperando contraseña...');
      this.router.navigate(['/recover-password']);
    }
    createAccount(){
      alert('creando cuenta...');
    }
}
