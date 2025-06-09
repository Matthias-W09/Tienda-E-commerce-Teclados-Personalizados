import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class InicioSesionPage implements OnDestroy {
  loginForm: FormGroup;
  private subs: Subscription = new Subscription();

    constructor(
    private fb: FormBuilder,
    private servicio: GatewayServiciosService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    // Escuchar directamente la ruta
    this.subs.add(
      this.servicio.rutaUsuario$.subscribe(ruta => {
        if (ruta !== '/inicio-sesion') {
          this.router.navigateByUrl(ruta);
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe(); // Limpieza al salir del componente
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.servicio.loginUsuario(credentials);
    } else {
      console.log('Formulario inválido');
      this.loginForm.markAllAsTouched();
    }
  }
}
