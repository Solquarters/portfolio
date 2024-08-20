import { Component } from '@angular/core';
import { ALandingpageComponent } from './a-landingpage/a-landingpage.component';
import { BAboutmeComponent } from './b-aboutme/b-aboutme.component';
import { CMyskillsComponent } from './c-myskills/c-myskills.component';
import { DPortfolioComponent } from './d-portfolio/d-portfolio.component';
import { EContactComponent } from './e-contact/e-contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ALandingpageComponent, BAboutmeComponent, CMyskillsComponent, DPortfolioComponent, EContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {


}
