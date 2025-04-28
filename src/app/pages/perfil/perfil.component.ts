import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-perfil',
  imports: [
    MatButtonModule
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(private router: Router) {}

  Hoja_vida(){}

  email= 'Luisvillawest10@gmail.com'
}
