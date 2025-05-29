import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent} from '../../componets/carta-dinamica/carta-dinamica.component';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { IonGrid, IonButton, IonIcon} from '@ionic/angular/standalone';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-carrusel-cartas',
  templateUrl: './carrusel-cartas.component.html',
  styleUrls: ['./carrusel-cartas.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonButton,
    IonIcon,
    CommonModule,
    ProductCardComponent
  ]
})
export class CarruselCartasComponent  implements OnInit {
  
  categorias: any[] = [];

  constructor(private servicios: GatewayServiciosService){}
  
  ngOnInit() {
    this.categorias = this.servicios.obtenerCategorias();
    setInterval(() => this.next(), 5000);
  }

  cardWidth = 300 + 24; // 300px card + 24px approx gap
  visibleCards = 4;
  currentIndex = 0;

  get maxIndex(): number {
    return Math.max(0, this.categorias.length - this.visibleCards);
  }

  get currentOffset(): number {
    return this.currentIndex * this.cardWidth;
  }

  next() {
    if (this.currentIndex === this.maxIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }
  prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.maxIndex;
    } else {
      this.currentIndex--;
    }
  }

}
