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
  @Input() item!: CarritoFront; 
  
  @Output() productoEliminado = new EventEmitter<number>();
  @Output() productoActualizado = new EventEmitter<{ idProducto: number, cantidad: number, total: number }>();

  private productStock: number = 0; 

  constructor(private servicios: GatewayServiciosService) {
    addIcons({ 
      add,
      remove
    });
  }

  ngOnInit() {
    if (this.item && this.item.idProducto) {
      this.servicios.obtenerProductoPorId(this.item.idProducto).subscribe({
        next: (productDetails) => {
          this.productStock = productDetails.stock;
        },
        error: (err) => {
          console.error('Error al obtener detalles del producto para stock:', err);
        }
      });
    }
  }

  borrarProductoCart() {
    if (!this.item || !this.item.idProducto) {
      console.error('No se pudo eliminar el producto: ID de producto no disponible.');
      return;
    }

    this.servicios.eliminarProductoDelCarrito(this.item.idProducto).subscribe({
      next: (response) => {
        console.log('Producto eliminado del carrito:', response);
        this.productoEliminado.emit(this.item.idProducto);
      },
      error: (err) => {
        console.error('Error al eliminar producto del carrito:', err);
      }
    });
  }
  
  sumar() {
    if (this.productStock > 0 && this.item.cantidad >= this.productStock) {
      console.warn('No se puede agregar más: Stock máximo alcanzado.');
      return;
    }

    this.servicios.updateProductoEnCarrito(this.item.idProducto, 1, 'aumentar').subscribe({
      next: (response) => {
        console.log('Cantidad aumentada:', response);
      },
      error: (err) => {
        console.error('Error al aumentar cantidad:', err);
      }
    });
  }

  restar() {
    if (this.item.cantidad > 1) { 
      this.servicios.updateProductoEnCarrito(this.item.idProducto, 1, 'disminuir').subscribe({
        next: (response) => {
          console.log('Cantidad disminuida:', response);
        },
        error: (err) => {
          console.error('Error al disminuir cantidad:', err);
        }
      });
    } else {
      console.log('Cantidad mínima alcanzada (1 unidad). Considera eliminar el producto si es 0.');
    }
  }
}
