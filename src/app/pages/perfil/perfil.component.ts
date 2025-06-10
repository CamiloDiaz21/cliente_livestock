import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { UsuarioService, Usuario } from '../../../services/usuario.service';
import { HacerPublicacionComponent } from '../hacer-publicacion/hacer-publicacion.component';
import { UserHeaderComponent } from "../component/user-header/user-header.component";
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { HojaVidaComponent } from '../hoja-vida/hoja-vida.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    CommonModule,
    FormsModule,

    UserHeaderComponent
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private dialog: MatDialog,
    private http: HttpClient
  ) {}

  usuario: any = {};
  publicaciones: any[] = [];
  filtroSeleccionado = 'todos';

  get recursosFiltrados(): any[] {
    if (this.filtroSeleccionado === 'todos') return this.publicaciones;
    return this.publicaciones.filter(
      r => r.IdTipoVenta?.NombreTipoVenta?.toLowerCase() === this.filtroSeleccionado
    );
  }

  ngOnInit(): void {
    const nombreCompleto = localStorage.getItem('usuarioNombre');
    const primerNombre = nombreCompleto ? nombreCompleto.trim().split(/\s+/)[0] : '';

    const apellidoCompleto = localStorage.getItem('usuarioApellido');
    const primerApellido = apellidoCompleto ? apellidoCompleto.trim().split(/\s+/)[0] : '';

    this.usuario = {
      Nombres: nombreCompleto + ' ' + apellidoCompleto,
      Nombre: primerNombre + ' ' + primerApellido,
      CorreoElectronico: localStorage.getItem('CorreoUsuario') || '',
      usuarioTipo: localStorage.getItem('usuarioTipo') || '',
      DocumentoUsuario: localStorage.getItem('DocumentoUsuario') || '',
      FechaNacimiento: localStorage.getItem('FechaNacimiento') || '',
      telefono: localStorage.getItem('telefono') || '',
      tipodocumento: localStorage.getItem('tipodocumento') || '',
    };

    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(): void {
    const userId = localStorage.getItem('usuarioId'); // asegúrate que lo tienes en localStorage
    if (!userId) return;

    this.http.get<any[]>(`http://localhost:8088/v1/publicaciones/${userId}`).subscribe({
      next: (data) => {
        this.publicaciones = data.map(pub => ({
          ...pub,
          imagen: pub.imagenes?.[0] || '/assets/default.jpg', // usa imagen real o por defecto
          Usuario: this.usuario.Nombre // puedes ajustar esto si viene en la data
        }));
      },
      error: (error) => {
        console.error('Error al obtener publicaciones:', error);
      }
    });
  }

  HojaVida(): void {
    this.dialog.open(HojaVidaComponent, { width: '600px' });
  }

  Editar(): void {
    this.dialog.open(EditarPerfilComponent, { width: '500px' });
  }

  Publicar(): void {
    this.dialog.open(HacerPublicacionComponent, { width: '600px' });
  }
}
