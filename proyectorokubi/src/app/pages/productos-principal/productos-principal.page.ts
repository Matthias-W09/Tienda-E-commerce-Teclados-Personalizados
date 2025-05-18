import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { ProductCardComponent } from '../../componets/carta-dinamica/carta-dinamica.component';
import { SelectableListComponent } from '../../componets/lista-seleccion/lista-seleccion.component';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/productos/producto-service.service';

@Component({
  selector: 'app-productos-principal',
  templateUrl: './productos-principal.page.html',
  styleUrls: ['./productos-principal.page.scss'],
  standalone: true,
  imports: [
    IonCardContent, 
    IonContent, HeaderComponent,FooterComponent, 
    ProductCardComponent, CommonModule, FormsModule,
    SelectableListComponent
  ]
})
export class ProductosPrincipalPage implements OnInit {

  selectedId: number = 0;
  productos: any[] = [];
  categorias: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  onItemSelected(itemId: number) {
    this.selectedId = itemId;
    this.cargarProductosPorCategoria(itemId);
  }

  cargarProductosPorCategoria(categoriaId: number) {
    this.productos = this.productoService.getProductosPorCategoria(categoriaId);
  }

  ngOnInit() {
    this.categorias = this.productoService.getCategorias();

    this.route.queryParams.subscribe(params => {
      const receivedTitle = params['title'];

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

