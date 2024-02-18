import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-home-page-type-formation',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './card-home-page-type-formation.component.html',
  styleUrl: './card-home-page-type-formation.component.css'
})
export class CardHomePageTypeFormationComponent {

  @Input()
  title!: String;

  @Input()
  route!: String;
  @Input()
  urlImageWhite!: String;
  @Input()
  urlImageBlack!: String;

  cheminPageFormation(title : String){
    if ( title === "Nos formations en présentiel") return "/formation-presentiel";
    else if (title === "Nos formations en distanciel") return "/formation-distanciel";
    else return "/formation-sur-mesure";
  }
  

}
