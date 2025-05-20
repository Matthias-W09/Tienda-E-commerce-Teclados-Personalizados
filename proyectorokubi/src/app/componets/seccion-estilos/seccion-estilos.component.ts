import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaDestacadosComponent } from '../../componets/carta-destacado/carta-destacado.component';
import { IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seccion-estilos',
  templateUrl: './seccion-estilos.component.html',
  styleUrls: ['./seccion-estilos.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    CommonModule,
    CartaDestacadosComponent
  ]
})
export class SeccionEstilosComponent  implements OnInit {

  styles = [
    {
      id: 0,
      name: 'Asiatica',
      image: 'assets/images/EstiloAsiatico.jpg',
      altText: 'Asiatica'
    },
    {
      id:1,
      name: 'SteamPunk',
      image: 'assets/images/EstiloCyberPunk.png',
      altText: 'Steampunk'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
