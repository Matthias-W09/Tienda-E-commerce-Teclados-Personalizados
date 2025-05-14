import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  IonCard, 
  IonCardContent, 
  IonCardTitle, 
  IonImg, 
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-card',
  templateUrl: './carta-dinamica.component.html',
  styleUrls: ['./carta-dinamica.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardTitle, IonImg, IonText, RouterModule]
})

export class ProductCardComponent {
  
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Input() altText: string = '';
  @Input() showDescription: boolean = false;
}

