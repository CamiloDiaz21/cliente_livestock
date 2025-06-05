import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 Importa esto
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {
usuario: any = {};
  selectedImage: File | null = null;
  imagenPreview: string | ArrayBuffer | null = null;
  imagenBase64: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onImagenSeleccionada(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagenBase64 = reader.result as string; // ⚠️ Aquí está el base64
    };
    reader.readAsDataURL(file);
  }
  }

guardarCambios(): void {
  const usuarioId = localStorage.getItem('usuarioId');
  const url = `http://localhost:8087/v1/registro_usuario/${usuarioId}`;

  const reader = new FileReader();

  // Si hay imagen seleccionada, convertirla a base64
  if (this.selectedImage) {
    reader.readAsDataURL(this.selectedImage); // Lee la imagen como base64

    reader.onload = () => {
      const imagenBase64 = reader.result as string;

      const usuarioActualizado = {
        Id: usuarioId,
        Nombres: this.usuario.Nombre || '',
        Apellidos: this.usuario.Apellido || '',
        CorreoElectronico: this.usuario.CorreoElectronico || '',
        TipoDocumento: this.usuario.TipoDocumento || '',
        NDocumento: this.usuario.NDocumento || '',
        Celular: this.usuario.Celular || '',
        FNacimiento: this.usuario.FNacimiento || '',
        FotoPerfil: imagenBase64
      };

      // Enviar el JSON al backend
      this.http.put(url, usuarioActualizado).subscribe({
        next: () => {
          alert('✅ Perfil actualizado exitosamente');
          this.router.navigate(['/perfil']);
        },
        error: (error) => {
          console.error('❌ Error al actualizar perfil:', error);
          alert('❌ Error al actualizar el perfil');
        }
      });
    };

    reader.onerror = (error) => {
      console.error('❌ Error al leer la imagen:', error);
      alert('❌ No se pudo leer la imagen');
    };
  } else {
    // Si no hay imagen seleccionada, enviar sin imagen
    const usuarioActualizado = {
      Id: usuarioId,
      Nombres: this.usuario.Nombre || '',
      Apellidos: this.usuario.Apellido || '',
      CorreoElectronico: this.usuario.CorreoElectronico || '',
      TipoDocumento: this.usuario.TipoDocumento || '',
      NDocumento: this.usuario.NDocumento || '',
      Celular: this.usuario.Celular || '',
      FNacimiento: this.usuario.FNacimiento || '',
      FotoPerfil: '' // O mantener la imagen actual, si así lo prefieres
    };

    this.http.put(url, usuarioActualizado).subscribe({
      next: () => {
        alert('✅ Perfil actualizado exitosamente');
        this.router.navigate(['/perfil']);
      },
      error: (error) => {
        console.error('❌ Error al actualizar perfil:', error);
        alert('❌ Error al actualizar el perfil');
      }
    });
  }
}
}
