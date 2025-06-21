import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaVentasComponent } from '../carta-ventas/carta-ventas.component';
import { GatewayServiciosService } from 'src/app/services/gatewayServicios/gateway-servicios.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    CartaVentasComponent
  ]
})
export class ListaVentasComponent  implements OnInit {

  @Input() id: number = 0;
  @Input() padre: String = '';

  ventas: any[] = [];

  constructor(private ventasService: GatewayServiciosService) { }

  ngOnInit() {
    if (!this.validarInputs()) {
      return;
    }

    if (this.padre === 'perfil') {
      this.cargarComprasUsuario();
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

  private cargarComprasUsuario() {
    this.ventasService.comprasDelUser(this.id).subscribe({
      next: (comentarios) => {
        this.ventas = comentarios;
        console.log('Comentarios por producto cargados:', this.ventas);
      },
      error: (err) => {
        console.error('Error al cargar comentarios por producto:', err);
      }
    });
  }
}
