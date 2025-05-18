import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
  IonContent, 
  IonTitle, 
  IonImg, 
  IonText,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { ProductoService } from '../../services/productos/producto-service.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonTitle, 
    IonImg, 
    IonText,
    HeaderComponent, 
    FooterComponent]
})
export class DetalleProductoPage implements OnInit {

  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id)) {
      this.producto = this.productoService.getProductoPorId(id);
    } else {
      console.warn('ID de producto inválido');
    }
  }
}

