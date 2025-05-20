import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-carta-destacado',
  templateUrl: './carta-destacado.component.html',
  styleUrls: ['./carta-destacado.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    RouterModule
  ]
})
export class CartaDestacadosComponent{

  @Input() urlPage!: string;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() altText?: string;
  
}
