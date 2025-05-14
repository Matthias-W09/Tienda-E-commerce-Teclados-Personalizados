import { Component, Output, EventEmitter } from '@angular/core';
import { 
  IonIcon, 
  IonInput, 
  IonButton,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-barra-buscar',
  templateUrl: './barra-buscar.component.html',
  styleUrls: ['./barra-buscar.component.scss'],
  standalone: true,
    imports: [
      IonIcon, 
      IonInput, 
      IonButton,
      IonItem]
})
export class BarraBuscarComponent {
  searchText: string = '';
  
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(event: any) {
    this.searchText = event.target.value;
    this.searchChange.emit(this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.searchChange.emit('');
  }
}
