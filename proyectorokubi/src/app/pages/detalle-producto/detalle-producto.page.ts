import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
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

  producto: any;
  apartados: number = 0;
  total: number = 0;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private servicios: GatewayServiciosService
  ) {
    addIcons({ 
      add,
      remove
    });
  }

  sumar(){
    if (this.apartados < this.producto.stock) {
      this.apartados++;
      this.calculoTotal();
    }
  }

  restar(){
    if (this.apartados > 0) {
      this.apartados--;
      this.calculoTotal();
    }
  }

  calculoTotal(){
    this.total = parseFloat(this.producto.precio) * this.apartados
  }

  agregar(){
    this.servicios.agregarProductoAlCarrito(this.id, this.apartados, this.total)
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('idProducto'));

    if (!isNaN(this.id)) {
      this.producto = this.servicios.obtenerProductoPorId(this.id);
    } else {
      console.warn('ID de producto inválido');
    }
  }
}

