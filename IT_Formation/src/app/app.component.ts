import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./commons/header/header.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SaumongComponent } from './commons/saumong/saumong.component';
import { FooterComponent } from "./commons/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomePageComponent, SaumongComponent, FooterComponent]
})
export class AppComponent {
  title = 'IT_Formation';

  @Input()
  typeCompte!: String | null;

  ngOnInit(){
    this.typeCompte = sessionStorage.getItem("typeCompte");
  }

}
