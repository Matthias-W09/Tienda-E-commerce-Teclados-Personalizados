import { Component, Output, EventEmitter } from '@angular/core';
import { 
  IonIcon, 
  IonInput, 
  IonButton,
  IonItem
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search, close } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-buscar',
  templateUrl: './barra-buscar.component.html',
  styleUrls: ['./barra-buscar.component.scss'],
  standalone: true,
    imports: [
      IonIcon, 
      IonInput, 
      IonButton,
      IonItem,
      CommonModule
    ]
})
export class BarraBuscarComponent {
  searchText: string = '';
  
  @Output() searchChange = new EventEmitter<string>();

  constructor() {
    addIcons({search,close});
  }

  onSearchChange(event: any) {
    this.searchText = event.target.value;
    this.searchChange.emit(this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.searchChange.emit('');
  }
}
