import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service'; // Suponiendo que tienes un servicio para manejar el carrito

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Lógica para obtener el producto seleccionado
    this.product = {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción detallada del producto 1.',
      price: 20.00,
      image: 'assets/img/b1.jpg'
    };
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  continueShopping() {
    this.router.navigate(['/productos']);
  }
}
