import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

interface CarritoItem {
  producto: Producto;
  cantidad: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  slideIndex: number = 0;
  slides: HTMLElement[] = [];
  productos: Producto[] = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1.', imagen: 'assets/img/b1.jpg', precio: 20 },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2.', imagen: 'assets/img/b2.jpeg', precio: 30 },
    { nombre: 'Producto 3', descripcion: 'Descripción del producto 3.', imagen: 'assets/img/b3.jpeg', precio: 25 },
    { nombre: 'Producto 4', descripcion: 'Descripción del producto 4.', imagen: 'assets/img/b4.jpg', precio: 40 },
    { nombre: 'Producto 5', descripcion: 'Descripción del producto 5.', imagen: 'assets/img/b5.jpeg', precio: 35 },
    { nombre: 'Producto 6', descripcion: 'Descripción del producto 6.', imagen: 'assets/img/b6.jpeg', precio: 50 },
    // Añade más productos aquí
  ];
  carrito: CarritoItem[] = [];
  selectedProducto: Producto | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
  }

  showProductDetails(producto: Producto) {
    this.selectedProducto = producto;
    document.getElementById('productos')!.style.display = 'none';
    document.getElementById('product-details')!.style.display = 'block';
    document.getElementById('cart')!.style.display = 'none';
}


  addToCart() {
    if (this.selectedProducto) {
      const existingItem = this.carrito.find(item => item.producto.nombre === this.selectedProducto!.nombre);
      if (existingItem) {
        existingItem.cantidad += 1;
      } else {
        this.carrito.push({ producto: this.selectedProducto, cantidad: 1 });
      }
      alert(`${this.selectedProducto.nombre} ha sido añadido al carrito.`);
      this.continueShopping();
    }
  }

  viewProduct(product: any) {
    this.router.navigate(['/product-details'], { state: { product } });
  }

  continueShopping() {
    document.getElementById('productos')!.style.display = 'block';
    document.getElementById('product-details')!.style.display = 'none';
    document.getElementById('cart')!.style.display = 'none';
    this.selectedProducto = null;
  }

  showCart() {
    document.getElementById('productos')!.style.display = 'none';
    document.getElementById('product-details')!.style.display = 'none';
    document.getElementById('cart')!.style.display = 'block';
  }

  updateQuantity(item: CarritoItem, change: number) {
    item.cantidad += change;
    if (item.cantidad <= 0) {
      this.removeFromCart(item);
    }
  }

  removeFromCart(item: CarritoItem) {
    const index = this.carrito.indexOf(item);
    if (index > -1) {
      this.carrito.splice(index, 1);
    }
  }

  getTotal() {
    return this.carrito.reduce((sum, item) => sum + (item.producto.precio * item.cantidad), 0);
  }

  checkout() {
    alert(`Total a pagar: $${this.getTotal().toFixed(2)}`);
    // Aquí puedes añadir lógica adicional para procesar el pago
  }
}
