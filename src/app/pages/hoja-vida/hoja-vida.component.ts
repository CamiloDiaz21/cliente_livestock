import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hoja-vida',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './hoja-vida.component.html',
  styleUrls: ['./hoja-vida.component.css']
})
export class HojaVidaComponent {
  selectedFile: File | null = null;
  fileName: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileName = this.selectedFile.name;
    }
  }

  onSubmit() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('cv', this.selectedFile);

    this.http.post('https:/localhost:8088/v1/hoja-vida', formData).subscribe({
      next: res => console.log('CV subido con éxito'),
      error: err => console.error('Error al subir CV', err)
    });
  }
}
