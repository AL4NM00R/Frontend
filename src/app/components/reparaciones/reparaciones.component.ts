import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.css']
})
export class ReparacionesComponent implements OnInit {

  slideIndex: number = 0;
  slides: HTMLElement[] = [];

  constructor() { }

  ngOnInit(): void {
    this.slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
    this.showSlides(this.slideIndex);
    setInterval(() => this.plusSlides(1), 2000); // Cambia la imagen cada 8 segundos
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
