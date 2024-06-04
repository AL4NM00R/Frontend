import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1.', imagen: 'assets/img/b1.jpg', precio: 20 },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2.', imagen: 'assets/img/b2.jpeg', precio: 30 },
    { nombre: 'Producto 3', descripcion: 'Descripción del producto 3.', imagen: 'assets/img/b3.jpeg', precio: 25 },
    { nombre: 'Producto 4', descripcion: 'Descripción del producto 4.', imagen: 'assets/img/b4.jpg', precio: 40 },
    { nombre: 'Producto 5', descripcion: 'Descripción del producto 5.', imagen: 'assets/img/b5.jpeg', precio: 35 },
    { nombre: 'Producto 6', descripcion: 'Descripción del producto 6.', imagen: 'assets/img/b6.jpeg', precio: 50 },
    // Añade más productos aquí
  ];

  selectedProducto: Producto | null = null;

  constructor() {}

  ngOnInit(): void {}

  showProductDetails(producto: Producto) {
    this.selectedProducto = producto;
    document.getElementById('productos')!.style.display = 'none';
    document.getElementById('product-details')!.style.display = 'block';
  }

  continueShopping() {
    document.getElementById('productos')!.style.display = 'block';
    document.getElementById('product-details')!.style.display = 'none';
    this.selectedProducto = null;
  }
}
