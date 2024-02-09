import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./commons/header/header.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SaumongComponent } from './commons/saumong/saumong.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomePageComponent, SaumongComponent]
})
export class AppComponent {
  title = 'IT_Formation';
}
