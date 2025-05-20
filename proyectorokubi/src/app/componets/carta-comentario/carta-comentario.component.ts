import { Component, Input } from '@angular/core';
import { 
  IonCard, 
  IonCardContent, 
  IonTitle, 
  IonText, 
  IonItem, 
  IonAvatar, 
  IonLabel 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-carta-comentario',
  templateUrl: './carta-comentario.component.html',
  styleUrls: ['./carta-comentario.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonTitle,
    IonText,
    IonItem,
    IonAvatar,
    IonLabel
  ]
})
export class CartaComentarioComponent{

  @Input() producName: string = '';
  @Input() texto: string = '';
  @Input() avatarUrl: string = '';
  @Input() name: string = '';
  @Input() valoracion: string = '';
}
