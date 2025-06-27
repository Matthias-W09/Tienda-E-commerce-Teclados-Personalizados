import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private readonly baseUrl = 'http://localhost:3000/api';
  private readonly commentUrl = `${this.baseUrl}/comment`;

  constructor(private http: HttpClient) {}

  getComent(): Observable<any[]>  {
    return this.http.get<any[]>(this.commentUrl);
  }

  getComentsIdProducto(id:number): Observable<any> {
    return this.http.get<any[]>(`${this.commentUrl}/product/${id}`);
  }

  getComentsIdUsuario(id:number): Observable<any> {
    return this.http.get<any[]>(`${this.commentUrl}/usuario/${id}`);
  }

  nuevoComentarioUsuario(idProduct: number, idUser: number, textoComentario: string): void{
    const valoracion: number = -1;
    console.log("Datos Comentarios")
      this.http.post(`${this.commentUrl}/nuevoComment`, {
        idProduct,
        idUser,
        textoComentario,
        valoracion
      }).subscribe({
        next: res => console.log("Comentario enviado correctamente:", res),
        error: err => console.error("Error al enviar comentario:", err)
      });
  }
}
