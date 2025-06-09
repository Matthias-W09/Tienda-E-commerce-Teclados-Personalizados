import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonIcon
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { SelectableListComponent } from '../../componets/lista-seleccion/lista-seleccion.component';
import { FormDinamicaComponent } from '../../componets/form-dinamica/form-dinamica.component';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
  standalone: true,
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
export class PerfilUsuarioPage {
  listItems = [
    { id: 1, name: 'Perfil', formType: 'producto' },
    { id: 2, name: 'Historial de compras', formType: 'promocion' },
    { id: 3, name: 'Tus Comentarios', formType: 'combo' }
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
        console.log("Perfil")
        break;
      case 'promocion':
        console.log("Ventas")
        break;
    }
  }
}
