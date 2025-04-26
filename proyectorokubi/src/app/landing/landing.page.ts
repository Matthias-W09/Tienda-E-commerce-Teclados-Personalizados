import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { 
  IonContent, 
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonImg, IonCardSubtitle } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from 'ionicons';
import { logoFacebook, logoTwitter, logoInstagram, logoYoutube } from 'ionicons/icons';

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
    IonText,
    CommonModule, 
    FormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class LandingPage implements OnInit {
  products = [
    {
      name: 'KeyCaps',
      image: 'assets/images/product1.jpg',
      description: 'Son las tapas de las teclas. La parte que tocas con los dedos, normalmente con letras, números o símbolos impresos.'
    },
    {
      name: 'Switches',
      image: 'assets/images/product2.jpg',
      description: 'Detectan la pulsación y determinan la sensación (clicky, suave, etc.) y la respuesta del teclado.'
    },
    {
      name: 'Marco',
      image: 'assets/images/product3.jpg',
      description: 'Es la estructura externa del teclado. Sostiene todas las partes internas y le da forma, estabilidad y estética al teclado.'
    }
  ];

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

  constructor() {
    addIcons({ logoFacebook, logoTwitter, logoInstagram, logoYoutube });
  }

  ngOnInit() {
  }
}
