import { Compte } from "./compte.model";

export class Utilisateur {
  id!: number;
  nom: string;
  prenom: string;
  mail: string;
  telephone: string;
  comptes!: Compte;

  constructor(nom: string, prenom: string, mail: string, telephone: string){
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.telephone = telephone;
  }

}