import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos = [
    {
      id: 0,
      categoriaId: 1,
      name: 'KeyCaps Blancas',
      image: 'assets/images/producto1.jpg',
      altText: 'Teclas para teclados',
      precio: '$10.00'
    },
    {
      id: 1,
      categoriaId: 1,
      name: 'KeyCaps Negras',
      image: 'assets/images/producto2.jpeg',
      altText: 'Switches para teclados',
      precio: '$10.00'
    },
    {
      id: 2,
      categoriaId: 1,
      name: 'KeyCaps Rojas',
      image: 'assets/images/producto3.jpg',
      altText: 'Marco para teclados',
      precio: '$10.00'
    },
    {
      id: 3,
      categoriaId: 1,
      name: 'KeyCaps Azules',
      image: 'assets/images/producto3.jpg',
      altText: 'Marco para teclados',
      precio: '$10.00'
    },
    {
      id: 4,
      categoriaId: 1,
      name: 'KeyCaps Verdes',
      image: 'assets/images/producto3.jpg',
      altText: 'Marco para teclados',
      precio: '$10.00'
    }
  ];

  private categorias = [
    {
      id: 0,
      name: 'Todos',
      image: 'assets/images/producto1.jpg',
      description: 'Son todos nuestros productos a la venta',
      altText: 'Teclas para teclados'
    },
    {
      id: 1,
      name: 'KeyCaps',
      image: 'assets/images/producto1.jpg',
      description: 'Son las tapas de las teclas. La parte que tocas con los dedos, normalmente con letras, números o símbolos impresos.',
      altText: 'Teclas para teclados'
    },
    {
      id: 2,
      name: 'Switches',
      image: 'assets/images/producto2.jpeg',
      description: 'Detectan la pulsación y determinan la sensación (clicky, suave, etc.) y la respuesta del teclado.',
      altText: 'Switches para teclados'
    },
    {
      id: 3,
      name: 'Carcasa',
      image: 'assets/images/producto3.jpg',
      description: 'Es la estructura externa del teclado. Sostiene todas las partes internas y le da forma, estabilidad y estética al teclado.',
      altText: 'Marco para teclados'
    }
  ];

  getProductos() {
    return this.productos;
  }

  getCategorias(): any[] {
    return this.categorias;
  }

  getProductoPorId(id: number) {
    return this.productos.find(p => p.id === id);
  }

  getProductosPorCategoria(categoriaId: number): any[] {
    if (categoriaId === 0) return this.productos;
    return this.productos.filter(p => p.categoriaId === categoriaId);
  }
}
