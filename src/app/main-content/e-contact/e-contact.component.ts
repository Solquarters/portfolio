import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { ContactformComponent } from './contactform/contactform.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-e-contact',
  standalone: true,
  imports: [ContactformComponent, TranslateModule, RouterLink, RouterOutlet],
  templateUrl: './e-contact.component.html',
  styleUrl: './e-contact.component.scss'
})
export class EContactComponent {


  

  translate = inject(TranslationService);
  


}
