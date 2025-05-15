import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { ProductCardComponent } from '../../componets/carta-dinamica/carta-dinamica.component';
import { SelectableListComponent } from '../../componets/lista-seleccion/lista-seleccion.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productos-principal',
  templateUrl: './productos-principal.page.html',
  styleUrls: ['./productos-principal.page.scss'],
  standalone: true,
  imports: [IonCardContent, 
    IonContent, HeaderComponent,FooterComponent, 
    ProductCardComponent, CommonModule, FormsModule,
    SelectableListComponent]
})
export class ProductosPrincipalPage implements OnInit {

  listItems = [
    {
      id: 0,
      name: 'Todos',
    },
    {
      id: 1 ,
      name: 'KeyCaps',
    },
    {
      id: 2 ,
      name: 'Switches',
    },
    {
      id: 3 ,
      name: 'Marco',
    }
  ];
  products = [
    {
      name: 'KeyCaps Blancas',
      image: 'assets/images/producto1.jpg',
      altText: 'Teclas para teclados',
      precio: '$10.00'
    },
    {

      name: 'KeyCaps Negras',
      image: 'assets/images/producto2.jpeg',
      altText: 'Switches para teclados',
      precio: '$10.00'
    },
    {
      name: 'KeyCaps Rojas',
      image: 'assets/images/producto3.jpg',
      altText: 'Marco para teclados',
      precio: '$10.00'
    },
    {
      name: 'KeyCaps Azules',
      image: 'assets/images/producto3.jpg',
      altText: 'Marco para teclados',
      precio: '$10.00'
    },
    {
      name: 'KeyCaps Verdes',
      image: 'assets/images/producto3.jpg',
      altText: 'Marco para teclados',
      precio: '$10.00'
    }
  ];

  selectedId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  onItemSelected(itemId: number) {
    const selectedItem = this.listItems.find(item => item.id === itemId);
    this.selectedId = itemId;
  }

  ngOnInit() {
    // Recuperar el título del estado de navegación
    this.route.queryParams.subscribe(params => {
      const receivedTitle = params['title'];

    // Buscar el título en listItems y asignar selectedId
      if (receivedTitle) {
        const foundItem = this.listItems.find(item => 
          item.name.toLowerCase() === receivedTitle.toLowerCase()
        );
        
        if (foundItem) {
          this.selectedId = foundItem.id;
        } else {
          console.warn(`El título "${receivedTitle}" no existe en listItems.`);
          this.selectedId = 0;
        }
      }
   });
  }
}
