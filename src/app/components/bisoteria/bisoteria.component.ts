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

interface Installation {
  name: string;
  address: string;
}

@Component({
  selector: 'app-bisoteria',
  templateUrl: './bisoteria.component.html',
  styleUrls: ['./bisoteria.component.css']
})
export class BisoteriaComponent implements OnInit {
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
  selectedPaymentMethod: string | null = null;
  installations: Installation[] = [
    { name: 'Instalación 1', address: 'Dirección 1' },
    { name: 'Instalación 2', address: 'Dirección 2' },
    { name: 'Instalación 3', address: 'Dirección 3' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
    this.showSlides(this.slideIndex);
    setInterval(() => this.plusSlides(1), 2000); // Cambia la imagen cada 2 segundos
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

  getTotalWithDiscount() {
    return (this.getTotal() * 0.9).toFixed(2);
  }

  checkout() {
    // Mostrar métodos de pago
    this.selectedPaymentMethod = null; // Asegúrate de que no haya ningún método seleccionado inicialmente
  }

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
  }

  cancelPayment() {
    this.selectedPaymentMethod = null;
  }

  processTransfer(event: Event) {
    event.preventDefault();
    alert(`Transferencia procesada con un total de $${this.getTotalWithDiscount()}`);
    this.clearCart();
    this.continueShopping();
  }

  selectInstallation(installation: Installation) {
    alert(`Has seleccionado ${installation.name}`);
    this.clearCart();
    this.continueShopping();
  }

  clearCart() {
    this.carrito = [];
  }

  showSlides(index: number) {
    this.slides.forEach(slide => slide.style.display = 'none');
    this.slideIndex = (index + this.slides.length) % this.slides.length;
    this.slides[this.slideIndex].style.display = 'block';
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex + n);
  }
}
