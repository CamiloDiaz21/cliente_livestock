import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacion-codigo',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './verificacion-codigo.component.html',
  styleUrl: './verificacion-codigo.component.css'
})
export class VerificacionCodigoComponent {
  constructor(private router: Router) {}
    hidePassword=true;

    reenviarcodigo(){
      console.log('Boton de registro clickeado');
      this.router.navigate(['/verificacion-codigo']);
    }

}
