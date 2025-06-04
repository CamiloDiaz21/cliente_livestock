import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {

  perfilForm: FormGroup;
  imagenPrevia: string | ArrayBuffer | null = null;
  imagenSeleccionada: File | null = null;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      // Aquí puedes agregar más campos si es necesario
    });
  }

  cargarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Validación de tipo de archivo
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona un archivo de imagen válido.');
        return;
      }

      // Guardamos el archivo en una propiedad para su envío posterior
      this.imagenSeleccionada = file;

      // Creamos la vista previa
      const lector = new FileReader();
      lector.onload = () => {
        this.imagenPrevia = lector.result;
      };
      lector.readAsDataURL(file);
    }
  }

  cargarDocumento(event: Event): void {
    // Para hoja de vida
  }

  onFileselected(event: Event, row: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(file);
      console.log('Esta es la fila', row);
      alert('Documento ha sido subido: ' + file.name);
      // Puedes enviarlo a un API o guardar en la base de datos aquí
    }
  }

  guardarCambios(): void {
  const datos = this.perfilForm.value;
  console.log('Datos del perfil:', datos);

  if (this.imagenPrevia) {
    const soloBase64 = (this.imagenPrevia as string).split(',')[1];

    // Aquí puedes enviar el base64 como parte de tu payload
    const payload = {
      ...datos,
      imagenBase64: soloBase64
    };

    console.log('Payload para enviar al backend:', payload);

    // Aquí llamas a tu servicio HTTP
    // this.miServicio.actualizarPerfil(payload).subscribe(...)
  }
}
}
