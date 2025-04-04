import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-verificacion-codigo',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './verificacion-codigo.component.html',
  styleUrl: './verificacion-codigo.component.css'
})
export class VerificacionCodigoComponent {

}
