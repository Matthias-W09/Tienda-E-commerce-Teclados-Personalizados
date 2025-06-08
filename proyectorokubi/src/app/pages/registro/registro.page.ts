import { Component } from '@angular/core';
import { GatewayServiciosService } from '../../services/gatewayServicios/gateway-servicios.service';
import { 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../componets/header/header.component';
import { FooterComponent } from '../../componets/footer/footer.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    ReactiveFormsModule,  // <-- IMPORTANTE: reactive forms
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class RegistroPage {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private servicio: GatewayServiciosService) {
    this.registroForm = this.fb.group({
      name: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      rut: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const formValues = this.registroForm.value;
      const usuario = {
        ...formValues,
        rut: Number(formValues.rut)
      };
      console.log('Usuario listo para enviar:', usuario);
      this.servicio.registrarUsuario(usuario).subscribe({
        next: (respuesta) => {
          console.log('Usuario guardado correctamente:', respuesta);
        },
        error: (error) => {
          console.error('Error al guardar el usuario:', error);
        }
      });
    }
    else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
    }
  }
}
