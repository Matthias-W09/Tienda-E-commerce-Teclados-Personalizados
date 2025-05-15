import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  IonCard, 
  IonCardContent, 
  IonCardTitle, 
  IonText,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './carta-dinamica.component.html',
  styleUrls: ['./carta-dinamica.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardTitle, IonText, CommonModule ,RouterModule]
})

export class ProductCardComponent {
  
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Input() altText: string = '';
  @Input() showDescription: boolean = false;
  @Input() precio: string = '';
}

