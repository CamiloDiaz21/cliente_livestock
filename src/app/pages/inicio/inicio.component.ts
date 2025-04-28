import { Router } from '@angular/router';
import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserHeaderComponent } from '../component/user-header/user-header.component';
import { UserFooterComponent } from '../component/user-footer/user-footer.component';


@Component({
  selector: 'app-inicio',
  imports: [
    UserHeaderComponent,
    UserFooterComponent,
    MatButtonModule,
    MatCardModule,
    CommonModule


  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router) {}

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
      title: ' ',
      image: 'venta.jpg',
    },
    {
      title: ' ',
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


  Publicaciones(){
    this.router.navigate(['/publicaciones']);
  }

}
