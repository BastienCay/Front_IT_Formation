import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card-formation-presentation',
  standalone: true,
  imports: [CommonModule,RouterModule,MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule,RouterModule],
  templateUrl: './card-formation-presentation.component.html',
  styleUrl: './card-formation-presentation.component.css'
})
export class CardFormationPresentationComponent {

  @Input()
  formation!: any;

  resultat!: String;

  numStr(nbrNonSeparer: any): String {
    nbrNonSeparer = '' + nbrNonSeparer;
    //Permet de definir la chaine de caractere à utiliser comme séparateur
    let separateur = ' '; 
    separateur = separateur || ' ';

    let resultat = '', d = 0;
    while (nbrNonSeparer.match(/^0[0-9]/)) {
      nbrNonSeparer = nbrNonSeparer.substr(1);
    }

    for (var i = nbrNonSeparer.length-1; i >= 0; i--) {
      resultat = (d != 0 && d % 3 == 0) ? nbrNonSeparer[i] + separateur + resultat : nbrNonSeparer[i] + resultat;
      d++;
    }

    return resultat;
  }
}
