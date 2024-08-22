import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent, TranslateModule } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']  // Note: 'styleUrl' should be 'styleUrls'
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private translate: TranslateService, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.scrollToSection(event.lang);
    });
  }

  scrollToSection(language: string): void {
    if (language === 'de') {
      this.viewportScroller.scrollToAnchor('german-section');
    } else if (language === 'en') {
      this.viewportScroller.scrollToAnchor('english-section');
    }
  }
}