import { Component } from '@angular/core';
import { 
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  logoFacebook, 
  logoInstagram, 
  logoTwitter,
  logoWhatsapp,
  mailOutline,
  callOutline
} from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonIcon,
    RouterModule
  ]
})

export class FooterComponent  {
  constructor() {
    addIcons({ 
      logoFacebook, 
      logoInstagram, 
      logoTwitter,
      logoWhatsapp,
      mailOutline,
      callOutline
    });
  }
}
