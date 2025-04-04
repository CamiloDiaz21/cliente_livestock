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
  correo: string = '';
    constructor(private router: Router) {}
    hidePassword=true;

    goToRegister(){
      console.log('Boton de registro clickeado');
      this.router.navigate(['/eleccion']);
    }
    login(){
      alert('iniciando sesion...');
    }
    recoverPassword(){
      alert('recuperando contraseña...');
    }
    createAccount(){
      alert('creando cuenta...');
    }
}
