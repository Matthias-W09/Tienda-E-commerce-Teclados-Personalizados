import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  comentarios = [
    {
      idComentario:0,
      idProduc:1,
      nameUsuario: 'Ben Dover',
      avatar:'assets/images/producto2.jpeg',
      nameProducto: 'Teclado perosonalizado', 
      textoComentario:'Más que un teclado, una sensación',
      valoracion:'5 Estrellas'
    },
    {
      idComentario:1,
      idProduc:1,
      nameUsuario: 'Anita Dick',
      avatar:'assets/images/producto2.jpeg',
      nameProducto: 'Switch tactile blanco',
      textoComentario:'Una locura estos switches, nunca había sentido algo asi',
      valoracion:'4.5 Estrellas'
    },
    {
      idComentario:2,
      idProduc:2,
      nameUsuario: 'Dixon Mayas',
      avatar:'assets/images/producto2.jpeg',
      nameProducto: 'Teclado perosonalizado', 
      textoComentario:'Teclado bueno, le encantó a mi nieto',
      valoracion:'5 Estrellas'
    }
  ]

  getComent() {
    return this.comentarios;
  }

  getComentsId(id:number){
    return this.comentarios.filter(comentarios => comentarios.idProduc === id);
  }
}
