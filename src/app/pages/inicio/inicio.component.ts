import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserHeaderComponent } from '../component/user-header/user-header.component';
import { UserFooterComponent } from '../component/user-footer/user-footer.component';

@Component({
  selector: 'app-inicio',
  imports: [
    UserHeaderComponent,
    UserFooterComponent,
    MatButtonModule,
    

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router) {}

  Publicaciones(){
    this.router.navigate(['/publicaciones']);
  }

}
