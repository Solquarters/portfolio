import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  title = 'slidebar';


  slides = [
    { 
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn’t have got this far without his commitment.", 
      author: "V. Schuster - Team Partner", 
      image: 'assets/michael.jpg', 
      alt: 'Michael Schuster' 
    },
    { 
      text: "Another testimonial goes here with a different person.", 
      author: "Another Author", 
      image: 'assets/another_person.jpg', 
      alt: 'Another Person' 
    }
  ];

  currentIndex = 0;
  private slideInterval: any;

  constructor() {
    this.startSlideshow();
  }

  startSlideshow() {
    this.clearSlideshowInterval(); // Clear any existing interval
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  clearSlideshowInterval() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  resetTimer() {
    this.clearSlideshowInterval();  // Clear the existing interval
    this.startSlideshow();  // Restart the slideshow interval
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    this.resetTimer(); // Reset the timer when a slide is clicked
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.resetTimer(); // Reset the timer on manual navigation
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.resetTimer(); // Reset the timer on manual navigation
  }

  ngOnDestroy() {
    this.clearSlideshowInterval(); // Clear interval on component destruction to avoid memory leaks
  }

}
