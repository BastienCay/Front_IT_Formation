export class Compte {
  id!: number;
  motDePasse: string;
  identifiant: string;
  typeCompte: string;
  utilisateur_id_user: number;

  constructor(motDePasse: string,identifiant: string,utilisateur_id_user: number){
    this.identifiant = identifiant;
    this.motDePasse = motDePasse;
    this.typeCompte = 'u';
    this.utilisateur_id_user = utilisateur_id_user;
  }
}