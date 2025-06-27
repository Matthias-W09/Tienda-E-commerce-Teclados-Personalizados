import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { CarritoFront } from '../../services/carrito/carrito.service'; // Importa la interfaz CarritoFront
import { CommonModule } from '@angular/common';
import { 
  IonCard, 
  IonCardContent, 
  IonTitle, 
  IonText,
  IonImg,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  add,
  remove
} from 'ionicons/icons';

@Component({
  selector: 'app-carta-carrito',
  templateUrl: './carta-carrito.component.html',
  styleUrls: ['./carta-carrito.component.scss'],
  standalone: true,
  providers: [
    // Si GatewayServiciosService ya tiene providedIn: 'root', no es necesario listarlo aquí.
    // Esto evita crear una nueva instancia cada vez que se usa CartaCarritoComponent.
    // Lo mantengo por si tienes una configuración específica, pero es buena práctica revisarlo.
    GatewayServiciosService
  ],
  imports: [
    IonCard,
    IonCardContent,
    IonTitle,
    IonText,
    IonImg,
    IonButton,
    IonIcon,
    RouterModule,
    CommonModule
  ]
})
export class CartaCarritoComponent implements OnInit {

  // Ahora el componente recibe un objeto CarritoFront completo
  @Input() item!: CarritoFront; 
  
  // Los eventos de salida para notificar a la página principal
  @Output() productoEliminado = new EventEmitter<number>();
  @Output() productoActualizado = new EventEmitter<{ idProducto: number, cantidad: number, total: number }>();

  // No necesitamos una propiedad 'producto' separada, usamos 'item' directamente.
  // El stock del producto se obtendrá a través de una llamada a la API si es necesario validarlo.
  private productStock: number = 0; 

  constructor(private servicios: GatewayServiciosService) {
    addIcons({ 
      add,
      remove
    });
  }

  ngOnInit() {
    // Si la información del stock es necesaria para la validación de sumar/restar,
    // se puede obtener aquí. De lo contrario, no es necesario hacer una llamada adicional.
    // Asumiendo que `obtenerProductoPorId` devuelve el stock, lo cargamos.
    if (this.item && this.item.idProducto) {
      this.servicios.obtenerProductoPorId(this.item.idProducto).subscribe({
        next: (productDetails) => {
          this.productStock = productDetails.stock;
        },
        error: (err) => {
          console.error('Error al obtener detalles del producto para stock:', err);
          // Manejar el error, quizás deshabilitar los botones de cantidad si el stock no se puede verificar.
        }
      });
    }
  }

  /**
   * Borra un producto del carrito haciendo una llamada al backend.
   * Emite un evento al componente padre tras la eliminación exitosa.
   */
  borrarProductoCart() {
    if (!this.item || !this.item.idProducto) {
      console.error('No se pudo eliminar el producto: ID de producto no disponible.');
      return;
    }

    this.servicios.eliminarProductoDelCarrito(this.item.idProducto).subscribe({
      next: (response) => {
        console.log('Producto eliminado del carrito:', response);
        this.productoEliminado.emit(this.item.idProducto); // Notifica a la página padre
      },
      error: (err) => {
        console.error('Error al eliminar producto del carrito:', err);
        // Aquí podrías emitir un evento de error o mostrar un toast.
      }
    });
  }
  
  /**
   * Incrementa la cantidad de un producto en el carrito.
   * Realiza una llamada al backend para actualizar la cantidad.
   */
  sumar() {
    // Validar con el stock si está disponible
    if (this.productStock > 0 && this.item.cantidad >= this.productStock) {
      console.warn('No se puede agregar más: Stock máximo alcanzado.');
      // Opcional: mostrar un toast al usuario
      return;
    }

    // Llamar al servicio para aumentar la cantidad en el backend
    this.servicios.updateProductoEnCarrito(this.item.idProducto, 1, 'aumentar').subscribe({
      next: (response) => {
        console.log('Cantidad aumentada:', response);
        // El carrito$ en GatewayServiciosService se actualizará automáticamente
        // y el componente padre recibirá los nuevos datos.
        // Opcional: Si necesitas notificar al padre sobre el total y la cantidad exacta después de la operación del backend,
        // podrías usar los datos de la respuesta si el backend los devuelve de esa forma.
        // Por ahora, el carrito$ del servicio ya se encargará de esto.
      },
      error: (err) => {
        console.error('Error al aumentar cantidad:', err);
        // Manejar el error, mostrar un toast.
      }
    });
  }

  /**
   * Decrementa la cantidad de un producto en el carrito.
   * Realiza una llamada al backend para actualizar la cantidad.
   */
  restar() {
    if (this.item.cantidad > 1) { // Asegura que la cantidad no baje de 1
      // Llamar al servicio para disminuir la cantidad en el backend
      this.servicios.updateProductoEnCarrito(this.item.idProducto, 1, 'disminuir').subscribe({
        next: (response) => {
          console.log('Cantidad disminuida:', response);
          // El carrito$ en GatewayServiciosService se actualizará automáticamente.
        },
        error: (err) => {
          console.error('Error al disminuir cantidad:', err);
          // Manejar el error, mostrar un toast.
        }
      });
    } else {
      console.log('Cantidad mínima alcanzada (1 unidad). Considera eliminar el producto si es 0.');
      // Opcional: podrías preguntar si quiere eliminar el producto si la cantidad es 1.
    }
  }

  // Las funciones `actualizarCarrito` y `calculoTotal` ya no son necesarias.
  // La actualización y el cálculo del total se realizan en el backend
  // y se reflejan automáticamente a través del `carrito$` observable en `GatewayServiciosService`.
}
