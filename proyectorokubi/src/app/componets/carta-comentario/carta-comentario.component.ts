import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
    IonLabel,
    RouterModule
  ]
})
export class CartaComentarioComponent{

  @Input() producName: string = '';
  @Input() texto: string = '';
  @Input() avatarUrl: string = '';
  @Input() name: string = '';
  @Input() valoracion: number = 0;
  @Input() idProducto: number = 0;

  urlPage: string = '';
  ngOnInit(): void {
    this.urlPage = `/detalle-producto/${this.idProducto}`;
  }
}