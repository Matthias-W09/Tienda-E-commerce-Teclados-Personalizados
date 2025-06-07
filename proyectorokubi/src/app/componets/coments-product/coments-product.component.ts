import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartaComentarioComponent } from '../../componets/carta-comentario/carta-comentario.component'
import {GatewayServiciosService} from '../../services/gatewayServicios/gateway-servicios.service';
import { IonTitle, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-coments-product',
  templateUrl: './coments-product.component.html',
  styleUrls: ['./coments-product.component.scss'],
  standalone: true,
  providers: [
    GatewayServiciosService
  ],
  imports: [
    IonTitle,
    IonInput,
    CommonModule,
    CartaComentarioComponent
  ]
})
export class ComentsProductComponent  implements OnInit {

  @Input() id: number = 0;
  
  comentarios: any[] = [];

  constructor(private comentariosService: GatewayServiciosService) { }

  ngOnInit() {
    if (!isNaN(this.id)) {
    this.comentariosService.obtenerComentariosPorProducto(this.id).subscribe({
      next: (comentarios) => {
        this.comentarios = comentarios;
        console.log('comentarios cargado:', this.comentarios);
      },
      error: (err) => {
        console.error('Error al cargar comentarios:', err);
      }
    });
  } else {
    console.warn('ID de producto inválido');
  }
  }

}
