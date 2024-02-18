import { Component, OnInit } from '@angular/core';
import { SousTheme } from '../../../models/sous-theme.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SousThemeService } from '../../../services/sous-theme.service';
import { Theme } from '../../../models/theme.model';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout-sous-theme',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-sous-theme.component.html',
  styleUrl: './ajout-sous-theme.component.css'
})
export class AjoutSousThemeComponent implements OnInit {
  
  

  themes = new Array<Theme>();

  ngOnInit(): void {
    this.themeService.getThemes().subscribe(x => {
      this.themes = x.map(item => {
        return new Theme(
          item.designation
          );
      })
    });
  }
  
  sousTheme!: SousTheme;


  submitted: boolean = false;


 
  nouveauSousTheme: FormGroup = this.formBuilder.group({
    designation: ['',[Validators.required]],
    theme: ['',[Validators.required]],
    
  });

  constructor(private formBuilder: FormBuilder, private sousThemeService: SousThemeService, private themeService: ThemeService,private router: Router){}

  private addSousTheme(): void{
    console.log(this.nouveauSousTheme.value.theme);
    this.sousTheme = new SousTheme(
      this.nouveauSousTheme.value.designation,
      new Theme(
        this.nouveauSousTheme.value.theme
      )
    )
   this.sousThemeService.createSousTheme(this.sousTheme).subscribe((nouveauSousTheme) => {
      this.sousTheme = nouveauSousTheme
  });

    this.nouveauSousTheme.reset();
    this.submitted = false;
    this.router.navigate(['/page-admin']);
}

  public onSubmit(): void{
 
    this.submitted = true;
    if(this.nouveauSousTheme.valid){
      console.log(this.nouveauSousTheme.get('designation')?.value);

      this.addSousTheme();
    }
  }
  
  

  public get form(){
    return this.nouveauSousTheme.controls;
  }

  

}
