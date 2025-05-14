import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatOption} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardTitle } from '@angular/material/card';
import {ApiService} from '../../../../src/services/api.services'


@Component({
  selector: 'app-hacer-publicacion',
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardTitle,
    MatOption,
    ReactiveFormsModule,

  ],
  templateUrl: './hacer-publicacion.component.html',
  styleUrl: './hacer-publicacion.component.css'
})
export class HacerPublicacionComponent {

  publicacionForm!: FormGroup;

imagenesSeleccionadas: string[] = [];
  tipoVenta: string = '';
  descripcion: string = '';

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
    console.log('Publicación:', {
      tipo: this.tipoVenta,
      descripcion: this.descripcion,
      imagenes: this.imagenesSeleccionadas
    });
    // Aquí puedes agregar lógica para enviar esta info al backend
  }

}
