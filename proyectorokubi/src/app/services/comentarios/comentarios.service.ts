import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  getComentsId(id:number): Observable<any> {
    return this.http.get<any>(`${this.commentUrl}/product/${id}`);
  }
}
