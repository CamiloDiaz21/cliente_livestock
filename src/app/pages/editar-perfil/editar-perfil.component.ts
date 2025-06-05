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

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.usuario = {
      Id: localStorage.getItem('usuarioId'),
      Nombres: localStorage.getItem('usuarioNombre'),
      Apellidos: localStorage.getItem('usuarioApellido'),
      CorreoElectronico: localStorage.getItem('CorreoUsuario'),
      NDocumento: localStorage.getItem('DocumentoUsuario'),
      FNacimiento: localStorage.getItem('FechaNacimiento'),
      Celular: localStorage.getItem('telefono'),
      TipoDocumento: localStorage.getItem('tipodocumento')?.replace(/"/g, '')
    };
  }



  guardarCambios() {
  const usuarioId = localStorage.getItem('usuarioId');
  const url = `http://localhost:8087/v1/registro_usuario/${usuarioId}`;

  this.http.put(url, this.usuario).subscribe({
    next: () => {
      alert('✅ Perfil actualizado exitosamente');

      // 🔄 Actualiza los datos en localStorage también
      localStorage.setItem('usuarioNombre', this.usuario.Nombre || '');
      localStorage.setItem('usuarioApellido', this.usuario.Apellido || '');
      localStorage.setItem('CorreoUsuario', this.usuario.CorreoElectronico || '');
      localStorage.setItem('DocumentoUsuario', this.usuario.NDocumento || '');
      localStorage.setItem('FechaNacimiento', this.usuario.FNacimiento || '');
      localStorage.setItem('telefono', this.usuario.Celular || '');
      localStorage.setItem('tipodocumento', JSON.stringify(this.usuario.TipoDocumento || ''));

      this.router.navigate(['/perfil']);
    },
    error: (error) => {
      console.error('❌ Error al actualizar perfil:', error);
      alert('❌ Error al actualizar el perfil');
    }
  });
}


}
