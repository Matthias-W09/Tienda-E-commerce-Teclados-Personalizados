import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg, IonCardSubtitle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { ProductCardComponent } from '../../componets/carta-dinamica/carta-dinamica.component';
import { addIcons } from 'ionicons';
import { logoFacebook, logoTwitter, logoInstagram, logoYoutube } from 'ionicons/icons';
import { ProductoService } from '../../services/productos/producto-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, 
    IonContent, 
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    CommonModule, 
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class LandingPage implements OnInit {

  styles = [
    {
      name: 'Asiatica',
      image: 'assets/images/style1.jpg'
    },
    {
      name: 'SteamPunk',
      image: 'assets/images/style2.jpg'
    }
  ];

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

  socialIcons = ['logoFacebook', 'logoTwitter', 'logoInstagram', 'logoYoutube'];
  categorias: any[] = [];

  constructor(private productoService: ProductoService) {
    addIcons({ logoFacebook, logoTwitter, logoInstagram, logoYoutube });
  }

  ngOnInit() {
    this.categorias = this.productoService.getCategorias();
  }
}
