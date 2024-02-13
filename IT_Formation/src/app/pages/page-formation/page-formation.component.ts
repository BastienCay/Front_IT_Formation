import { Component, Input } from '@angular/core';
import { FooterComponent } from "../../commons/footer/footer.component";
import { HeaderComponent } from "../../commons/header/header.component";
import {MatIconModule} from '@angular/material/icon'
import { Formation } from '../../models/formation.model';
import { FormationService } from '../../services/formation.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-formation',
    standalone: true,
    templateUrl: './page-formation.component.html',
    styleUrl: './page-formation.component.css',
    imports: [FooterComponent, HeaderComponent,MatIconModule,RouterModule]
})
export class PageFormationComponent {

  formation!: Formation;

    constructor(private router: Router, private route:ActivatedRoute,private formationService: FormationService){}

    private subscribeFormation(id: number): void{
        this.formationService.getFormation(id).subscribe({
          next: (formation) => this.formation = formation,
          error: (err) => console.error("Erreur au chargement", err)
        });
    }

    private setSubcribe(id: string | null):void{
        if(id){
          this.subscribeFormation(+id);
        }else{
          this.router.navigate(['**']);
        }
      }

    ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubcribe(id);
    console.log(this.formation);
    }
}
