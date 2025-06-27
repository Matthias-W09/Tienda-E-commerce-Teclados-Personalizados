import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { 
  IonContent, 
  IonTitle, 
  IonImg, 
  IonText,
  IonButton,
  IonIcon,
  IonSelect, 
  IonSelectOption,
  IonItem, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  add,
  remove
} from 'ionicons/icons';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';
import { ComentsProductComponent } from '../../componets/coments-product/coments-product.component';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { ToastController } from '@ionic/angular';
import { CurrencyConversionResponse } from '../../services/divisas/divisas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  providers: [
    GatewayServiciosService
  ],
  imports: [
    CommonModule,
    IonContent, 
    IonTitle, 
    IonImg, 
    IonText,
    IonButton,
    IonIcon,
    ComentsProductComponent,
    HeaderComponent, 
    FooterComponent,
    IonSelect, 
    IonSelectOption,
    IonItem, 
    IonLabel 
  ]
})
export class DetalleProductoPage implements OnInit {

  producto: any; 
  apartados: number = 0; 
  total: number = 0; 
  id: number = 0;

  selectedCurrency: string = 'CLP'; 
  convertedPrice: number = 0; 
  availableCurrencies: { code: string; name: string }[] = [
    { code: 'CLP', name: 'Peso Chileno' },
    { code: 'USD', name: 'Dólar Estadounidense' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra Esterlina' },
    { code: 'BRL', name: 'Real Brasileño' }
  ];
  
  constructor(
    private route: ActivatedRoute,
    private servicios: GatewayServiciosService,
    private toastController: ToastController
  ) {
    addIcons({ 
      add,
      remove
    });
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('idProducto'));

    if (!isNaN(this.id)) {
      this.servicios.obtenerProductoPorId(this.id).subscribe({
        next: (producto) => {
          this.producto = producto; 
          console.log('Product loaded:', this.producto);
          this.calculoTotal(); 
          console.log('Calling convertProductPrice from ngOnInit...');
          this.convertProductPrice();
        },
        error: (err) => {
          console.error('Error loading product:', err);
          this.presentToast('Error loading product. Please try again later.', 'danger');
        }
      });
    } else {
      console.warn('Invalid product ID');
      this.presentToast('Invalid product ID.', 'danger');
    }
  }

  sumar(){
    if (this.producto && this.apartados < this.producto.stock) {
      this.apartados++;
      this.calculoTotal(); 
    } else if (this.producto) {
      this.presentToast('No more stock available.', 'warning');
    }
  }

  restar(){
    if (this.apartados > 0) {
      this.apartados--;
      this.calculoTotal(); 
    }
  }

  calculoTotal(){
    if (this.producto) {
      this.total = parseFloat(this.producto.precio) * this.apartados;
    }
  }

  agregar(){
    if (this.id === 0 || this.apartados === 0) {
      this.presentToast('Select a quantity to add to the cart.', 'warning');
      return;
    }

    this.servicios.agregarProductoAlCarrito(this.id, this.apartados).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
        this.presentToast('Product successfully added to cart.', 'success');
        this.apartados = 0; 
        this.calculoTotal(); 
      },
      error: (err) => {
        console.error('Error adding product to cart:', err);
        this.presentToast('Error adding product to cart.', 'danger');
      }
    });
  }

  onCurrencyChange(event: any) {
    console.log('Currency change event triggered. New currency:', event.detail.value);
    this.selectedCurrency = event.detail.value;
    console.log('Calling convertProductPrice from onCurrencyChange...');
    this.convertProductPrice();
  }

  convertProductPrice() {
    console.log('Inside convertProductPrice function.');
    console.log('Current product:', this.producto);
    console.log('Selected currency:', this.selectedCurrency);
    console.log('Product price:', this.producto?.precio);


    if (this.producto && this.selectedCurrency && this.producto.precio) {
      const baseCurrency = 'CLP'; 
      const amountToConvert = parseFloat(this.producto.precio);

      if (this.selectedCurrency === baseCurrency) {
        console.log('Selected currency is base currency. No conversion needed.');
        this.convertedPrice = amountToConvert; 
        return;
      }
      
      console.log(`Attempting to convert ${amountToConvert} ${baseCurrency} to ${this.selectedCurrency}`);
      this.servicios.convertirDivisa(baseCurrency, this.selectedCurrency, amountToConvert).subscribe({
        next: (res: CurrencyConversionResponse) => {
          this.convertedPrice = res.cantidad_convertida;
          console.log(`Conversion successful! Converted ${amountToConvert} ${baseCurrency} to ${this.convertedPrice} ${this.selectedCurrency}`);
        },
        error: (err) => {
          console.error('Error converting currency:', err);
          this.presentToast('Error converting currency. Please try again.', 'danger');
          this.convertedPrice = amountToConvert; 
        }
      });
    } else {
      console.warn('Cannot convert price: Product, selected currency, or product price is missing.');
      this.convertedPrice = this.producto ? parseFloat(this.producto.precio) : 0; 
    }
  }

  private async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
    });
    await toast.present();
  }
}
