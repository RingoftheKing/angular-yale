import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {SpacerComponent} from '../spacer/spacer.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgForOf,
    SpacerComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images = [
    'assets/images/cubism.jpg',
    'assets/images/More_Cubism.jpg',
    'assets/images/impressionism.jpg',
  ];

  currentIndex = 0;
  private slideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  get transform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.next();
    }, 5000); // Slide every 5 seconds
  }

  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
