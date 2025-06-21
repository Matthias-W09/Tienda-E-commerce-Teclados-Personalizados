import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { 
  IonAvatar, 
  IonContent, 
  IonText, 
  IonTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  standalone: true,
  imports:[
    IonContent,
    IonAvatar,
    IonTitle,
    IonText
  ]
})
export class PerfilComponent  implements OnInit {

  @Input() id: number = 0;
  @Input() padre: string = '';

  datosUsuario?: any;
  private destroy$ = new Subject<void>();

  private getDatosUsuario() {
    this.servicio.obtenerDatosUser(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (usuario) => {
          this.datosUsuario = usuario;
        },
        error: (err) => {
          console.error('Error al obtener datos del usuario:', err);
          // Aquí podrías mostrar un mensaje al usuario
        }
      });
  }

  constructor(private servicio: GatewayServiciosService) { }

  ngOnInit() {
    this.getDatosUsuario();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
