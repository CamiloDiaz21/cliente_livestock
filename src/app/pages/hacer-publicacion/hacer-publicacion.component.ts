import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {ApiService} from '../../../../src/services/api.services'


@Component({
  selector: 'app-hacer-publicacion',
  imports: [
    MatCheckboxModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './hacer-publicacion.component.html',
  styleUrl: './hacer-publicacion.component.css'
})
export class HacerPublicacionComponent {
  publicacionForm!: FormGroup;
  imagenesSeleccionadas: string[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {


    this.publicacionForm = this.fb.group({
      TipoPublicacion: ['', Validators.required],
      Imagenes: ['', Validators.required],
      DatosVender: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Precio: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      RazaGanado: [''],

    });
  }

  publicar() {
    if (this.publicacionForm.valid) {
      this.publicacionForm.value.Imagenes = this.imagenesSeleccionadas
      console.log('Registro exitoso', this.publicacionForm.value);
      // console.log('JSON formateado:\n', JSON.stringify(this.publicacionForm.value, null, 2));
      console.log(this.imagenesSeleccionadas)
    //   this.apiService.postData('registro', this.publicacionForm.value).subscribe({
    //     next: (response) => {
    //       console.log('Respuesta del servidor:', response);
      alert('Publicacion Creada')
      this.router.navigate(['/publicaciones']);

    //     },
    //     error: (error) => {
    //       console.error('Error al enviar POST:', error);

    //     }
    //   });

    } else {
      console.log('Formulario inválido');
    }

  }

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

}
