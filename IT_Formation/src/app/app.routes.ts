import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageFormulaireEvaluationComponent } from './pages/page-formulaire-evaluation/page-formulaire-evaluation.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageAProposComponent } from './pages/page-a-propos/page-a-propos.component';

import { FormulaireEvaluationComponent } from './pages/page-formulaire-evaluation/formulaire-evaluation/formulaire-evaluation.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home-page', pathMatch:'full'},
    {path:'home-page', component: HomePageComponent},
    {path:'evaluation', component: PageFormulaireEvaluationComponent},
    {path:'contact', component: PageContactComponent},
    {path:'a-propos', component: PageAProposComponent},
    {path:'formation', component: PageFormationComponent}
  
];
