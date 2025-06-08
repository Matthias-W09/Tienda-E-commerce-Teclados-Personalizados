import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
}
