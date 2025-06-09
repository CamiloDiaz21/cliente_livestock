import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hoja-vida',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './hoja-vida.component.html',
  styleUrls: ['./hoja-vida.component.css']
})
export class HojaVidaComponent {
  selectedFile: File | null = null;
  fileName: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type !== 'application/pdf') {
        alert('Solo se permite subir archivos PDF.');
        this.selectedFile = null;
        this.fileName = '';
        return;
      }

      this.selectedFile = file;
      this.fileName = file.name;
    }
  }

  onSubmit(): void {
  if (!this.selectedFile) return;

  const formData = new FormData();
  formData.append('id', this.selectedFile);

  this.http.post('http://localhost:8084/v1/datos_hoja_vida', formData).subscribe({
    
    next: res => {
      this.snackBar.open('Hoja de vida subida con éxito', 'Cerrar', {
        duration: 3000,
        panelClass: 'snackbar-success' // ✅ Clase para éxito
      });

    },
    error: err => {
      console.error('Error al subir CV', err);
      this.snackBar.open('Error al subir la hoja de vida', 'Cerrar', {
        duration: 3000,
        panelClass: 'snackbar-error' // ✅ Clase para error
      });
    }
  });
  }
  }
