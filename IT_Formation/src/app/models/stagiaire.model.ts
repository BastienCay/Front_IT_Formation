import { Utilisateur } from "./utilisateur.model";

export class Stagiaire {
  id!: number;
  utilisateur: Utilisateur;

  constructor(user: Utilisateur){
    this.utilisateur = user;
  }
}