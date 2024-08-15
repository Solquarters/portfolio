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
      text: "Der Roman ist super cool drauf und ist immer sehr nett. In beiden Gruppenprojekten, die wir bis jetzt gemeinsam hatten, war er jedes Mal, wenn ich etwas nicht wusste, für mich da und hat mir alles sehr ausführlich erklärt und gezeigt. Ich habe sehr viel von Roman gelernt. Egal welche Probleme man hatte, Roman hat es innerhalb einer kurzen Zeit gelöst!", 
      author: "Oleg Wenner - Join Team Partner", 
      image: '../../../assets/img/portfolio screenshots/openapiprojectlaptoppng.png', 
      alt: 'Oleg Wenner - Join Team Partner' 
    },
    { 
      text: "Roman ist eine äußerst zuverlässige und lösungsorientierte Person. Er zeichnet sich durch Ruhe in kritischen Situationen aus. Er ist stets motiviert und engagiert. Die Zusammenarbeit mit ihm macht großen Spaß. Roman kann stundenlang fokussiert arbeiten und ist dabei immer hilfsbereit. Seine Unterstützung und sein Einsatz sind von unschätzbarem Wert.", 
      author: "Maurice Preißler - Join Team Partner", 
      image: '../../../assets/img/mauricePreissler.jpg', 
      alt: 'Maurice Preißler - Join Team Partner' 
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
    }, 8000); // Change slide every 5 seconds
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
