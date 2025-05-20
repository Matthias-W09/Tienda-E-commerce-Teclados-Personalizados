import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartaComentarioComponent } from '../../componets/carta-comentario/carta-comentario.component'
import { IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seccion-comentarios',
  templateUrl: './seccion-comentarios.component.html',
  styleUrls: ['./seccion-comentarios.component.scss'],
  standalone: true,
  imports: [
    IonTitle,
    CommonModule,
    CartaComentarioComponent
  ]
})
export class SeccionComentariosComponent  implements OnInit {

  comentarios =[
    {
      idComentario:0,
      nameUsuario: 'Ben Dover',
      avatar:'assets/images/producto2.jpeg',
      nameProducto: 'Teclado perosonalizado', 
      textoComentario:'Más que un teclado, una sensación',
      valoracion:'5 Estrellas'
    },
    {
      idComentario:1,
      nameUsuario: 'Anita Dick',
      avatar:'assets/images/producto2.jpeg',
      nameProducto: 'Switch tactile blanco',
      textoComentario:'Una locura estos switches, nunca había sentido algo asi',
      valoracion:'4.5 Estrellas'
    },
    {
      idComentario:2,
      nameUsuario: 'Dixon Mayas',
      avatar:'assets/images/producto2.jpeg',
      nameProducto: 'Teclado perosonalizado', 
      textoComentario:'Teclado bueno, le encantó a mi nieto',
      valoracion:'5 Estrellas'
    }
  ]

  constructor() { }

  ngOnInit() {}

}
