import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import {MatOption} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hacer-publicacion',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    // MatOption,
  ],
  templateUrl: './hacer-publicacion.component.html',
  styleUrl: './hacer-publicacion.component.css'
})
export class HacerPublicacionComponent {

  tipoVenta: number = 2;
  imagenesSeleccionadas: string[] = [];
  description: string = '';
  fecha: string = new Date().toLocaleDateString();
  publicacionCreada: boolean = false;

  onImageSelected(event: any) {
    const files = event.target.files;
    this.imagenesSeleccionadas = [];

    for (let file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenesSeleccionadas.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  publicar() {
    console .log(this.imagenesSeleccionadas);
    console .log(this.description);
    this.publicacionCreada = true;
  }

  tipoventa: number = 2;
}
