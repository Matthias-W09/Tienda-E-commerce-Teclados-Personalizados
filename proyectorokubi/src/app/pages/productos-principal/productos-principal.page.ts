import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { ProductCardComponent } from '../../componets/carta-dinamica/carta-dinamica.component';
import { SelectableListComponent } from '../../componets/lista-seleccion/lista-seleccion.component';
import { ActivatedRoute } from '@angular/router';
import {GatewayServiciosService} from '../../services/gatewayServicios/gateway-servicios.service';

@Component({
  selector: 'app-productos-principal',
  templateUrl: './productos-principal.page.html',
  styleUrls: ['./productos-principal.page.scss'],
  standalone: true,
  providers: [
    GatewayServiciosService
  ],
  imports: [ 
    IonContent, 
    HeaderComponent,
    FooterComponent, 
    ProductCardComponent, 
    CommonModule, 
    FormsModule,
    SelectableListComponent,
  ]
})
export class ProductosPrincipalPage implements OnInit {

  selectedId: number = 0;
  productos: any[] = [];
  categorias: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productoService: GatewayServiciosService
  ) {}

  onItemSelected(itemId: number) {
    this.selectedId = itemId;
    this.cargarProductosPorCategoria(itemId);
  }

  cargarProductosPorCategoria(categoriaId: number) {
    this.productoService.obtenerPorCategoria(categoriaId).subscribe(productos => {
      this.productos = productos;
    });
  }

  ngOnInit() {
  this.productoService.obtenerCategorias$().subscribe(categorias => {
    this.categorias = categorias;

    const receivedTitle = this.route.snapshot.queryParams['title'];
    if (receivedTitle) {
      const foundItem = this.categorias.find(item =>
        item.name.toLowerCase() === receivedTitle.toLowerCase()
      );

      if (foundItem) {
        this.selectedId = foundItem.id;
      } else {
        console.warn(`El título "${receivedTitle}" no existe en categorías.`);
        this.selectedId = 0;
      }
    }

    this.cargarProductosPorCategoria(this.selectedId);
  });
}
}

