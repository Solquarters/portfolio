import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { ContactformComponent } from './contactform/contactform.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-e-contact',
  standalone: true,
  imports: [ContactformComponent, TranslateModule],
  templateUrl: './e-contact.component.html',
  styleUrl: './e-contact.component.scss'
})
export class EContactComponent {


  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  translate = inject(TranslationService);
  


}
