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
  imports: [CommonModule,RouterModule,MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './card-formation-presentation.component.html',
  styleUrl: './card-formation-presentation.component.css'
})
export class CardFormationPresentationComponent {

  @Input()
  session!: any;

  resultat!: String;

  nombreDeJour(date1: string, date2: string): Number{
    let dateDebut = new Date(date1);
    let dateFin = new Date(date2);

    let difference_en_temps = dateFin.getTime() - dateDebut.getTime();
    let difference_en_jours = difference_en_temps / (1000 * 3600 * 24);

    return difference_en_jours;
  }

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
