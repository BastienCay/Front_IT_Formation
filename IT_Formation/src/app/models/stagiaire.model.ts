export class Stagiaire {
  id!: number;
  utilisateur_id_user: number;

  constructor(idUser: number){
    this.utilisateur_id_user = idUser;
  }
}