import { Component, Input } from '@angular/core';
import { SessionFormation } from '../../../../models/sessionFormation.model';

@Component({
  selector: 'app-card-session',
  standalone: true,
  imports: [],
  templateUrl: './card-session.component.html',
  styleUrl: './card-session.component.css'
})
export class CardSessionComponent {

  @Input()
  session!: SessionFormation;

} 
