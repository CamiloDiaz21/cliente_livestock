import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from "../component/user-header/user-header.component";
import { UserFooterComponent } from "../component/user-footer/user-footer.component";

@Component({
  selector: 'app-publicacion-ganado',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    UserHeaderComponent,
    UserFooterComponent
],
  templateUrl: './publicacion-ganado.component.html',
  styleUrl: './publicacion-ganado.component.css'
})
export class PublicacionGanadoComponent {
  publicaciones: any[] = [];
  publicacionesFiltradas: any[] = [];
  filtroBusqueda = '';
  tipoSeleccionado: string = 'Ganado'; // por defecto

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  cargarPublicaciones() {
    this.http.get<any[]>('http://localhost:8083/v1/publicaciones').subscribe({
      next: (data) => {
        this.publicaciones = data;
        this.aplicarFiltros();
      },
      error: (err) => {
        console.error('Error al obtener publicaciones:', err);
      }
    });
  }

  aplicarFiltros() {
    this.publicacionesFiltradas = this.publicaciones
      .filter(p => p.idTipoVenta === this.tipoSeleccionado)
      .filter(p =>
        !this.filtroBusqueda ||
        p.descripcion.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
        p.ubicacion.toLowerCase().includes(this.filtroBusqueda.toLowerCase())
      );
  }

  cambiarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
    this.aplicarFiltros();
  }
}
