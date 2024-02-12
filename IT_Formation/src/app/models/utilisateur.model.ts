export class Utilisateur {
  idUser!: number;
  nom: string;
  prenom: string;
  mail: string;
  telephone: string;
  comptes!: {
    id: Number,
    motDePasse: String,
    identifiant: String,
    typeCompte: String,
    utilisateur_id_user: number
  };

  constructor(nom: string, prenom: string, mail: string, telephone: string){
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.telephone = telephone;
  }

}