import { HttpClient, HttpHeaders} from '@angular/common/http';
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

  private guardarToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  private borrarToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
  }

  private setUsuario() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<{ usuario: { id: number, name: string, rol: number } }>(
      `${this.usuariosUrl}/setUsuario`,
      { headers } // 👈 Esto es importante
    ).subscribe(res => {
      const { rol, id, name } = res.usuario;

      localStorage.setItem('rol', rol.toString());
      localStorage.setItem('id', id.toString());
      localStorage.setItem('name', name);
    });
  }

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
    this.setUsuario();
  }

  logout() {
    this.borrarToken();
  }

  obtenerToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  obtenerRol(): number | null {
    return Number(localStorage.getItem('rol'));
  }

  estaLogueado(): boolean {
    return !this.obtenerToken();
  }

  rutaUsuario(): String{
    if(!this.estaLogueado()){
      return '/inicio-sesion';
    }
    const rol = this.obtenerRol();

    if(rol === 1){
      return '/inicio-admin';
    }

    return '/perfil-usuario';
  }
}
