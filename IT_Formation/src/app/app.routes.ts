import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageFormulaireEvaluationComponent } from './pages/page-formulaire-evaluation/page-formulaire-evaluation.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageAProposComponent } from './pages/page-a-propos/page-a-propos.component';
import { PageNosFormationsComponent } from './pages/page-nos-formations/page-nos-formations.component';
import { PageFormationComponent } from './pages/page-formation/page-formation.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { PageConnectionComponent } from './pages/page-connection/page-connection.component';



export const routes: Routes = [
    {path: '', redirectTo: 'home-page', pathMatch:'full'},
    {path:'home-page', component: HomePageComponent},
    {path:'evaluation', component: PageFormulaireEvaluationComponent},
    {path:'contact', component: PageContactComponent},
    {path:'a-propos', component: PageAProposComponent},
    {path:'nos-formations', component: PageNosFormationsComponent},
    {path:'formation', component: PageFormationComponent},
    {path:'connection', component: PageConnectionComponent},
    {path:'formations/:id', component: PageFormationComponent},
    {path:'**', component: Page404Component},

    
];

