import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importamos HttpClient
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// --- INTERFACES NECESARIAS PARA EL FRONTEND ---
// NOTA: Idealmente, estas deberían estar en un archivo compartido en el frontend,
// como por ejemplo: src/app/models/interfaces.ts o src/app/shared/models.ts
export interface CarritoFront {
  idProducto: number;
  nameProducto: string;
  image: string | null;
  cantidad: number;
  total: number;
}

export interface NuevoProductoCarrito {
  idProduct?: string;
  idUser?: string;
  cantidad?: string;
}
// -------------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private _carritoSubject = new BehaviorSubject<CarritoFront[]>([]);
  public carrito$: Observable<CarritoFront[]> = this._carritoSubject.asObservable();

  private readonly baseUrl = 'http://localhost:3000/api';
 

  constructor(private http: HttpClient) { }

  // Método para obtener el carrito del usuario desde el backend
  getCarrito(idUser: number): Observable<CarritoFront[]> {
    console.log(`Obteniendo carrito para el usuario con ID desde service: ${idUser}`);
    return this.http.get<CarritoFront[]>(`${this.baseUrl}/carrito/carritoUsuario/${idUser}`)
      .pipe(
        tap(carrito => {
          // Actualiza el BehaviorSubject con los datos del carrito obtenidos del backend
          this._carritoSubject.next(carrito);
        }),
        catchError(this.handleError)
      );
  }

  // Método para agregar o actualizar un producto en el carrito
  addProducto(idProduct: number, idUser: number, cantidad: number): Observable<any> {
    const data: NuevoProductoCarrito = { idProduct: idProduct.toString(), idUser: idUser.toString(), cantidad: cantidad.toString() };
    return this.http.post(`${this.baseUrl}/carrito/addProducto`, data)
      .pipe(
        tap(() => {
          // Después de una operación exitosa, volvemos a cargar el carrito para asegurar la coherencia del frontend
          this.getCarrito(idUser).subscribe();
        }),
        catchError(this.handleError)
      );
  }

  // Método para eliminar un producto del carrito
  removeProductoDelCarrito(idProduct: number, idUser: number): Observable<any> {
    // El backend espera un body para eliminar un producto del carrito
    const data = { idProduct: idProduct.toString(), idUser: idUser.toString() };
    return this.http.post(`${this.baseUrl}/carrito/eliminarProductoDelCarrito`, data)
      .pipe(
        tap(() => {
          this.getCarrito(idUser).subscribe(); // Recarga el carrito
        }),
        catchError(this.handleError)
      );
  }

  // Método para modificar la cantidad de un producto en el carrito (aumentar/disminuir)
  modificarCantidadProductoCarrito(idProduct: number, idUser: number, cantidad: number, funcion: 'aumentar' | 'disminuir'): Observable<any> {
    const data = { idProduct: idProduct.toString(), idUser: idUser.toString(), cantidad: cantidad.toString(), funcion };
    console.log('Modificando cantidad en carrito:', data);
    return this.http.post(`${this.baseUrl}/carrito/modificarCantidadProductCarrito`, data)
      .pipe(
        tap(() => {
          this.getCarrito(idUser).subscribe(); // Recarga el carrito
        }),
        catchError(this.handleError)
      );
  }

  // El total del carrito se calculará del carrito obtenido del backend
  totalCarrito(): Observable<number> {
    return this.carrito$.pipe(
      map(items => items.reduce((total, item) => total + item.total, 0))
    );
  }

  clearCart(): void {
    this._carritoSubject.next([]); // Emite un array vacío para resetear el carrito
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    // Podrías agregar lógica para mostrar mensajes al usuario aquí
    return throwError(() => new Error(error.message || 'Error del servidor'));
  }
}