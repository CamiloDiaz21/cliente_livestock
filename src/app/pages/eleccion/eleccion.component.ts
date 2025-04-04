import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleccion',
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './eleccion.component.html',
  styleUrl: './eleccion.component.css'
})
export class EleccionComponent {
  constructor(private router: Router) {}
    hidePassword=true;
  goToRegister(){
    console.log('Boton de registro clickeado');
    this.router.navigate(['/registro']);
  }
  goToRegister2(){
    console.log('Boton de registro clickeado');
    this.router.navigate(['/registro']);
  }

}

