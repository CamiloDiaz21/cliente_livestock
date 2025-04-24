import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserHeaderComponent } from '../component/user-header/user-header.component';
import { UserFooterComponent } from '../component/user-footer/user-footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-publicaciones',
  imports: [
    MatButtonModule,
    CommonModule,
    UserFooterComponent,
    UserHeaderComponent,
    MatCardModule,
  ],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {
  // @ViewChild('scrollContainer',{static: true}) scrollContainer!:ElementRef;
  currentIndex= 0;

  sectionTitle= 'seccion destacada';
  sectionDescription= 'Venta';

  selectedInfo:{title: string, description:string}|null =null;

  cards =[
    {
      title: 'card 1',
      image: 'venta.jpg',
    },
    {
      title: 'card 2',
      image: 'venta.jpg',
    },
    {
      title: 'card 3',
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
}
