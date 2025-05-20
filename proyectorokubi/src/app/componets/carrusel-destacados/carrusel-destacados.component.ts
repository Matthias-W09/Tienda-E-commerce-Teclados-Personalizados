import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaDestacadosComponent } from '../../componets/carta-destacado/carta-destacado.component';
import { ProductoService } from '../../services/productos/producto-service.service';
import { IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-carrusel-destacados',
  templateUrl: './carrusel-destacados.component.html',
  styleUrls: ['./carrusel-destacados.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    CommonModule,
    CartaDestacadosComponent
  ]
})
export class CarruselDestacadosComponent  implements OnInit {

  destacados: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.destacados = this.productoService.getDestacados();
  }
}
