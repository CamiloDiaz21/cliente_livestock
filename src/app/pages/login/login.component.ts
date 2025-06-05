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
  ContrasenaCLIENTE: string = '';
  hidePassword: boolean = true;
  error: string = '';
  IdTipoUsuario: any = null;
  IdTipoDocumento:  any = null;

  constructor(private http: HttpClient, private router: Router) {
    const tipoUsuario = localStorage.getItem('usuarioTipo');
    const tipodocumento = localStorage.getItem('tipodocumento');

    if (tipoUsuario) {
      try {
        this.IdTipoUsuario = JSON.parse(tipoUsuario);
      } catch (e) {
        console.warn('Error al parsear usuarioTipo:', e);
      }
    }

    if (tipodocumento) {
      try {
        this.IdTipoDocumento = JSON.parse(tipodocumento);
      } catch (e) {
        console.warn('Error al parsear tipodocumento:', e);
      }
    }
  }

  login() {
    this.error = '';

    if (!this.CorreoElectronico || !this.ContrasenaCLIENTE) {
      this.error = '⚠️ Debes llenar todos los campos.';
      return;
    }

    const url = `http://localhost:8087/v1/registro_usuario?query=CorreoElectronico:${this.CorreoElectronico}`;

    this.http.get<any>(url).subscribe(
      (response) => {
        const usuarios = response['Consulta de id'];

        if (!usuarios || usuarios.length === 0) {
          this.error = '❌ Correo electrónico no encontrado.';
          return;
        }

        const usuario = usuarios[0];
        const contrasenaBD = usuario.Contrasena?.Contrasena;

        if (!contrasenaBD) {
          this.error = '❌ No se encontró la contraseña del usuario.';
          return;
        }

        if (this.ContrasenaCLIENTE === contrasenaBD) {
          console.log('✅ Inicio de sesión exitoso.');
          alert('Usuario iniciado con éxito');

          // ✅ Guardar datos del usuario
          localStorage.setItem('usuarioId', usuario.Id?.toString() || '');
          localStorage.setItem('usuarioNombre', usuario.Nombre || '');
          localStorage.setItem('usuarioApellido', usuario.Apellido || '');
          localStorage.setItem('CorreoUsuario', usuario.CorreoElectronico || '');
          localStorage.setItem('DocumentoUsuario', usuario.NDocumento || '');
          localStorage.setItem('FechaNacimiento', usuario.FNacimiento || '');
          localStorage.setItem('telefono', usuario.Celular || '');

          // ✅ Guardar tipo de usuario de forma segura
          const tipoNombre = usuario.IdTipoUsuario?.Nombre || '';
          this.IdTipoUsuario = tipoNombre;
          localStorage.setItem('usuarioTipo', usuario.IdTipoUsuario.Nombre ) ;

          const tipodocumento = usuario.IdTipoDocumento?.Nombre || '';
          this.IdTipoDocumento = tipodocumento;
          localStorage.setItem('tipodocumento', usuario.IdTipoDocumento.Nombre ) ;
          console.log('Usuario:', usuario);


          // ✅ Redirigir al inicio
          this.router.navigate(['/inicio']);
        } else {
          this.error = '❌ Contraseña incorrecta.';
        }
      },
      (error) => {
        this.error = '❌ Error al buscar el usuario. Intenta más tarde.';
        console.error('Error del servidor:', error);
      }
    );
  }

  goToRegister(): void {
    this.router.navigate(['/registro']);
  }

  recoverPassword(): void {
    alert('Función de recuperación aún no implementada.');
    this.router.navigate(['/recover-password']);
  }
}
