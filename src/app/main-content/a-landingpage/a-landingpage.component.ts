import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';

  import { TranslateModule } from '@ngx-translate/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-a-landingpage',
  standalone: true,
  imports: [TranslateModule, NgStyle],
  templateUrl: './a-landingpage.component.html',
  styleUrl: './a-landingpage.component.scss'
})
export class ALandingpageComponent {



  iamFontSize = 'clamp(16px, 7vw, 68px)';
  isChanged = false;  // Initial font size for the "i am" text
  translate = inject(TranslationService);

  constructor() {
    this.translate.onTranslationChange().subscribe(() => {
      this.changeIamFontSize();
    });
  }

  changeIamFontSize() {
     // New font size when the translation changes
    if(!this.isChanged){
      this.iamFontSize = 'clamp(10px, 4.5vw, 46px)';
    }
    else{
      this.iamFontSize = 'clamp(16px, 7vw, 68px)';
    }
    this.isChanged = !this.isChanged; 
    
  }

}
