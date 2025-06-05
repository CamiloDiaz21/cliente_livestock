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
import { UserHeaderComponent } from "../component/user-header/user-header.component";
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
    UserHeaderComponent
],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private dialog: MatDialog
  ) {}

usuario: any = {};

ngOnInit(): void {
  this.usuario = {
    Nombres: localStorage.getItem('usuarioNombre') + ' ' + localStorage.getItem('usuarioApellido'),
    Nombre: localStorage.getItem('usuarioNombre') || '',
    CorreoElectronico: localStorage.getItem('CorreoUsuario') || '',
    usuarioTipo: localStorage.getItem('usuarioTipo') || '',
    DocumentoUsuario: localStorage.getItem('DocumentoUsuario') || '',
    FechaNacimiento: localStorage.getItem('FechaNacimiento') || '',
    telefono: localStorage.getItem('telefono') || '',
    tipodocumento: localStorage.getItem('tipodocumento') || '',


  };

}

  Editar(): void {
    this.dialog.open(EditarPerfilComponent, {
      width: '600px'
    });
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
