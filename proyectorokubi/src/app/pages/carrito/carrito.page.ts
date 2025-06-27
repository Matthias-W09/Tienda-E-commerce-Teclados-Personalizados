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
  carrito$: Observable<CarritoFront[]>;

  constructor(
    private servicios: GatewayServiciosService,
    private toastController: ToastController
  ) {
    this.carrito$ = this.servicios.carrito$;
  }

  ngOnInit() {
    this.servicios.obtenerCarrito().subscribe({
      next: (carrito) => {
        console.log('Carrito cargado exitosamente:', carrito);
      },
      error: (err) => {
        console.error('Error al cargar el carrito al iniciar la página:', err);
        this.presentToast('No se pudo cargar el carrito. Inténtelo de nuevo más tarde.', 'danger');
      }
    });
  }

  async manejarProductoEliminado(idProducto: number) {
    const currentCarrito = await firstValueFrom(this.carrito$);
    const productInCart = currentCarrito.find(p => p.idProducto === idProducto);
    const nombre = productInCart?.nameProducto || `producto con ID ${idProducto}`;

    this.presentToast(`"${nombre}" ha sido eliminado del carrito.`, 'danger');
  }

  async manejarProductoActualizado(event: { idProducto: number, cantidad: number, total: number }) {
    const currentCarrito = await firstValueFrom(this.carrito$);
    const productInCart = currentCarrito.find(p => p.idProducto === event.idProducto);
    const nombre = productInCart?.nameProducto || `producto con ID ${event.idProducto}`;

    this.presentToast(
      `"${nombre}" actualizado: ${event.cantidad} unidades, total $${event.total.toFixed(2)}.`,
      'primary'
    );
  }

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
