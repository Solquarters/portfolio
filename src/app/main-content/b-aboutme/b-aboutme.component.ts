import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-b-aboutme',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './b-aboutme.component.html',
  styleUrl: './b-aboutme.component.scss'
})
export class BAboutmeComponent {




 
  translate = inject(TranslationService);
}
