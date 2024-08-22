import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss'
})
export class LegalnoticeComponent {

  translate = inject(TranslationService);
}
