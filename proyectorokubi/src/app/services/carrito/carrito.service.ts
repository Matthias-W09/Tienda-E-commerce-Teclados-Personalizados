import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  // Estado inicial del carrito
  private carritoInicial = [ ];

  private carritoSubject = new BehaviorSubject<any[]>(this.carritoInicial);
  
  carrito$: Observable<any[]> = this.carritoSubject.asObservable();

  getCarrito(): any[] {
    return this.carritoSubject.value;
  }

  addProducto(idProducto: number, cantidad: number, totalProducto: number) {
    const carrito = [...this.carritoSubject.value];
    const existe = carrito.find(p => p.idProducto === idProducto);
    if (existe) {
      existe.apartadosProductos += cantidad;
      existe.totalProducto += totalProducto;
    } else {
      carrito.push({
        idProducto: idProducto,
        apartadosProductos: cantidad,
        totalProducto: totalProducto,
      });
    }
    this.carritoSubject.next(carrito);
  }

  updateProducto(idProducto: number, cantidad: number, totalProducto: number ) {
    const carrito = this.carritoSubject.value.map(item => {
      if (item.idProducto === idProducto) {
        const total = totalProducto;
        return { ...item, apartadosProductos: cantidad, totalProducto: total };
      }
      return item;
    });
    this.carritoSubject.next(carrito);
  }

  removeProductoDelCarrito(idProducto: number) {
    const nuevoCarrito = this.carritoSubject.value.filter(item => item.idProducto !== idProducto);
    this.carritoSubject.next(nuevoCarrito);
  }

  totalCarrito(): Observable<number> {
    return this.carrito$.pipe(
      map(items => items.reduce((total, item) => total + item.totalProducto, 0))
    );
  }
}