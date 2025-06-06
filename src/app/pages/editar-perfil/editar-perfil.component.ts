import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule,  } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent implements OnInit {
  usuario: any = {};
  selectedImage: File | null = null;
  imagenPreview: string | null = null;
  imagenBase64: string | null = null;
  tiposDocumento: any[] = [];
  tiposUsuario: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const datos = localStorage.getItem('usuario');
    if (datos) {
      this.usuario = JSON.parse(datos);
      this.imagenPreview = this.usuario.FotoPerfil || null;

      // Aseguramos que los tipos sean objetos completos
      if (typeof this.usuario.IdTipoDocumento === 'number') {
        this.usuario.IdTipoDocumento = { Id: this.usuario.IdTipoDocumento };
      }

      if (typeof this.usuario.IdTipoUsuario === 'number') {
        this.usuario.IdTipoUsuario = { Id: this.usuario.IdTipoUsuario };
      }
    }

    this.cargarTiposDocumento();
    this.cargarTiposUsuario();
  }

  cargarTiposDocumento() {
  this.http.get<any>('http://localhost:8087/v1/tipo_documento').subscribe({
    next: (response) => {
      this.tiposDocumento = response["Consulta de id"];

      // Si el usuario ya tiene asignado un tipo de documento, seleccionarlo del arreglo
      if (this.usuario?.IdTipoDocumento?.Id) {
        this.usuario.IdTipoDocumento = this.tiposDocumento.find(
          doc => doc.Id === this.usuario.IdTipoDocumento.Id
        );
      }
    },
    error: (err) => console.error('Error cargando tipos de documento:', err),
  });
  }

  cargarTiposUsuario() {
  this.http.get<any>('http://localhost:8087/v1/tipo_usuario').subscribe({
    next: (response) => {
      this.tiposUsuario = response["Consulta de id"];

      // Seleccionar el tipo correcto si el usuario ya lo tiene asignado
      if (this.usuario?.IdTipoUsuario?.Id) {
        this.usuario.IdTipoUsuario = this.tiposUsuario.find(
          tipo => tipo.Id === this.usuario.IdTipoUsuario.Id
        );
      }
    },
    error: (err) => console.error('Error cargando tipos de usuario:', err),
  });
  }

  onImagenSeleccionada(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        this.imagenBase64 = result.split(',')[1];
        this.imagenPreview = result;
      };
      reader.readAsDataURL(file);
    }
  }

  guardarCambios(): void {
    const usuarioId = this.usuario.Id || localStorage.getItem('usuarioId');
    const url = `http://localhost:8087/v1/registro_usuario/${usuarioId}`;

    const usuarioActualizado = {
      Id: usuarioId,
      Nombre: this.usuario.Nombre || '',
      Apellido: this.usuario.Apellido || '',
      CorreoElectronico: this.usuario.CorreoElectronico || '',
      FNacimiento: this.usuario.FNacimiento || '',
      NDocumento: this.usuario.NDocumento || '',
      Celular: this.usuario.Celular || '',
      FotoPerfil: this.imagenBase64 || this.usuario.FotoPerfil || '',
      IdTipoDocumento: {
        Id: this.usuario.IdTipoDocumento?.Id
      },
      IdTipoUsuario: {
        Id: this.usuario.IdTipoUsuario?.Id
      },
      Contrasena: {
        Id: this.usuario.Contrasena?.Id,
        Contrasena: this.usuario.Contrasena?.Contrasena,
        Activo: this.usuario.Contrasena?.Activo,
        FechaCreacion: this.usuario.Contrasena?.FechaCreacion,
        FechaModificacion: new Date().toISOString()
      }
    };

    this.http.put(url, usuarioActualizado).subscribe({
      next: () => {
        localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
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
