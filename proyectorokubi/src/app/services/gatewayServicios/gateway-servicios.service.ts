import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { ProductoService } from '../../services/productos/producto-service.service';
import { ComentariosService } from '../../services/comentarios/comentarios.service';
import { CarritoService } from '../../services/carrito/carrito.service';
import { FormConfigService } from '../../services/forms/form-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatewayServiciosService {

  constructor(
    private productoService: ProductoService,
    private comentarioService: ComentariosService,
    private formularioService: FormConfigService,
    private usuariosService: UsuariosService,
    private carritoService: CarritoService,
    private http: HttpClient
  ) {}
  // funciones Usuarios
  registrarUsuario(data: any): Observable<any[]> {
    return this.usuariosService.nuevoUsuario(data);
  }

  loginUsuario(data: { mail: string, password: string }) {
    return this.usuariosService.login(data.mail, data.password);
  }

  logoutUsuario() {
    return this.usuariosService.logout();
  }

  estaLogueado(): boolean {
    return this.usuariosService.estaLogueado();
  }

  deslogearUsuario() {
    this.usuariosService.logout();
  }

  rutaUsuario(){
    return this.usuariosService.rutaUsuario();
  }

  // funciones productos
  obtenerProductos() {
    return this.productoService.getProductos();
  }

  obtenerProductoPorId(id: number): Observable<any> {
    return this.productoService.getProductoPorId(id);
  }

  obtenerDestacados(): Observable<any[]> {
    return this.productoService.getDestacados();
  }

  obtenerCategorias$(): Observable<any[]> {
    return this.productoService.getCategorias();
  }

  nuevoProducto(producto: any): Observable<any[]> {
    return this.productoService.agregarProducto(producto);
  }

  cargarCategorias(): void {
    this.productoService.cargarCategorias();
  }

  obtenerPorCategoria(id: number) {
    return this.productoService.getProductosPorCategoria(id);
  }

  //Funciones comentarios
  obtenerComentarios(): Observable<any[]> {
    return this.comentarioService.getComent();
  }

  obtenerComentariosPorProducto(id: number): Observable<any[]> {
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