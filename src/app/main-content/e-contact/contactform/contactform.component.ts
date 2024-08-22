import { CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { FormsModule, NgForm} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  http = inject(HttpClient);




contactData = {
  name: "",
  email: "",
  message: "",
};

termsAccepted: boolean = false;
mailTest: boolean = false;

popupVisible: boolean = false;
popupMessage: string = '';
fadeIn: boolean = false;
fadeOut: boolean = false;

post = {
  endPoint: 'https://roman-kabucov.de/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

toggleTerms() {
  this.termsAccepted = !this.termsAccepted;
}

// onSubmit(ngForm: NgForm) {
//   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
//     this.http.post(this.post.endPoint, this.post.body(this.contactData))
//       .subscribe({
//         next: (response) => {
//           ngForm.resetForm();
//           this.showPopup('Your message has been sent successfully!');
//         },
//         error: (error) => {
//           console.error(error);
//         },
//         complete: () => console.info('send post complete'),
//       });
//   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
//     ngForm.resetForm();
//     this.showPopup('Test message sent successfully!');
//   }
// }
onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.showPopup(this.translate.instant('successMessage'));
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
    ngForm.resetForm();
    this.showPopup(this.translate.instant('testMessage'));
  }
}

showPopup(message: string) {
  this.popupMessage = message;
  this.popupVisible = true;
  this.fadeIn = true;
  this.fadeOut = false;

  setTimeout(() => {
    this.fadeIn = false;
    this.fadeOut = true;

    setTimeout(() => {
      this.popupVisible = false;
    }, 1000); // Wait for fade-out animation to complete before hiding
  }, 8000); // Hide after 8 seconds
};


translate = inject(TranslationService);





}
