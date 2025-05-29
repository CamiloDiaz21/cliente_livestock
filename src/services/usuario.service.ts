import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id: number;
  Nombre: string;
  CorreoElectronico: string;
  IdTipoUsuario: 'vendedor' | 'comun';
  verificado: boolean;
  imagen_url?: string; // Opcional: en caso de que no venga desde el backend
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8087/v1/registro_usuario';

  constructor(private http: HttpClient) {}

  obtenerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  actualizarUsuario(id: number, datos: Partial<Usuario>): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, datos);
  }
}
