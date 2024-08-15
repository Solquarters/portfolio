import { Component } from '@angular/core';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-e-contact',
  standalone: true,
  imports: [ContactformComponent],
  templateUrl: './e-contact.component.html',
  styleUrl: './e-contact.component.scss'
})
export class EContactComponent {


  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
