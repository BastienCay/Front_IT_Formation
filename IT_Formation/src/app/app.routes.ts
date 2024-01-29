import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageFormulaireEvaluationComponent } from './pages/page-formulaire-evaluation/page-formulaire-evaluation.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home-page', pathMatch:'full'},
    {path:'home-page', component: HomePageComponent},
    {path:'page-formulaire-evaluation', component: PageFormulaireEvaluationComponent},
];
