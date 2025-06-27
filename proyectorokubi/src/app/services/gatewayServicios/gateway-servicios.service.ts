import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { ProductoService } from '../../services/productos/producto-service.service';
import { ComentariosService } from '../../services/comentarios/comentarios.service';
import { CarritoService, CarritoFront } from '../../services/carrito/carrito.service';
import { VentasService } from '../../services/ventas/ventas.service'
import { FormConfigService } from '../../services/forms/form-config.service';
import { DivisasService } from '../../services/divisas/divisas.service';

export interface CurrencyConversionResponse {
  moneda_origen: string;
  moneda_destino: string;
  rateo_convercion: number;
  cantidad_original: number;
  cantidad_convertida: number;
}

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
    private ventasService: VentasService,
    private divisasService: DivisasService
  ) {}
  // funciones Usuarios
  registrarUsuario(data: any): Observable<any[]> {
    return this.usuariosService.nuevoUsuario(data);
  }

  loginUsuario(data: { mail: string, password: string }) {
    return this.usuariosService.login(data.mail, data.password);
  }

  logoutUsuario() {
    this.usuariosService.logout();
    this.carritoService.clearCart();
    console.log('Usuario deslogueado y carrito limpiado.');
  }

  estaLogueado(): boolean {
    return this.usuariosService.estaLogueado();
  }

  obtenerDatosUser(id: number): Observable<any[]>{
    return this.usuariosService.getDatosUser(id);
  }

  rutaUsuario(){
    return this.usuariosService.rutaUsuario();
  }

  getIdUser(): Number{
    return this.usuariosService.idUser();
  }

  get rutaUsuario$() {
    return this.usuariosService.rutaUsuario$;
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
    return this.comentarioService.getComentsIdProducto(id);
  }
  obtenerComentariosPorUsuario(id: number): Observable<any[]> {
    return this.comentarioService.getComentsIdUsuario(id);
  }

  //Funciones carrito
  get carrito$(): Observable<CarritoFront[]> {
    // Esto ahora retorna el observable del carrito del CarritoService,
    // que se actualiza cuando se hacen cambios via API.
    return this.carritoService.carrito$;
  }

  // Se asume que el id del usuario se obtiene a través de usuariosService.idUser()
  // Es crucial que esta función retorne un Number válido o ajuste el tipo.
  private getUserId(): number {
    const id = this.usuariosService.idUser();
    // Asegúrate de que id sea un number y no null/undefined antes de usarlo.
    // Podrías lanzar un error o manejarlo de otra manera si el usuario no está logueado.
    if (typeof id === 'number') {
      return id;
    }
    // Considera una mejor estrategia para manejar un id de usuario no disponible.
    // Por ejemplo, lanzar un error o retornar 0 y dejar que el backend maneje el error.
    console.error('ID de usuario no disponible para operaciones de carrito.');
    return 0; // O lanza un error apropiado
  }

  agregarProductoAlCarrito(idProducto: number, cantidad: number): Observable<any> {
    const idUser = this.getUserId();
    if (idUser === 0) { // Si getUserId() devuelve 0 o algún valor de error
      return new Observable(observer => observer.error('Usuario no logueado. No se puede agregar al carrito.'));
    }
    // Llama al nuevo método del CarritoService que se comunica con el backend
    return this.carritoService.addProducto(idProducto, idUser, cantidad);
  }

  // Nota: `totalProducto` ya no es necesario aquí, el backend lo calcula.
  updateProductoEnCarrito(idProducto: number, cantidad: number, funcion: 'aumentar' | 'disminuir'): Observable<any> {
    const idUser = this.getUserId();
    if (idUser === 0) {
      return new Observable(observer => observer.error('Usuario no logueado. No se puede actualizar el carrito.'));
    }
    // Usa el método de modificación de cantidad del CarritoService
    console.log(`Actualizando producto en carrito: idProducto=${idProducto}, cantidad=${cantidad}, funcion=${funcion}`);
    return this.carritoService.modificarCantidadProductoCarrito(idProducto, idUser, cantidad, funcion);
  }

  eliminarProductoDelCarrito(idProducto: number): Observable<any> {
    const idUser = this.getUserId();
    if (idUser === 0) {
      return new Observable(observer => observer.error('Usuario no logueado. No se puede eliminar del carrito.'));
    }
    // Llama al método del CarritoService que se comunica con el backend
    return this.carritoService.removeProductoDelCarrito(idProducto, idUser);
  }

  // El total del carrito se obtiene ahora a través del CarritoService,
  // que a su vez se basa en los datos del backend.
  totalCarrito(): Observable<number> {
    return this.carritoService.totalCarrito();
  }

  // Este método dispara la carga del carrito desde el backend
  obtenerCarrito(): Observable<CarritoFront[]> {
    const idUser = this.getUserId();
    console.log(`Obteniendo carrito para el usuario con ID DESDE GATEWAY: ${idUser}`);
    if (idUser === 0) {
      return new Observable(observer => {
        observer.next([]); // Retorna un carrito vacío si no hay usuario
        observer.complete();
      });
    }
    return this.carritoService.getCarrito(idUser);
  }

  //Funciones Ventas
  comprasDelUser(id: Number): Observable<any>{
    return this.ventasService.obtenerVentasUsuario(id);
  }

  //Funciones forms
  obtenerConfiguracionFormulario(formType: string) {
    return this.formularioService.getFormConfig(formType);
  }

  //Funciones divisas
  convertirDivisa(from: string, to: string, amount: number): Observable<CurrencyConversionResponse> {
    return this.divisasService.convertirDivisa(from, to, amount);
  }
}

