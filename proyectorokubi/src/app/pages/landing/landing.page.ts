import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { CarruselDestacadosComponent } from '../../componets/carrusel-destacados/carrusel-destacados.component';
import { CarruselCartasComponent } from '../../componets/carrusel-cartas/carrusel-cartas.component';
import { SeccionArmarComponent } from '../../componets/seccion-armar/seccion-armar.component';
import { SeccionEstilosComponent } from '../../componets/seccion-estilos/seccion-estilos.component';
import { SeccionComentariosComponent } from '../../componets/seccion-comentarios/seccion-comentarios.component';
import { ProductoService } from '../../services/productos/producto-service.service';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule, 
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    CarruselCartasComponent,
    CarruselDestacadosComponent,
    SeccionArmarComponent,
    SeccionEstilosComponent,
    SeccionComentariosComponent,
  ]
})
export class LandingPage implements OnInit {

  reviews = [
    {
      text: 'Más que un teclado, una sensación',
      name: 'Ben Dover',
      rating: '5 Estrellas',
      avatar: 'assets/images/avatar1.jpg'
    },
    {
      text: 'Una locura estos switches, nunca había sentido algo asi',
      name: 'Anita Dick',
      rating: '4.5 Estrellas',
      avatar: 'assets/images/avatar2.jpg'
    },
    {
      text: 'Teclado bueno, le encantó a mi nieto',
      name: 'Dixon Mayas',
      rating: '5 Estrellas',
      avatar: 'assets/images/avatar3.jpg'
    }
  ];

  categorias: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.categorias = this.productoService.getCategorias();
  }
}
