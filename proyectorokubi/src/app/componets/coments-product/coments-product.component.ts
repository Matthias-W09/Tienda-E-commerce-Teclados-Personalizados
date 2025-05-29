import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComentarioComponent } from '../../componets/carta-comentario/carta-comentario.component'
import {GatewayServiciosService} from '../../services/gatewayServicios/gateway-servicios.service';
import { IonTitle, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-coments-product',
  templateUrl: './coments-product.component.html',
  styleUrls: ['./coments-product.component.scss'],
  standalone: true,
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
    this.comentarios = this.comentariosService.obtenerComentariosPorProducto(this.id);
  }

}
