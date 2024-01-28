import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-home-page-type-formation',
  standalone: true,
  imports: [],
  templateUrl: './card-home-page-type-formation.component.html',
  styleUrl: './card-home-page-type-formation.component.css'
})
export class CardHomePageTypeFormationComponent {

  @Input()
  title!: String;

  @Input()
  urlImage!: String;

  cheminPageFormation(title : String){
    if ( title === "Nos formations en présentiel") return "/formation-presentiel";
    else if (title === "Nos formations en distanciel") return "/formation-distanciel";
    else return "/formation-sur-mesure";
  }
}
