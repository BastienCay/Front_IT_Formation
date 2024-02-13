import { Utilisateur } from "./utilisateur.model";

export class Compte {
  id!: number;
  motDePasse!: string;
  identifiant!: string;
  typeCompte: string = "Users_Normal";
  utilisateur!: Utilisateur;

}