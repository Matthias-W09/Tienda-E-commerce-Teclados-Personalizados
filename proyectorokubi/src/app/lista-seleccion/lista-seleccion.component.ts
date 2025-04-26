import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './lista-seleccion.component.html',
  styleUrls: ['./lista-seleccion.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class SelectableListComponent {
  @Input() items: {id: number, name: string}[] = [];
  @Input() selectedItemId: number | null = null;
  @Output() itemSelected = new EventEmitter<number>();

  selectItem(itemId: number) {
    this.selectedItemId = itemId;
    this.itemSelected.emit(itemId);
  }
}
