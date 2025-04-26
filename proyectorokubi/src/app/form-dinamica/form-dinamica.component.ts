import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton,
  IonNote 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { FormField, FieldType } from '../form-field.interface';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonList, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton,
    IonNote
  ],
  templateUrl: './form-dinamica.component.html',
  styleUrls: ['./form-dinamica.component.scss']
})
export class FormDinamicaComponent {
  @Input() fields: FormField[] = [];
  @Input() submitButtonText: string = 'Enviar';
  @Input() buttonColor: string = '#F85021';
  @Output() formSubmit = new EventEmitter<any>();

  formData: any = {};

  ngOnInit() {
    // Inicializar formData con valores vacíos o predeterminados
    this.fields.forEach(field => {
      this.formData[field.name] = field.value || '';
    });
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.formSubmit.emit(this.formData);
    }
  }

  private isFormValid(): boolean {
    return this.fields.every(field => {
      if (field.required && !this.formData[field.name]) {
        return false;
      }
      return true;
    });
  }
}
