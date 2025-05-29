import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from '../../services/productos/producto-service.service';
import { ComentariosService } from '../../services/comentarios/comentarios.service';
import { CarritoService } from '../../services/carrito/carrito.service';
import { FormConfigService } from '../../services/forms/form-config.service';
@Injectable({
  providedIn: 'root'
})
export class GatewayServiciosService {

  constructor(
    private productoService: ProductoService,
    private comentarioService: ComentariosService,
    private formularioService: FormConfigService,
    private carritoService: CarritoService
  ) {}

  // funciones productos
  obtenerProductos() {
    return this.productoService.getProductos();
  }

  obtenerProductoPorId(id: number) {
    return this.productoService.getProductoPorId(id);
  }

  obtenerDestacados() {
    return this.productoService.getDestacados();
  }

  obtenerCategorias() {
    return this.productoService.getCategorias();
  }

  obtenerPorCategoria(id: number) {
    return this.productoService.getProductosPorCategoria(id);
  }

  //Funciones comentarios
  obtenerComentarios() {
    return this.comentarioService.getComent();
  }

  obtenerComentariosPorProducto(id: number) {
    return this.comentarioService.getComentsId(id);
  }

  //Funciones forms
  obtenerConfiguracionFormulario(formType: string) {
    return this.formularioService.getFormConfig(formType);
  }

  //Funciones carrito

  get carrito$() {
    return this.carritoService.carrito$;
  }

  agregarProductoAlCarrito(idProducto: number, apartadosProductos: number, totalProducto: number) {
    this.carritoService.addProducto(idProducto, apartadosProductos, totalProducto);
  }

  updateProductoEnCarrito(id: number, cantidad: number, total: number) {
    this.carritoService.updateProducto(id, cantidad, total);
  }

  eliminarProductoDelCarrito(idProducto: number) {
    this.carritoService.removeProductoDelCarrito(idProducto);
  }

  totalCarrito(): Observable<number> {
    return this.carritoService.totalCarrito(); 
  }

  obtenerCarrito() {
    return this.carritoService.getCarrito();
  }
}