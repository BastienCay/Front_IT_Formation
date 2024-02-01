import { Component } from '@angular/core';
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

}
