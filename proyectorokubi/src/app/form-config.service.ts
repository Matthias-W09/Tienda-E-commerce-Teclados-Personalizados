import { Injectable } from '@angular/core';
import { FormField } from './form-field.interface';

@Injectable({ providedIn: 'root' })
export class FormConfigService {
  private formConfigs: { [key: string]: FormField[] } = {
    producto: [
      { name: 'nombre', label: 'Nombre', type: 'text', required: true },
      { name: 'codigo', label: 'Codigo', type: 'text', required: true },
      { name: 'precio', label: 'Precio', type: 'number', required: true },
      { name: 'descripcion', label: 'Descripción', type: 'textarea'},
      { name: 'stock', label: 'Stock', type: 'number'},
      { name: 'categoria', label: 'Categoria', type: 'textarea', required: true },
      { name: 'compatibilidades', label: 'Compatibilidades', type: 'textarea'},
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
