import { Component, OnInit, Input} from '@angular/core';
import { 
  IonCard, 
  IonCardContent,
  IonTitle,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-carta-ventas',
  templateUrl: './carta-ventas.component.html',
  styleUrls: ['./carta-ventas.component.scss'],
  standalone: true,
  imports:[
    IonCard, 
    IonCardContent,
    IonTitle,
    IonText
  ]
})
export class CartaVentasComponent  implements OnInit {

  @Input() fecha: Date | null = null
  @Input() total: Number | null = null

  constructor() { }

  ngOnInit() {}

}
