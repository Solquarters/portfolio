import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';

export const routes: Routes = [

    {path: '', component: MainContentComponent},
    {path: 'legal-notice', component: LegalnoticeComponent}
];
