import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly baseUrl = 'http://localhost:3000/api';
  private readonly categoriasUrl = `${this.baseUrl}/categories`;
  private readonly productosUrl = `${this.baseUrl}/products`;
  private readonly destacadosUrl = `${this.productosUrl}/destacados`;

  private categoriasSubject = new BehaviorSubject<any[]>([]);
  categorias$: Observable<any[]> = this.categoriasSubject.asObservable();

  constructor(private http: HttpClient) {}

  // ----- CATEGORÍAS -----

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriasUrl);
  }

  cargarCategorias(): void {
    this.http.get<any[]>(this.categoriasUrl).subscribe({
      next: (data) => this.categoriasSubject.next(data),
      error: (err) => console.error('Error cargando categorías', err)
    });
  }

  // ----- PRODUCTOS -----

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.productosUrl);
  }

  getProductoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.productosUrl}/${id}`);
  }

  getProductosPorCategoria(categoriaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.productosUrl}/categoria/${categoriaId}`);
  }

  agregarProducto(producto: any): Observable<any> {
    return this.http.post(`${this.productosUrl}/addProduct`, producto);
  }

  // ----- DESTACADOS -----

  getDestacados(): Observable<any[]> {
    const id = 3; // Valor fijo para obtener destacados
    return this.http.get<any[]>(`${this.destacadosUrl}/${id}`);
  }
}