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
import { HttpClient } from '@angular/common/http';
import {ApiService} from '../../../../src/services/api.services'


@Component({
  selector: 'app-registro',
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
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'] // ← ojo con "styleUrl" → debe ser "styleUrls"
})
export class RegistroComponent {

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {

    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      correo_electronico: ['', [Validators.required, Validators.email]],
      dia: ['', Validators.required],
      mes: ['', Validators.required],
      anio: ['', Validators.required],
      celular:['', Validators.required],
      contrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
      terminos: [false, Validators.requiredTrue]
    });
  }

  aceptar() {
    if (this.registroForm.valid) {
      console.log('Registro exitoso', this.registroForm.value);
      console.log('JSON formateado:\n', JSON.stringify(this.registroForm.value, null, 2));
      this.apiService.postData('registro', this.registroForm.value).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          alert('Usuario Creado')
          this.router.navigate(['/login']);

        },
        error: (error) => {
          console.error('Error al enviar POST:', error);

        }
      });
      
    } else {
      console.log('Formulario inválido');
    }
  }



}
