import { Injectable } from '@angular/core';
import { FormField } from '../../form-field.interface';

@Injectable({ providedIn: 'root' })
export class FormConfigService {

  private apiUrl = 'http://localhost:3000/api/products';

  private formConfigs: { [key: string]: FormField[] } = {
    producto: [
      { name: 'nombre', label: 'Nombre', type: 'text', required: true },
      { name: 'categoria', label: 'categoria', type:'text', required: true},
      { name: 'descripcion', label: 'Descripción', type: 'textarea'},
      { name: 'stock', label: 'Stock', type: 'number'},
      { name: 'precio', label: 'Precio', type: 'number', required: true }
    ],
    promocion: [
      { name: 'codigo', label: 'Código', type: 'text'},
      { name: 'descuento', label: 'Descuento (%)', type: 'number', required: true},
      { name: 'validoHasta', label: 'Válido hasta', type: 'date', required: true}
    ],
    combo: [
      { name: 'nombreCombo', label: 'Nombre del Combo', type: 'text', required: true},
      { name: 'productosIncluidos', label: 'Productos', type: 'text', required: true},
      { name: 'descuento', label: 'Descuento (%)', type: 'number', required: true}
    ],
  };

  getFormConfig(formType: string): FormField[] {
    return this.formConfigs[formType] || [];
  }
}
