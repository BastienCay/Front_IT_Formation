export class Compte {
  idCompte!: number;
  motDePasse: string;
  identifiant: string;
  typeCompte: string;
  utilisateur: number;

  constructor(motDePasse: string,identifiant: string,idUser: number){
    this.identifiant = identifiant;
    this.motDePasse = motDePasse;
    this.typeCompte = "Users_Normal";
    this.utilisateur = idUser;
  }
}