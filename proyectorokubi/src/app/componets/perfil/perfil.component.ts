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
export class PerfilComponent implements OnInit, OnDestroy {

  @Input() id: number = 0;
  @Input() padre: string = '';

  datosUsuario?: any; 
  private destroy$ = new Subject<void>();

  constructor(private servicio: GatewayServiciosService) { }

  ngOnInit() {
    console.log('PerfilComponent ngOnInit:');
    console.log('ID de usuario recibido:', this.id); 
    
    if (this.id > 0) { 
      this.getDatosUsuario();
    } else {
      console.warn('PerfilComponent: ID de usuario inválido o 0. No se cargarán los datos del usuario.');
    }
  }

  private getDatosUsuario() {
    console.log('PerfilComponent: Llamando a obtenerDatosUser para ID:', this.id);
    this.servicio.obtenerDatosUser(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (usuarioArray) => {
          if (usuarioArray && usuarioArray.length > 0) {
            this.datosUsuario = usuarioArray[0];
            console.log('PerfilComponent: Datos de usuario cargados y asignados:', this.datosUsuario); 
          } else {
            console.warn('PerfilComponent: No se encontraron datos para el usuario con ID:', this.id);
            this.datosUsuario = undefined;
          }
        },
        error: (err) => {
          console.error('PerfilComponent: Error al obtener datos del usuario:', err);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
