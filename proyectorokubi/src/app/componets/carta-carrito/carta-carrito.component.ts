import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { RouterModule } from '@angular/router';
import {GatewayServiciosService} from '../../services/gatewayServicios/gateway-servicios.service';
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
  imports: [
    IonCard,
    IonCardContent,
    IonTitle,
    IonText,
    IonImg,
    IonButton,
    IonIcon,
    RouterModule,
  ]
})
export class CartaCarritoComponent implements OnInit{

  @Input() productoID: number = 0;
  @Input() unidadesProducto: number = 0;
  @Input() totalProducto: number = 0;
  @Output() productoEliminado = new EventEmitter<number>();
  @Output() productoActualizado = new EventEmitter<{ idProducto: number, cantidad: number, total: number }>();

  producto: any;

  constructor(private servicios: GatewayServiciosService) {
    addIcons({ 
      add,
      remove
    });
  }

  ngOnInit() {
    this.producto = this.servicios.obtenerProductoPorId(this.productoID);
  }

  borrarProductoCart() {
    this.servicios.eliminarProductoDelCarrito(this.productoID);
    this.productoEliminado.emit(this.productoID);
  }
  actualizarCarrito() {
    this.servicios.updateProductoEnCarrito(this.productoID, this.unidadesProducto, this.totalProducto);
    this.productoActualizado.emit({
      idProducto: this.productoID,
      cantidad: this.unidadesProducto,
      total: this.totalProducto
    });
  }

  sumar(){
    if (this.unidadesProducto < this.producto.stock) {
      this.unidadesProducto++;
      this.calculoTotal()
      this.actualizarCarrito();
    }
  }

  restar(){
    if (this.unidadesProducto > 0) {
      this.unidadesProducto--;
      this.calculoTotal()
      this.actualizarCarrito();
    }
  }

  calculoTotal(){
    this.totalProducto = parseFloat(this.producto.precio) * this.unidadesProducto
  }

}
