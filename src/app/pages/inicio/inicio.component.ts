import { Component } from '@angular/core';
import { UserHeaderComponent } from '../component/user-header/user-header.component';

@Component({
  selector: 'app-inicio',
  imports: [
    UserHeaderComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
