import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {

  private translationChange = new Subject<void>();

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language).subscribe(() => {
      this.triggerTranslationChange(); // Emit the event after language switch
    });
  }

  onTranslationChange() {
    return this.translationChange.asObservable();
  }

  triggerTranslationChange() {
    this.translationChange.next();
  }

  instant(key: string): string {
    return this.translate.instant(key);
  }

}
