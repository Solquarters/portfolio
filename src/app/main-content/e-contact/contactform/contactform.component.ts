import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    terms: false,
  }
  
  toggleTerms() {
    this.contactData.terms = !this.contactData.terms;
  }

  onSubmit(contactForm: NgForm){

    if(contactForm.valid ){

      console.log(this.contactData)
    }

    
  }
}
