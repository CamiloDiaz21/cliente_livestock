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
import { ApiService } from '../../../../src/services/api.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hacer-publicacion',
  standalone: true,
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
  styleUrl: './hacer-publicacion.component.css',
})
export class HacerPublicacionComponent {
  publicacionForm!: FormGroup;

  imagenesSeleccionadas: string[] = [];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) {
    this.publicacionForm = this.fb.group({
      IdUsuarioVendedor: [''],
      IdTipoVenta: ['', Validators.required],
      DatosVendedor: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Precio: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      RazaGanado: [''],
      Imagenes: [[]], // Inicializamos como array
    });
  }

onImageSelected(event: any) {
  const files: FileList = event.target.files;
  this.imagenesSeleccionadas = [];

  if (files && files.length > 0) {
    Array.from(files).forEach((file: File) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.imagenesSeleccionadas.push(base64Image);

        // ⚠️ Corrige aquí
        this.publicacionForm.patchValue({
          Imagenes: this.imagenesSeleccionadas
        });
      };

      reader.readAsDataURL(file);
    });
  }
}

publicar() {
  if (this.publicacionForm.valid) {
    this.publicacionForm.patchValue({ Imagenes: this.imagenesSeleccionadas });

    const usuarioId = localStorage.getItem('usuarioId');
    this.publicacionForm.patchValue({
      IdUsuarioVendedor: Number(usuarioId)
    });

    const formData = this.publicacionForm.value;

    // ✅ Ajustar IdTipoVenta
    formData.IdTipoVenta = {
      Id: Number(formData.IdTipoVenta)
    };

    // ✅ Convertir Precio a número (elimina puntos si vienen en formato "200.000.000")
    const precioStr = String(formData.Precio).replace(/\./g, '');
    formData.Precio = parseFloat(precioStr);

    console.log('Datos a enviar al servidor:', formData);

    const url = 'http://localhost:8088/v1/publicaciones';
    this.http.post<any>(url, formData).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        alert('Publicación creada exitosamente.');
        this.router.navigate(['/publicaciones']);
      },
      error: (error: any) => {
        console.error('Error al enviar POST:', error.message);
        alert('Error al crear la publicación.');
      },
    });
  } else {
    alert('Formulario inválido. Por favor, completa todos los campos obligatorios.');
  }
}


}
