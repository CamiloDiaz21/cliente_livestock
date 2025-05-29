import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFooterComponent } from "../component/user-footer/user-footer.component";
import { UserHeaderComponent } from "../component/user-header/user-header.component";

@Component({
  selector: 'app-biografia',
  imports: [
    CommonModule,
    UserFooterComponent,
    UserHeaderComponent
],
  templateUrl: './biografia.component.html',
  styleUrl: './biografia.component.css'
})
export class BiografiaComponent {
  filtroSeleccionado = 'todos';

  recursos = [
    {
      tipo: 'libro',
      titulo: 'Manual de Ganadería Sostenible',
      autor: 'Instituto Agropecuario',
      anio: 2020,
      imagen: '/fondo.jpg',
      enlace: '#',
    },
    {
      tipo: 'articulo',
      titulo: 'Estrategias de Alimentación en Bovinos',
      autor: 'Revista AgroVida',
      anio: 2022,
      imagen: '/fondo.jpg',
      enlace: '#',
    },
    {
      tipo: 'video',
      titulo: 'Crianza eficiente de ganado de carne',
      autor: 'FAO',
      anio: 2021,
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
}
