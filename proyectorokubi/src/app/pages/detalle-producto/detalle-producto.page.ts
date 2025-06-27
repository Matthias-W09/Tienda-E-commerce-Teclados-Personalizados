import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { 
  IonContent, 
  IonTitle, 
  IonImg, 
  IonText,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  add,
  remove
} from 'ionicons/icons';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { ComentsProductComponent } from '../../componets/coments-product/coments-product.component';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { ToastController } from '@ionic/angular'; // Importar ToastController

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  providers: [
    GatewayServiciosService
  ],
  imports: [
    IonContent, 
    IonTitle, 
    IonImg, 
    IonText,
    IonButton,
    IonIcon,
    ComentsProductComponent,
    HeaderComponent, 
    FooterComponent]
})
export class DetalleProductoPage implements OnInit {

  producto: any; // Aquí almacenaremos los detalles del producto
  apartados: number = 0; // Cantidad de unidades que el usuario quiere añadir al carrito
  total: number = 0; // Total calculado en el frontend (solo para visualización local antes de añadir)
  id: number = 0; // ID del producto de la URL

  constructor(
    private route: ActivatedRoute,
    private servicios: GatewayServiciosService,
    private toastController: ToastController // Inyectar ToastController
  ) {
    addIcons({ 
      add,
      remove
    });
  }

  ngOnInit() {
    // Obtener el ID del producto de la URL
    this.id = Number(this.route.snapshot.paramMap.get('idProducto'));

    if (!isNaN(this.id)) {
      // Cargar los detalles del producto desde el servicio
      this.servicios.obtenerProductoPorId(this.id).subscribe({
        next: (producto) => {
          this.producto = producto; // Asignar el producto recibido
          console.log('Producto cargado:', this.producto);
          // Inicializar el total con el precio del producto si se quiere 1 unidad por defecto
          // O solo resetearlo si no se añade nada automáticamente
          this.calculoTotal(); // Asegura que el total se calcule al cargar
        },
        error: (err) => {
          console.error('Error al cargar producto:', err);
          this.presentToast('Error al cargar el producto. Inténtelo de nuevo.', 'danger');
        }
      });
    } else {
      console.warn('ID de producto inválido');
      this.presentToast('ID de producto inválido.', 'danger');
    }
  }

  /**
   * Incrementa la cantidad de productos a añadir al carrito, respetando el stock.
   */
  sumar(){
    if (this.producto && this.apartados < this.producto.stock) {
      this.apartados++;
      this.calculoTotal(); // Recalcula el total localmente para la visualización
    } else if (this.producto) {
      this.presentToast('No hay más stock disponible.', 'warning');
    }
  }

  /**
   * Decrementa la cantidad de productos a añadir al carrito, sin bajar de 0.
   */
  restar(){
    if (this.apartados > 0) {
      this.apartados--;
      this.calculoTotal(); // Recalcula el total localmente para la visualización
    }
  }

  /**
   * Calcula el total del precio de los productos seleccionados localmente.
   */
  calculoTotal(){
    if (this.producto) {
      this.total = parseFloat(this.producto.precio) * this.apartados;
    }
  }

  /**
   * Agrega el producto con la cantidad seleccionada al carrito a través del backend.
   */
  agregar(){
    if (this.id === 0 || this.apartados === 0) {
      this.presentToast('Seleccione una cantidad para añadir al carrito.', 'warning');
      return;
    }

    // Llama al servicio de Gateway para agregar el producto al carrito.
    // Solo necesitamos idProduct y cantidad. El backend maneja el cálculo del total.
    this.servicios.agregarProductoAlCarrito(this.id, this.apartados).subscribe({
      next: (response) => {
        console.log('Producto agregado al carrito:', response);
        this.presentToast('Producto agregado al carrito exitosamente.', 'success');
        this.apartados = 0; // Reiniciar la cantidad para una nueva adición
        this.calculoTotal(); // Reiniciar el total local
      },
      error: (err) => {
        console.error('Error al agregar producto al carrito:', err);
        this.presentToast('Error al agregar producto al carrito.', 'danger');
      }
    });
  }

  /**
   * Muestra un mensaje de tipo Toast en la parte inferior de la pantalla.
   * @param message El texto del mensaje.
   * @param color El color del Toast (ej. 'success', 'danger', 'primary', 'warning').
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
}
