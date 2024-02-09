export class Stagiaire {
  id!: number;
  idUser: number;

  constructor(idUser: number){
    this.idUser = idUser;
  }
}