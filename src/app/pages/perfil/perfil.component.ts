import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { HacerPublicacionComponent } from '../hacer-publicacion/hacer-publicacion.component';


@Component({
  selector: 'app-perfil',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCard,
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(private router: Router, private http:HttpClient, private dialog: MatDialog) {}
  Hoja_vida(){
    this.router.navigate(['/hoja-vida']);
  }
  nombre= 'Luis Villa'
  email= 'Luisvillawest10@gmail.com'
  imagen='/imagen.jpg'
  Datos_vendedor={
    tipo_usuario: 'Usuario vendedor',
    venta_ganado: 'Venta de ganado',
    venta_haciendas: 'Venta de haciendas',
  }
  Datos_trabajo={
    laboral: 'Atención adecuada a los clientes, realización de labores de venta, cumplimiento de objetivos',
    profesional: 'Promotor de ventas de ganado, atención al cliente, pasión por las ventas',
    aptitudes: 'Responsabilidad y puntualidad, atención al cliente, pasión por las ventas',
  }
  Profecional='Promotor de ventas de ganado, atención al cliente, pasión por las ventas'

  Aptitudes={
    responsabilidad: 'Responsabilidad y puntualidad',
    atencion: 'Atención al cliente',
    pasion: 'Pasión por las ventas',
    puntualidad: 'Puntualidad',
  }
  ubicacion='Yopal, Casanare'
  telefono='3162436822'

  // dataSource = [
  //   { id:11, name: 'Camilo', username: 'Diaz',  email: 'kamilodiaz0521@gmail.com', phone: 22, website: 'Goo',},
  //   { id:12, name: 'Luis',   username:'Garcia',  email: 'luis@correo.com', phone: 28, website: 'Goo',},
  //   { id:13, name: 'Andres', username:'Rodriguez',  email: 'andres@correo.com', phone: 26, website: 'Goo',},
  //   { id:14, name: 'Maria', username:'Perez',  email: 'maria@correo.com', phone: 30, website: 'Goo',},
  //   { id:15, name: 'Pedro', username:'Gomez',  email: 'pedro@correo.com', phone: 24, website: 'Goo',}
  // ];

  // filtros ={
  //   id: '',
  //   name: '',
  //   email: '',
  //   phone: '',
  //   website: '',
  // }

  // datafilter= [...this.dataSource]
  // aplicarFiltros(){
  //   this.datafilter = this.dataSource.filter((row: any) =>{
  //     return Object.entries(this.filtros).every(([key, filtro]) =>{
  //       const valorFiltro = filtro.toLowerCase();
  //       return row[key]?.toString().toLowerCase().includes(valorFiltro);
  //     });
  //   });
  // }

  Editar(){
    this.router.navigate(['/editar-perfil']);

  }

  Publicar(){
    this.dialog.open(HacerPublicacionComponent,{
      width: '600px'
    })

  }


}
