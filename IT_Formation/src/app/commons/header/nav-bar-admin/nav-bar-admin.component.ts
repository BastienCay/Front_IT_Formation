import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar-admin',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav-bar-admin.component.html',
  styleUrl: './nav-bar-admin.component.css'
})
export class NavBarAdminComponent {
  
  constructor(private router: Router){}

  seDeconnecter(){
    sessionStorage.clear();
    this.router.navigate(["/home-page"]);
  }

}
