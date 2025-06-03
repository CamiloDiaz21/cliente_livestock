import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UserHeaderComponent } from '../component/user-header/user-header.component';
import { UserFooterComponent } from '../component/user-footer/user-footer.component';
import { HacerPublicacionComponent } from '../hacer-publicacion/hacer-publicacion.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-publicaciones',
  imports: [
    MatButtonModule,
    CommonModule,
    UserFooterComponent,
    UserHeaderComponent,
    MatCardModule,
    MatIconModule,
    SlickCarouselModule,
  ],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {

  constructor(private router: Router, private dialog: MatDialog) {}

filtroSeleccionado = 'todos';

  recursos = [
    {
      tipo: 'ganado',
      Descripcion: 'lote de ganado raza brahman rojo puro',
      Usuario: 'luis villa',
      FCreacion: '21/03/2023',
      imagen: '/fondo.jpg',
      enlace: '#',
    },
    {
      tipo: 'hacienda',
      Descripcion: 'Finca villa hermosa ',
      Usuario: ' Camilo Diaz',
      FCreacion: '21/03/2023',
      imagen: '/fondo.jpg',
      enlace: '#',
    },

  ];

  get recursosFiltrados() {
    if (this.filtroSeleccionado === 'todos') return this.recursos;
    return this.recursos.filter(r => r.tipo === this.filtroSeleccionado);
  }

  seleccionarFiltro(tipo: string) {
    this.filtroSeleccionado = tipo;
  }
  Perfil(){
    this.router.navigate(['/perfil'])
  }
  Publicar(): void {
      this.dialog.open(HacerPublicacionComponent, {
        width: '600px'
      });
    }

}
