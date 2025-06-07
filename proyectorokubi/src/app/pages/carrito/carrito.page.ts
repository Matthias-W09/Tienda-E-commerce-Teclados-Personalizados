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
  carrito$: Observable<any[]>;

  constructor(
    private servicios: GatewayServiciosService,
    private toastController: ToastController
  ) {
    this.carrito$ = this.servicios.carrito$;
  }

  ngOnInit() {}

  async manejarProductoEliminado(idProducto: number) {
    const producto = await this.buscarProductoPorId(idProducto);
    const nombre = producto?.name || `ID ${idProducto}`;

    const toast = await this.toastController.create({
      message: `Producto "${nombre}" ha sido eliminado.`,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });

    await toast.present();
  }

  async manejarProductoActualizado(event: { idProducto: number, cantidad: number, total: number }) {
    const producto = await this.buscarProductoPorId(event.idProducto);
    const nombre = producto?.name || `ID ${event.idProducto}`;

    const toast = await this.toastController.create({
      message: `Producto "${nombre}" actualizado: ${event.cantidad} unidades, total $${event.total.toFixed(2)}.`,
      duration: 3000,
      position: 'bottom',
      color: 'primary',
    });

    await toast.present();
  }

  private async buscarProductoPorId(idProducto: number): Promise<any> {
    return await firstValueFrom(this.servicios.obtenerProductoPorId(idProducto));
  }
}
