import { Component, Input }   from '@angular/core';
import { RouterModule }       from '@angular/router';
import { CommonModule }       from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule}      from '@angular/material/button';
import {MatDividerModule}     from '@angular/material/divider';
import {MatCardModule}        from '@angular/material/card';
import SessionUserDTO from '../../../../models/sessionUserDTO';

@Component({
  selector: 'app-card-mes-formations',
  standalone: true,
  imports: [CommonModule,RouterModule,MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './card-mes-formations.component.html',
  styleUrl: './card-mes-formations.component.css'
})
export class CardMesFormationsComponent {
  
  @Input()
  session!: SessionUserDTO;

  tempAvenir(date: string | number | Date): String{
    const dateActuel: Date = new Date();
    const dateSession: Date = new Date(date);

    if(dateSession < dateActuel) return "passer";
    else return "avenir";
  }

}