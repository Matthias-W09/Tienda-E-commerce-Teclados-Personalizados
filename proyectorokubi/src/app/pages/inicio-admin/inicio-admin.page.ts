import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { SelectableListComponent } from '../../componets/lista-seleccion/lista-seleccion.component';
import { FormDinamicaComponent } from '../../componets/form-dinamica/form-dinamica.component';
import {GatewayServiciosService} from '../../services/gatewayServicios/gateway-servicios.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
  standalone: true,
  providers: [
    GatewayServiciosService
  ],
  imports: [ 
    IonContent, 
    CommonModule, 
    FormsModule, 
    IonIcon,
    HeaderComponent, 
    SelectableListComponent, 
    FooterComponent, 
    FormDinamicaComponent
  ]
})
export class InicioAdminPage {
  listItems = [
    { id: 1, name: 'Agregar Producto', formType: 'producto' },
    { id: 2, name: 'Generar código promocional', formType: 'promocion' },
    { id: 3, name: 'Generar descuentos/combos', formType: 'combo' },
    { id: 4, name: 'Administrar productos', formType: 'admin-producto' },
    { id: 5, name: 'Administrar promociones', formType: 'admin-promocion' },
  ];
  
  selectedId: number | null = null;
  currentFormType: string | null = null;
  formData: any = {};

  constructor(public servicio: GatewayServiciosService) {}

  onItemSelected(itemId: number) {
    const selectedItem = this.listItems.find(item => item.id === itemId);
    this.selectedId = itemId;
    this.currentFormType = selectedItem?.formType || null;
    this.formData = {}; 
  }

  onFormSubmit(formData: any) {
    console.log('Datos enviados:', formData);
    switch(this.currentFormType) {
      case 'producto':
        this.guardarProducto(formData);
        break;
      case 'promocion':
        this.guardarPromocion(formData);
        break;
    }
  }

  private guardarProducto(data: any) {
    const producto = {
      name: data.nombre,
      categoria: data.categoria,
      descripcion: data.descripcion,
      stock: data.stock,
      precio: data.precio,
    };

    this.servicio.nuevoProducto(producto).subscribe({
      next: (respuesta) => {
        console.log('Producto guardado correctamente:', respuesta);
      },
      error: (error) => {
        console.error('Error al guardar el producto:', error);
      }
    });
  }

  private guardarPromocion(promocion: any) {
    console.log('Guardando promoción:', promocion);
  }
}
