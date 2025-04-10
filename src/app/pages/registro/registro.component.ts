import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'] // ← ojo con "styleUrl" → debe ser "styleUrls"
})
export class RegistroComponent {

  constructor(private router: Router) {}

  aceptar() {
    console.log('🔔 Botón de registro clickeado');
    this.router.navigate(['/login']);
  }
  // registroForm: FormGroup; // ← ✅ CORREGIDO

  // constructor(
  //   private fb: FormBuilder,
  //   private apiService: ApiService,
  //   private router: Router
  // ) {
  //   this.registroForm = this.fb.group({
  //     nombre: ['', Validators.required],
  //     apellido: ['', Validators.required],
  //     tipodocumeto: ['', Validators.required],
  //     documento: ['', Validators.required],
  //     correo: ['', [Validators.required, Validators.email]],
  //     ciudad: ['', Validators.required],
  //     departamento: ['', Validators.required],
  //     pais: ['', Validators.required],
  //     birthDate: ['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     aceptaTerminos: [false, Validators.requiredTrue]
  //   });
  // }

  // Registrar() {
  //   if (this.registroForm.valid) {
  //     console.log('✅ Formulario válido - procesando registro...');

  //     const formData = this.registroForm.value;
  //     const extendedData = {
  //       ...formData,
  //       Fecha_creacion: new Date().toISOString(),
  //       role: 'user',
  //     };

  //     console.log('📋 Datos enviados:', extendedData);

  //     this.apiService.Post(API_URLS.CRUD.Api_crud1, extendedData).subscribe({
  //       next: (response) => {
  //         console.log('🎉 Registro exitoso:', response);
  //         alert('✅ Se creó un registro exitosamente');
  //       },
  //       error: (error) => {
  //         console.error('❌ Error al crear el registro:', error);
  //         alert('⚠️ Ocurrió un error al crear el registro');
  //       }
  //     });

  //   } else {
  //     console.warn('⚠️ Formulario inválido o incompleto');
  //     this.registroForm.markAllAsTouched(); // para mostrar errores visuales
  //   }
  // }



}
