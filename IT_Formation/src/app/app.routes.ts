import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageFormulaireEvaluationComponent } from './pages/page-formulaire-evaluation/page-formulaire-evaluation.component';
import { FormulaireEvaluationComponent } from './pages/page-formulaire-evaluation/formulaire-evaluation/formulaire-evaluation.component';

export const routes: Routes = [
    {path: '', redirectTo: 'evaluation', pathMatch:'full'},
    {path:'home-page', component: HomePageComponent},
    {path:'evaluation', component: PageFormulaireEvaluationComponent},
    {path:'eval', component: FormulaireEvaluationComponent},
    
];
