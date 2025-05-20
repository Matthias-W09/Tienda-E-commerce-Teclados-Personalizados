import { Component } from '@angular/core';
import { 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    FormsModule,
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class RegistroPage {
}
