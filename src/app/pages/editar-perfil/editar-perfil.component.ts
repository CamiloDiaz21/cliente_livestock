import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
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
  const data = localStorage.getItem('usuarioId');
  if (data) {
    this.usuario = JSON.parse(data);
    this.imagenPreview = this.usuario.FotoPerfil ? `data:image/png;base64,${this.usuario.FotoPerfil}` : null;
  }

  this.cargarTiposDocumento();
  this.cargarTiposUsuario();
}

  cargarTiposDocumento() {
    this.http.get<any>('http://localhost:8087/v1/tipo_documento').subscribe({
      next: (response) => {
        this.tiposDocumento = response["Consulta de id"];

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
guardarCambios() {
  const payload = {
    ...this.usuario,
    // Asegúrate de no romper la estructura de los objetos requeridos
    IdTipoDocumento: this.tiposDocumento.find(d => d.Id === this.usuario.IdTipoDocumento.Id),
    IdTipoUsuario: this.tiposUsuario.find(u => u.Id === this.usuario.IdTipoUsuario.Id),
    FModificacion: new Date().toISOString()
  };

  this.http.put(`http://localhost:8087/v1/registro_usuario/${this.usuario.Id}`, payload).subscribe({
    next: () => {
      // Guardamos exactamente el objeto enviado para mantener consistencia
      localStorage.setItem('usuario', JSON.stringify(payload));
      alert('✅ Perfil actualizado correctamente');
      this.router.navigate(['/perfil']);
    },
    error: () => alert('❌ Error al actualizar el perfil')
  });
  }
}
