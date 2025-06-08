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

  tof: boolean = false; // Variable para verificar si el usuario está logueado
  ruta: string = ''; // Ruta a la que se redirigirá al usuario

  idUsuario : number = 0; //constante para pruebas
  constructor(    
    private servicio: GatewayServiciosService,
    private router: Router
  ) { 
    addIcons({ 
      cart, 
      logIn
    });
  }

  onSearch(query: string) {
    console.log('Buscando:', query);
  }

  ngOnInit() {
    // Verificamos si el usuario está logueado al iniciar el componente
    this.tof = this.servicio.estaLogueado();
    this.accionSegunLogin();
  }

  accionSegunLogin() {
  if (this.tof) {
    this.ruta = '/inicio-admin';
  } else {
    this.ruta = '/inicio-sesion';
  }
}

  desloguear() {
    this.servicio.logoutUsuario();
    this.tof = false; // Actualizamos el estado de logueo
    this.accionSegunLogin(); // Actualizamos la ruta según el estado de logueo
  }

}
