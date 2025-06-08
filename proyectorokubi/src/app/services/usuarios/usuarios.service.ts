import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly baseUrl = 'http://localhost:3000/api';
  private readonly usuariosUrl = `${this.baseUrl}/usuarios`;

  constructor(private http: HttpClient) { }

  nuevoUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.usuariosUrl}/NuevoUsuario`, usuario);
  }

  login(mail: string, password: string) {
    this.http.post<{token: string}>(`${this.usuariosUrl}/login`, { mail, password })
      .subscribe({
        next: (res) => {
          this.guardarToken(res.token);
          // Redirigir o actualizar UI
        },
        error: (err) => {
          console.error('Error en login', err);
        }
      });
  }

  logout() {
    this.borrarToken();
    // Redirigir o actualizar UI
  }

  
  guardarToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  borrarToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  estaLogueado(): boolean {
    return !!this.obtenerToken();
  }
}
