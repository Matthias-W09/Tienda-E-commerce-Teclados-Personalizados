import { Component, Input} from '@angular/core';
import { ListaComentariosComponent } from '../../componets/lista-comentarios/lista-comentarios.component'
import { IonTitle, IonInput, IonButton} from '@ionic/angular/standalone';
import { GatewayServiciosService } from 'src/app/services/gatewayServicios/gateway-servicios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coments-product',
  templateUrl: './coments-product.component.html',
  styleUrls: ['./coments-product.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonInput,
    IonButton,
    ListaComentariosComponent,
    FormsModule
  ]
})
export class ComentsProductComponent{

  @Input() id: number = 0;
  nuevoComentario: string = '';

  constructor(private comentariosService: GatewayServiciosService ) { }

  nuevoCommet(){
    if(this.comentariosService.estaLogueado()){
      this.comentariosService.generarNuevoComentario(this.id, this.nuevoComentario);
      console.log("nuevo comentario creado");
      return;
    }
    console.log("deberia estar logeado para poder hacer un comentario");
  }
}
