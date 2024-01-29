import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-partener',
  standalone: true,
  imports: [],
  templateUrl: './card-partener.component.html',
  styleUrl: './card-partener.component.css'
})
export class CardPartenerComponent {

  @Input()
  urlImage!: String;

}
