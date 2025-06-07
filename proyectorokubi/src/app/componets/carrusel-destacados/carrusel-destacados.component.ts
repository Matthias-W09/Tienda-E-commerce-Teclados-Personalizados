import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartaDestacadosComponent } from '../../componets/carta-destacado/carta-destacado.component';
import {GatewayServiciosService} from '../../services/gatewayServicios/gateway-servicios.service';
import { IonTitle } from '@ionic/angular/standalone';
import { ProductoService } from 'src/app/services/productos/producto-service.service';

@Component({
  selector: 'app-carrusel-destacados',
  templateUrl: './carrusel-destacados.component.html',
  styleUrls: ['./carrusel-destacados.component.scss'],
  standalone: true,
  providers: [
    GatewayServiciosService,
    ProductoService
  ],
  imports: [
    IonTitle,
    CommonModule,
    CartaDestacadosComponent
  ]
})
export class CarruselDestacadosComponent implements OnInit {

  destacados: any[] = [];

  constructor(private destacadosService: GatewayServiciosService) { }

  ngOnInit() {
    this.cargarDestacados();
  }

  cargarDestacados() {
    this.destacadosService.obtenerDestacados().subscribe({
      next: (data) => {
        this.destacados = data;
      },
      error: (err) => {
        console.error('Error al cargar destacados:', err);
        // Puedes manejar el error aquí, por ejemplo:
        this.destacados = []; // O algún array por defecto
      }
    });
  }

  cardWidth = 320 + 24; // 300px width + 1.5rem (~24px) gap
  visibleCards = 5;
  currentIndex = 0;

  get maxIndex(): number {
    return Math.max(0, this.destacados.length - this.visibleCards);
  }

  get currentOffset(): number {
    return this.currentIndex * this.cardWidth;
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}