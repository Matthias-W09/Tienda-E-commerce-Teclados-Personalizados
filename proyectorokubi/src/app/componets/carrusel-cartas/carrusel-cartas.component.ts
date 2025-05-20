import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../componets/carta-dinamica/carta-dinamica.component';
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
    ProductCardComponent]
})
export class CarruselCartasComponent  implements OnInit {
  
  @Input() categorias: any[] = [];
  
  ngOnInit() {
    setInterval(() => this.next(), 5000);
  }

  currentIndex = 2; // Índice central inicial
  offset = 0;
  cardWidth = 280; // Mismo valor que en SCSS
  gap = 24; // Mismo valor que en SCSS

  get cards() {
    const arr = this.categorias;
    return [...arr.slice(-2), ...arr, ...arr.slice(0, 2)];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.categorias.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.categorias.length) % this.categorias.length;
  }
}
