import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

///For section scrolling
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

export const routes: Routes = [

    {path: '', component: MainContentComponent},
    {path: 'legal-notice', component: LegalnoticeComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent}
];


///For section scrolling
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }



