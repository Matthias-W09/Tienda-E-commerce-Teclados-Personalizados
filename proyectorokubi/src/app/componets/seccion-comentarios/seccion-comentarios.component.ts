import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartaComentarioComponent } from '../../componets/carta-comentario/carta-comentario.component'
import {GatewayServiciosService} from '../../services/gatewayServicios/gateway-servicios.service';
import { IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seccion-comentarios',
  templateUrl: './seccion-comentarios.component.html',
  styleUrls: ['./seccion-comentarios.component.scss'],
  standalone: true,
    providers: [
      GatewayServiciosService
    ],
  imports: [
    IonTitle,
    CommonModule,
    CartaComentarioComponent
  ]
})
export class SeccionComentariosComponent  implements OnInit {

  comentarios: any[] = [];

  constructor(private comentariosService: GatewayServiciosService) { }

ngOnInit() {
  this.comentariosService.obtenerComentarios().subscribe(data => {
    this.comentarios = data;
    console.log('Categorías cargadas uwu:', this.comentarios);
  });
}
}
