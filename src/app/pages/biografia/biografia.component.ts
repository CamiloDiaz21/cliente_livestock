import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biografia',
  imports: [
    CommonModule,
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
      imagen: 'assets/img/manual1.jpg',
      enlace: '#',
    },
    {
      tipo: 'articulo',
      titulo: 'Estrategias de Alimentación en Bovinos',
      autor: 'Revista AgroVida',
      anio: 2022,
      imagen: 'assets/img/articulo1.jpg',
      enlace: '#',
    },
    {
      tipo: 'video',
      titulo: 'Crianza eficiente de ganado de carne',
      autor: 'FAO',
      anio: 2021,
      imagen: 'assets/img/video1.jpg',
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
