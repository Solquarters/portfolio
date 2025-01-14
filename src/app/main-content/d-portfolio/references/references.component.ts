import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  title = 'slidebar';


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



  translate = inject(TranslationService);


  getTranslatedReference(descriptionKey: string): string {
    return this.translate.instant(descriptionKey);
  }


 


  
  slides = [
    { 
      textKey: this.translate.instant("reference3"),
      text: "\"Through his structured approach and careful planning, Roman was able to provide our project with a solid architecture. He successfully implemented this with excellently designed and executed software solutions.\"", 
      author: "Mike Schauber - DABubble Team Partner", 
      image: '../../../assets/img/mike_schauber_no_bg2.png', 
      alt: 'Mike Schauber - DABubble Team Partner' 
    },
    { 
      textKey: this.translate.instant("reference2"),
      text: "\"Roman is an extremely reliable and solution-oriented person. He stands out for his calmness in critical situations. He is always motivated and dedicated. Working with him is a great pleasure. Roman can stay focused for hours and is always helpful. His support and commitment are invaluable.\"", 
      author: "Maurice Preißler - Join Team Partner", 
      image: '../../../assets/img/mauriceFeedback.png', 
      alt: 'Maurice Preißler - Join Team Partner' 
    },
    { 
      textKey: this.translate.instant("reference1"),
      text: "\"Roman is super cool and always very nice. In both group projects we've had together so far, whenever I didn't know something, he was there for me and explained and showed everything to me in great detail. I've learned a lot from Roman. No matter what problems you had, Roman solved them in a short amount of time.\"", 
      author: "Oleg Wenner - Join Team Partner", 
      image: '../../../assets/img/portfolio screenshots/openapiprojectlaptoppng.png', 
      alt: 'Oleg Wenner - Join Team Partner' 
    },
    
    
  ];

}
