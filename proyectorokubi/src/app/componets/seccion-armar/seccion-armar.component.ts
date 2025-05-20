import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-seccion-armar',
  templateUrl: './seccion-armar.component.html',
  styleUrls: ['./seccion-armar.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonButton,
    RouterModule
  ]
})
export class SeccionArmarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
