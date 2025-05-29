import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  cart, 
  logIn
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BarraBuscarComponent } from '../../componets/barra-buscar/barra-buscar.component';

@Component({
  selector: 'app-header', // Este es el selector que debes usar
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonIcon,
    BarraBuscarComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {

  idUsuario : number = 0; //constante para pruebas
  constructor() { 
    addIcons({ 
      cart, 
      logIn
    });
  }

  onSearch(query: string) {
    console.log('Buscando:', query);
  }

  ngOnInit() {}

}
