import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-c-myskills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './c-myskills.component.html',
  styleUrl: './c-myskills.component.scss'
})
export class CMyskillsComponent {

  isHovered = false;
  translate = inject(TranslationService);
}
