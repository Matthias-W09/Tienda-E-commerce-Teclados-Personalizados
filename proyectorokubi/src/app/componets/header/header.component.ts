import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  cart, 
  logIn,
  logOut
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BarraBuscarComponent } from '../../componets/barra-buscar/barra-buscar.component';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';

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
  private subs = new Subscription();
  usuario: any | null = null;

  constructor(    
    private servicio: GatewayServiciosService,
  ) { 
    addIcons({ 
      cart, 
      logIn,
      logOut
    });
  }

  onSearch(query: string) {
    console.log('Buscando:', query);
  }

  ngOnInit() {
    this.subs.add(
      this.servicio.usuario$.subscribe(u => {
        this.usuario = u;
      })
    );
  }

  get ruta(){
    return this.servicio.rutaUsuario();
  }

  desloguear() {
    this.servicio.logoutUsuario();
  }
}
