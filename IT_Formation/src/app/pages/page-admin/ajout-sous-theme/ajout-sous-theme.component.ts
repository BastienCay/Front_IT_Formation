import { Component } from '@angular/core';
import { SousTheme } from '../../../models/sous-theme.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SousThemeService } from '../../../services/sousTheme.service';

@Component({
  selector: 'app-ajout-sous-theme',
  standalone: true,
  imports: [],
  templateUrl: './ajout-sous-theme.component.html',
  styleUrl: './ajout-sous-theme.component.css'
})
export class AjoutSousThemeComponent {
  sousTheme!: SousTheme;

  submitted: boolean = false;

  nouveauSousTheme: FormGroup = this.formBuilder.group({
    designation: ['',[Validators.required,Validators.maxLength(50)]],
    });

  constructor(private formBuilder: FormBuilder, private adresseService: AdresseService){}


  private creationAdresse(){

    const newSousTheme = new SousTheme(
      this.nouveauSousTheme.get('designation')?.value;
    
    this.adresseService.createAdresse(newSousTheme).subscribe(() => {
      console.log('adresse a bien été ajoutée');
      this.submitted = false;
      this.nouveauSousTheme.reset();
    });

    }
  onSubmit(): boolean{
    this.submitted = true;
    if(this.nouveauSousTheme.invalid){
      return false;
    }else{
      this.creationAdresse();
      return true;
    }
  }


  get form(){
    return this.nouveauSousTheme.controls;
  }
}
