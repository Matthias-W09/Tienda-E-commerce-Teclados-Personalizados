import { Injectable } from '@angular/core';
import { FormField } from './form-field.interface';

@Injectable({ providedIn: 'root' })
export class FormConfigService {
  private formConfigs: { [key: string]: FormField[] } = {
    producto: [
      { name: 'nombre', label: 'Nombre', type: 'text', required: true },
      { name: 'precio', label: 'Precio', type: 'number', required: true },
      { name: 'descripcion', label: 'Descripción', type: 'textarea' }
    ],
    promocion: [
      { name: 'codigo', label: 'Código', type: 'text', required: true },
      { name: 'descuento', label: 'Descuento (%)', type: 'number' },
      { name: 'validoHasta', label: 'Válido hasta', type: 'date' }
    ],
    combo: [
      { name: 'nombreCombo', label: 'Nombre del Combo', type: 'text' },
      { name: 'productosIncluidos', label: 'Productos', type: 'text' },
      { name: 'precioCombo', label: 'Precio especial', type: 'number' }
    ],
    // ... otras configuraciones
  };

  getFormConfig(formType: string): FormField[] {
    return this.formConfigs[formType] || [];
  }
}