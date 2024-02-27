import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SousThemeService } from '../../../services/sous-theme.service';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';
import ThemeDTO from '../../../models/DTO/themeDTO.model';
import SousThemeDTO from '../../../models/DTO/sousThemeDTO.model';

@Component({
  selector: 'app-ajout-sous-theme',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-sous-theme.component.html',
  styleUrl: './ajout-sous-theme.component.css'
})
export class AjoutSousThemeComponent implements OnInit {
  
  themes = new Array<ThemeDTO>();

  ngOnInit(): void {
    this.themeService.getThemes().subscribe(themeDto => {
      this.themes = themeDto;
    });
  
  }

  sousThemeDto!: SousThemeDTO;

  submitted: boolean = false;
 
  nouveauSousTheme: FormGroup = this.formBuilder.group({
    designation: ['',[Validators.required]],
    idTheme: ['',[Validators.required]],
    
  });

  constructor(private formBuilder: FormBuilder, private sousThemeService: SousThemeService, private themeService: ThemeService,private router: Router){}


private creationSousTheme(){

  this.sousThemeDto = this.nouveauSousTheme.value;
  console.log(this.sousThemeDto);
  this.sousThemeService.createSousTheme(this.sousThemeDto).subscribe(() => {
    this.submitted = false;
    this.nouveauSousTheme.reset();
    this.router.navigate(['/page-admin']);
    });
  
}

onSubmit(): boolean{

  this.submitted = true;
  if(this.nouveauSousTheme.invalid){
    return false;
  }else{
    this.creationSousTheme();
    return true;
  }
}

  public get form(){
    return this.nouveauSousTheme.controls;
  }

}
