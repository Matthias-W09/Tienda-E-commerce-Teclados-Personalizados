import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComentarioComponent } from '../../componets/carta-comentario/carta-comentario.component'
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';


@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.scss'],
  standalone: true,
  imports:[
    CartaComentarioComponent,
    CommonModule
  ]
})
export class ListaComentariosComponent  implements OnInit {

  @Input() id: number = 0;
  @Input() padre: string = '';

  comentarios: any[] = [];

  constructor(private comentariosService: GatewayServiciosService) { }

  ngOnInit() {
    if (!this.validarInputs()) {
      return;
    }

    if (this.padre === 'perfil') {
      this.cargarComentariosDeUsuario();
    } else {
      this.cargarComentariosDeProducto();
    }
  }

  private validarInputs(): boolean {
    if (this.id === 0) {
      console.warn('ID inválido');
      return false;
    }

    if (this.padre === '' || this.padre !== 'perfil' && this.padre !== 'producto') {
      console.warn('Padre inválido');
      return false;
    }

    return true;
  }

  private cargarComentariosDeProducto() {
    this.comentariosService.obtenerComentariosPorProducto(this.id).subscribe({
      next: (comentarios) => {
        this.comentarios = comentarios;
        console.log('Comentarios por producto cargados:', this.comentarios);
      },
      error: (err) => {
        console.error('Error al cargar comentarios por producto:', err);
      }
    });
  }

  private cargarComentariosDeUsuario() {
    this.comentariosService.obtenerComentariosPorUsuario(this.id).subscribe({
      next: (comentarios) => {
        this.comentarios = comentarios;
        console.log('Comentarios por usuario cargados:', this.comentarios);
      },
      error: (err) => {
        console.error('Error al cargar comentarios por usuario:', err);
      }
    });
  }
}
