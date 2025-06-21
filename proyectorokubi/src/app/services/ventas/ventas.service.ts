import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private readonly baseUrl = 'http://localhost:3000/api';
  private readonly ventasUrl = `${this.baseUrl}/ventas`;

  constructor(private http: HttpClient) { }

  obtenerVentasUsuario(id: Number): Observable<any> {
    return this.http.get<any[]>(`${this.ventasUrl}/usuario/${id}`)
  }
}
