import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { SelectableListComponent } from '../../componets/lista-seleccion/lista-seleccion.component';
import { ListaVentasComponent } from 'src/app/componets/lista-ventas/lista-ventas.component';
import { ListaComentariosComponent} from '../../componets/lista-comentarios/lista-comentarios.component'
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { PerfilComponent } from 'src/app/componets/perfil/perfil.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
  standalone: true,
  imports: [IonIcon,  
    IonContent, 
    CommonModule, 
    FormsModule,
    HeaderComponent, 
    SelectableListComponent,
    PerfilComponent,
    FooterComponent
  ]
})
export class PerfilUsuarioPage {

  idUser: Number = 0;

  listItems = [
    { id: 1, name: 'Perfil', component: PerfilComponent },
    { id: 2, name: 'Historial de compras', component: ListaVentasComponent },
    { id: 3, name: 'Tus Comentarios', component: ListaComentariosComponent }
  ];;
  
  selectedId: number | null = null;
  currentComponent: any = null
  

  constructor(private servicio: GatewayServiciosService) {
    this.idUser = this.servicio.getIdUser();
  }

  getComponentInputs(): any {
    return { id: this.idUser, padre: 'perfil'};
  }

  onItemSelected(itemId: number) {
    const selectedItem = this.listItems.find(item => item.id === itemId);
    this.selectedId = itemId;
    this.currentComponent = selectedItem?.component || null;
  }
}
