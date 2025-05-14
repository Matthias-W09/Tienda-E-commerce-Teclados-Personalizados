import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../componets/carta-dinamica/carta-dinamica.component';
import { IonGrid, IonButton, IonIcon} from '@ionic/angular/standalone';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-carrusel-cartas',
  templateUrl: './carrusel-cartas.component.html',
  styleUrls: ['./carrusel-cartas.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonButton,
    IonIcon,
    ProductCardComponent]
})
export class CarruselCartasComponent  implements OnInit {
  products = [
    {
      name: 'KeyCaps',
      image: 'assets/images/product1.jpg',
      description: 'Son las tapas de las teclas. La parte que tocas con los dedos, normalmente con letras, números o símbolos impresos.',
      altText: 'Teclas para teclados'
    },
    {

      name: 'Switches',
      image: 'assets/images/product2.jpg',
      description: 'Detectan la pulsación y determinan la sensación (clicky, suave, etc.) y la respuesta del teclado.',
      altText: 'Switches para teclados'
    },
    {
      name: 'Marco',
      image: 'assets/images/product3.jpg',
      description: 'Es la estructura externa del teclado. Sostiene todas las partes internas y le da forma, estabilidad y estética al teclado.',
      altText: 'Marco para teclados'
    }
  ];

  constructor() { }

  scrollLeft() {
    const container = document.getElementById('cards-container');
    container!.scrollLeft -= 300; // mueve 300px a la izquierda
  }
  
  scrollRight() {
    const container = document.getElementById('cards-container');
    container!.scrollLeft += 300; // mueve 300px a la derecha
  }

  ngOnInit() {
    console.log('Products:', this.products); // Deberías ver el array en consola
  }
}
