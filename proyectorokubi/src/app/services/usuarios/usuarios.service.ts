import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Usuario {
  id: number;
  name: string;
  rol: number;
}

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly baseUrl = 'http://localhost:3000/api';
  private readonly usuariosUrl = `${this.baseUrl}/usuarios`;

  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  rutaUsuario$ = this.usuarioSubject.asObservable().pipe(
    map(usuario => {
      if (!usuario) {
        return '/inicio-sesion';
      }
      if (usuario.rol === 0) {
        return '/inicio-admin';
      }
      return '/perfil-usuario';
    })
  );

  constructor(private http: HttpClient) {
    this.cargarUsuarioDesdeToken(); 
  }

  private guardarToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  private borrarToken(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('rol');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    this.usuarioSubject.next(null);
  }

  private setUsuario() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get<{ usuario: Usuario }>(`${this.usuariosUrl}/setUsuario`, { headers })
      .subscribe(res => {
        const usuario = res.usuario;
        localStorage.setItem('rol', usuario.rol.toString());
        localStorage.setItem('id', usuario.id.toString());
        localStorage.setItem('name', usuario.name);
        this.usuarioSubject.next(usuario);
      });
  }

  private cargarUsuarioDesdeToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      this.setUsuario();
    }
  }

  nuevoUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.usuariosUrl}/NuevoUsuario`, usuario);
  }

  login(mail: string, password: string) {
    this.http.post<{token: string}>(`${this.usuariosUrl}/login`, { mail, password })
      .subscribe({
        next: (res) => {
          this.guardarToken(res.token);
          this.setUsuario();
        },
        error: (err) => {
          console.error('Error en login', err);
        }
      });
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
    return !!this.obtenerToken();
  }

  rutaUsuario(): string{
    if(!this.estaLogueado()){
      return '/inicio-sesion';
    }
    const rol = this.obtenerRol();

    if(rol === 0){
      return '/inicio-admin';
    }

    return '/perfil-usuario';
  }
    idUser(): Number{
    return Number(localStorage.getItem('id'));
  }

  getDatosUser(id: number): Observable<any[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.obtenerToken()}`
    });
    return this.http.get<any[]>(`${this.usuariosUrl}/${id}`,{headers});
  }
}