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

  }

  get rutaUsuario() {
    if(!this.servicio.estaLogueado()){
      return '/inicio-sesion';
    }
    const rol = this.servicio.rolUsuario();
    if(rol === 0){
      return '/inicio-admin';
    }

    return '/perfil-usuario';
  }

  desloguear() {
    this.servicio.logoutUsuario();
  }
}
