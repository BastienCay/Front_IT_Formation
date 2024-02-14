import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from '../../../services/theme.service';
import { Theme } from '../../../models/theme.model';

@Component({
  selector: 'app-ajout-theme',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-theme.component.html',
  styleUrl: './ajout-theme.component.css'
})
export class AjoutThemeComponent {

  submitted: boolean = false;

  theme!: Theme;

  nouveauTheme: FormGroup = this.formBuilder.group({
    designation: ['',[Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private themeService: ThemeService){}

  private addTheme(): void {
    this.themeService.createTheme(this.nouveauTheme.value).subscribe((nouveauTheme) => {this.theme = nouveauTheme});
    this.nouveauTheme.reset();
    this.submitted = false;
  }
  

  public onSubmit(): void{
    this.submitted = true;
    if(this.nouveauTheme.valid){
      this.addTheme();
    }
  }
  


  public get form(){
    return this.nouveauTheme.controls;
  }

}
