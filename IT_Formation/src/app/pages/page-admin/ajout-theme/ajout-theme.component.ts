import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';
import ThemeDTO from '../../../models/DTO/themeDTO.model';

@Component({
  selector: 'app-ajout-theme',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-theme.component.html',
  styleUrl: './ajout-theme.component.css'
})
export class AjoutThemeComponent {

  submitted: boolean = false;

  themeDto!: ThemeDTO;

  nouveauTheme: FormGroup = this.formBuilder.group({
    designation: ['',[Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private themeService: ThemeService,private router: Router){}

  private creationTheme(){

    this.themeDto = this.nouveauTheme.value;

    this.themeService.createTheme(this.themeDto).subscribe(() => {
    this.submitted = false;
    this.nouveauTheme.reset();
    this.router.navigate(['/page-admin']);
    });
    

  }

  onSubmit(): boolean{

    this.submitted = true;
    if(this.nouveauTheme.invalid){
      return false;
    }else{
      this.creationTheme();
      return true;
    }
  }
  


  public get form(){
    return this.nouveauTheme.controls;
  }

}
