import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
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

    });
  }

  cargarImagen(event: Event): void {
  // Para imagen de perfil
  }
  cargarDocumento(event: Event) {
  // Para la hoja de vida
}

  onFileselected(event: Event, row: any){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length>0){
      const file = input.files[0]
      console.log(file)
      console.log("Esta es la fila", row)
      alert('Documento a sido subido' + file.name)
      //eviarlo a un api o guardarlo en una base de datos
    }
  }

  guardarCambios(): void {
    const datos = this.perfilForm.value;
    console.log('Datos del perfil:', datos);
    if (this.imagenSeleccionada) {
      console.log('Imagen seleccionada:', this.imagenSeleccionada.name);
      // Aquí puedes enviar la imagen con FormData a tu backend
    }
  }


}
