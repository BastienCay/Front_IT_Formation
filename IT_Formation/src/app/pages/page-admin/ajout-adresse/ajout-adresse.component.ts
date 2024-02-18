import { Component } from '@angular/core';
import { Adresse } from '../../../models/adresse.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdresseService } from '../../../services/adresse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-adresse',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout-adresse.component.html',
  styleUrl: './ajout-adresse.component.css'
})
export class AjoutAdresseComponent {

  adresse!: Adresse;

  submitted: boolean = false;

  nouvelleAdresse: FormGroup = this.formBuilder.group({
    codePostal: ['',[Validators.minLength(2),Validators.required,Validators.maxLength(5)]],
    ville: ['',[Validators.required,Validators.maxLength(50)]],
    rue: ['',[Validators.maxLength(50),Validators.required]],
    pays: ['',[Validators.maxLength(50),Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private adresseService: AdresseService, private router: Router){}


  private creationAdresse(){



    const newAdresse = new Adresse(
      this.nouvelleAdresse.get('codePostal')?.value,
      this.nouvelleAdresse.get('ville')?.value,
      this.nouvelleAdresse.get('rue')?.value,
      this.nouvelleAdresse.get('pays')?.value);
    

    this.adresseService.createAdresse(newAdresse).subscribe(() => {
      console.log('adresse a bien été ajoutée');
      this.submitted = false;
      this.nouvelleAdresse.reset();
      this.router.navigate(['/page-admin']);
    });

    }
  onSubmit(): boolean{
    this.submitted = true;
    if(this.nouvelleAdresse.invalid){
      return false;
    }else{
      this.creationAdresse();
      return true;
    }
  }


  get form(){
    return this.nouvelleAdresse.controls;
  }

}
