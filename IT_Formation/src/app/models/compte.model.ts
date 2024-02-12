import { Utilisateur } from "./utilisateur.model";

export class Compte {
  id!: number;
  motDePasse: string;
  identifiant: string;
  typeCompte: string;
  utilisateur: Utilisateur;

  constructor(motDePasse: string,identifiant: string,user: Utilisateur){
    this.identifiant = identifiant;
    this.motDePasse = motDePasse;
    this.typeCompte = "Users_Normal";
    this.utilisateur = user;
  }
}