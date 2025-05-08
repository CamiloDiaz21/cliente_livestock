import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserHeaderComponent } from '../component/user-header/user-header.component';
import { UserFooterComponent } from '../component/user-footer/user-footer.component';
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
  ],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {

  constructor(private router: Router) {}

  // @ViewChild('scrollContainer',{static: true}) scrollContainer!:ElementRef;
  currentIndex= 0;

  sectionTitle= 'seccion destacada';
  sectionDescription= 'Venta';

  selectedInfo:{title: string, description:string}|null =null;

  cards =[
    {
      title: '',
      image: 'venta.jpg',
    },
    {
      title: '',
      image: 'venta.jpg',
    },
    {
      title: '',
      image: 'venta.jpg',
    },

  ]


  goNext(){
    if(this.currentIndex< this.cards.length-1){
      this.currentIndex++;
    }
  }

  goPrevius(){
    if(this.currentIndex>0){
      this.currentIndex--;
    }
  }

  getTransform(){
    return `translateX(-${this.currentIndex*100}%)`
  }

  Perfil(){
    this.router.navigate(['/perfil'])
  }
}
