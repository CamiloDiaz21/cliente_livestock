import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserFooterComponent } from '../component/user-footer/user-footer.component';
import { MatIconModule } from '@angular/material/icon';
import { UserHeader2Component } from '../component/user-header2/user-header2.component';

@Component({
  selector: 'app-inicio3',
  imports: [    
    UserHeader2Component,
    UserFooterComponent,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatIconModule,],
  templateUrl: './inicio3.component.html',
  styleUrl: './inicio3.component.css'
})
export class Inicio3Component {
  constructor(private router: Router) {}

  nombreUsuario: string = 'Camilo Diaz';
  apellidoUsuario: string = 'Diaz';
  fecha = ' Publicado desde el 20/03/2022';
  informacion = 'Se vende lote de ganado raza Brahman rojo puro.';

  imagen = '/imagen.jpg';
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
      image: 'venta2.jpg',
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
  Perfil(){
    this.router.navigate(['/perfil'])
  }

}
