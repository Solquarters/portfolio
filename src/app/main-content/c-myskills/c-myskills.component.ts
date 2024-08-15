import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-myskills.component.html',
  styleUrl: './c-myskills.component.scss'
})
export class CMyskillsComponent {

  isHovered = false;

}
