import { Component } from '@angular/core';
import { UserHeaderComponent } from '../component/user-header/user-header.component';
import { UserFooterComponent } from '../component/user-footer/user-footer.component';

@Component({
  selector: 'app-publicaciones',
  imports: [
    UserFooterComponent,
    UserHeaderComponent,
  ],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent {

}
