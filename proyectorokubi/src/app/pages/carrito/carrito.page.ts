import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Observable, firstValueFrom } from 'rxjs';
import { IonContent, IonTitle, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { CartaCarritoComponent } from '../../componets/carta-carrito/carta-carrito.component';
import { CarruselDestacadosComponent } from '../../componets/carrusel-destacados/carrusel-destacados.component';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { CarritoFront } from '../../services/carrito/carrito.service'; // Importa CarritoFront del CarritoService, donde ahora está definida.

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  providers: [
    // Generalmente, si un servicio es `providedIn: 'root'`, no necesitas listarlo aquí.
    // Quitarlo evita crear una nueva instancia específica para este componente.
    GatewayServiciosService
  ],
  imports: [
    IonContent,
    IonicModule,
    IonTitle,
    CommonModule,
    HeaderComponent,
    CartaCarritoComponent,
    CarruselDestacadosComponent,
    IonButton,
    FooterComponent
  ]
})
export class CarritoPage implements OnInit {
  // El observable que contendrá los productos del carrito, con el tipo CarritoFront
  carrito$: Observable<CarritoFront[]>;

  constructor(
    private servicios: GatewayServiciosService,
    private toastController: ToastController
  ) {
    // `this.servicios.carrito$` ahora proviene del `BehaviorSubject` en `CarritoService`,
    // que se actualizará después de cada operación del carrito con el backend.
    this.carrito$ = this.servicios.carrito$;
  }

  ngOnInit() {
    // Al inicializar la página, se debe cargar el carrito desde el backend.
    // Esto dispara la llamada a la API y actualiza el `BehaviorSubject` en `CarritoService`.
    this.servicios.obtenerCarrito().subscribe({
      next: (carrito) => {
        console.log('Carrito cargado exitosamente:', carrito);
        // No es necesario hacer nada aquí con `carrito` directamente, ya que `carrito$`
        // ya está observando el `BehaviorSubject` que se actualizó.
      },
      error: (err) => {
        console.error('Error al cargar el carrito al iniciar la página:', err);
        this.presentToast('No se pudo cargar el carrito. Inténtelo de nuevo más tarde.', 'danger');
      }
    });
  }

  /**
   * Maneja el evento cuando un producto es eliminado del carrito.
   * Este método es para la retroalimentación visual al usuario.
   * La lógica de eliminación real ocurre en `carta-carrito.component.ts`.
   * @param idProducto El ID del producto eliminado.
   */
  async manejarProductoEliminado(idProducto: number) {
    // Intentamos obtener el nombre del producto del carrito actual (si aún está disponible)
    const currentCarrito = await firstValueFrom(this.carrito$);
    const productInCart = currentCarrito.find(p => p.idProducto === idProducto);
    // Usamos el nombre del producto o un ID genérico para el mensaje
    const nombre = productInCart?.nameProducto || `producto con ID ${idProducto}`;

    this.presentToast(`"${nombre}" ha sido eliminado del carrito.`, 'danger');
  }

  /**
   * Maneja el evento cuando la cantidad de un producto en el carrito es actualizada.
   * Este método es para la retroalimentación visual al usuario.
   * La lógica de actualización real ocurre en `carta-carrito.component.ts`.
   * @param event Objeto con idProducto, cantidad y total del producto actualizado.
   */
  async manejarProductoActualizado(event: { idProducto: number, cantidad: number, total: number }) {
    // Intentamos obtener el nombre del producto del carrito actual
    const currentCarrito = await firstValueFrom(this.carrito$);
    const productInCart = currentCarrito.find(p => p.idProducto === event.idProducto);
    // Usamos el nombre del producto o un ID genérico para el mensaje
    const nombre = productInCart?.nameProducto || `producto con ID ${event.idProducto}`;

    this.presentToast(
      `"${nombre}" actualizado: ${event.cantidad} unidades, total $${event.total.toFixed(2)}.`,
      'primary'
    );
  }

  /**
   * Muestra un mensaje de tipo Toast en la parte inferior de la pantalla.
   * @param message El texto del mensaje.
   * @param color El color del Toast (ej. 'success', 'danger', 'primary').
   */
  private async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
    });
    await toast.present();
  }

  // La función `buscarProductoPorId` ya no es necesaria aquí,
  // ya que la información del producto (nombre, imagen) ahora viene directamente
  // en la interfaz `CarritoFront` desde el backend.
}
