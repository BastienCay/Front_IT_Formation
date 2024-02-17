import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input()
  typeCompte!: String | null;

  constructor(private router: Router){}

  seDeconnecter(){
    sessionStorage.clear();
    this.router.navigate(['/home-page']);
  }
  
}