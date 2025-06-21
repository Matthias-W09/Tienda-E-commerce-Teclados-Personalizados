import { Component, Input} from '@angular/core';
import { ListaComentariosComponent } from '../../componets/lista-comentarios/lista-comentarios.component'
import { IonTitle, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-coments-product',
  templateUrl: './coments-product.component.html',
  styleUrls: ['./coments-product.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonInput,
    ListaComentariosComponent
  ]
})
export class ComentsProductComponent{

  @Input() id: number = 0;

  constructor( ) { }
}
