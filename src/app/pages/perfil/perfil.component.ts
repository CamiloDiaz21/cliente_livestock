import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { UsuarioService, Usuario } from '../../../services/usuario.service';
import { HacerPublicacionComponent } from '../hacer-publicacion/hacer-publicacion.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario?: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const idUsuario = 1; // Puedes cambiar esto por un valor dinámico (desde sesión, token, etc.)
    this.usuarioService.obtenerUsuario(idUsuario).subscribe(data => {
      this.usuario = {
        ...data,
        imagen_url: this.generarImagenPerfil(data.id) // Genera o asigna una imagen si no viene del backend
      };
    });
  }

  Editar(): void {
    this.router.navigate(['/editar-perfil']);
  }

  Publicar(): void {
    this.dialog.open(HacerPublicacionComponent, {
      width: '600px'
    });
  }

  generarImagenPerfil(id: number): string {
    // Esto es solo un ejemplo. Si tu backend ya manda `imagen_url`, elimina esta función.
    return `https://api.multiavatar.com/${id}.png`;
  }
}
